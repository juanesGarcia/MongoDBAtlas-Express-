const express=require('express');
const mongos = require('mongoose');
require('dotenv').config();
const userRoute = require('./routes/company')
const cors =require('cors')

const app = express();
const port= process.env.PORT || 9000;

//para que pase de json a js para que lo pueda leer

app.use(express.json());
app.use(cors())

//crear un prefijo par todas mis paginas 

app.use('/api',userRoute);

//creando rutas req obj peticion res objeto respuesta

app.get('/',(req,res)=>{
    res.send('welcomne to my api')
})

mongos.connect(process.env.MONGODB_URL).then(()=> console.log('CONNECTION')).catch((error)=> console.error(error));
app.listen(port,()=> console.log('listening',port));


