const startupDebugger = require('debug')('app:startup');
const dbpDebugger = require('debug')('app:db');
const config = require('config');
const morgan = require('morgan');
const helmet = require('helmet');

const express = require('express');
const app = express();
const courses = require('./routes/courses');

console.log(`Node ENV: ${process.env.NODE_ENV}`);
console.log(`App ENV: ${app.get('env')}`);

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));


//configuration
console.log(`Application name: ${config.get('name')}`);
console.log(`Application email serevr: ${config.get('email.host')}`);

if(app.get('env') === 'development'){
    app.use(morgan('tiny'));
    console.log('Morgan enabled ......');
}

app.use('/api/courses',courses);

app.use(helmet());

app.get('/',(req,res) => {
    res.send('Hello World !!!!');
});

//PORT
const port = process.env.port || 3000;
app.listen(port, () => console.log(`Listening on port ${port} ....`));