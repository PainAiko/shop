const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const adminRoutes = require('./routes/admin')
const shopRouter = require('./routes/shop');
const notFoundPage = require('./controllers/error');
const app = express();


app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(path.dirname(process.mainModule.filename) ,'public')));
app.use('/admin',adminRoutes);
app.use(shopRouter);

app.use(notFoundPage);

app.listen(8001 ,() => console.log("http://localhost:8001"));
 