const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const dotenv = require('dotenv').config()


const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }))
const PORT = process.env.PORT || 8080


//mongodb connection
// --------------------
console.log(process.env.VITE_MONGODB_URL)
mongoose.connect(process.env.VITE_MONGODB_URL).then(() => {
    console.log('Conneted to the DB')
}).catch((err) => {
    console.log(err)
})

//shema

const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
    confirmPassword: String,
    image: String
})

//Creating the model
const userModel = mongoose.model("user", userSchema);


//api

app.get('/', (req, res) => {
    res.send('Message form server')
})
app.post('/signup', async (req, res) => {
    console.log(req.body);
    const { email } = req.body
    userModel.findOne({ email: email }), function (err, result) {
        // if(err) throw err;
        console.log(result)
        console.log(err)
        if (result) {
            res.send({ message: "Email already registered" })
        }
        else {
            const data = userModel(req.body)
            const save = data.save()
            res.send({ message: "successfully Rgistered" })
        }
    }


})
// app.post('/login',(req,res)=>{
//     console.log(req.body);

// })





app.listen(PORT, () => {
    console.log(`Server is runnnig on port ${PORT}`)
})


// HYUeEGuPVUf2PL6O  mogo password