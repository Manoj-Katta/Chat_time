const mongoose = require('mongoose');

const url=`mongodb+srv://messenger_app:manoj2003@cluster0.kshy94d.mongodb.net/`;

mongoose.connect(url,{
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => console.log('Connected to DB')).catch((e)=> console.log('Error', e))