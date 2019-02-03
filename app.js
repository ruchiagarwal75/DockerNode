const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const adminRoutes = require('./Routes/admin');
const commonRoutes = require('./Routes/common');
const rootDir = require('./utils/helper').rootDir;

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('./public'))
app.use('/admin',adminRoutes); //any route that starts with /admin like /admin/users
app.use(commonRoutes);

app.use((req,res,next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
})

app.listen(3000, '0.0.0.0');