const express = require('express')
const app = express()
const cors = require('cors') 
const port = process.env.PORT || 5000
const dotenv = require('dotenv')

const connectDB = require('./db')

app.use(cors());
app.use(express.json());

//env config
dotenv.config();

app.use('/api/cars/' , require('./routes/carsRoute'))
app.use('/api/users/' , require('./routes/usersRoute'))
app.use('/api/bookings/' , require('./routes/bookingsRoute'))


const path = require('path')


if(process.env.NODE_ENV==='production')
{

    app.use('/' , express.static('client/build'))

    app.get('*' , (req , res)=>{

          res.send('Hello world')//File(path.resolve(__dirname, 'client/build/index.html'));

    })

}

app.get('/', (req, res) => res.send('Hello World!'))


 

connectDB().then((response) => {
    console.log('Mongo DB Connection Successfull')
    
    app.listen(process.env.PORT, () => console.log(`Node JS Server Started in Port ${process.env.PORT}`))
}).catch((err) => {
    console.log('Mongo DB Connection Error')
})
