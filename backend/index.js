const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const dotenv = require('dotenv').config()


const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }))
const PORT = process.env.PORT || 8080

console.log('testingggggg');

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
    const { email } = req.body;

    try {
        const result = await userModel.findOne({ email: email });

        if (result) {
            res.send({ message: "Email already registered", alert: true });
        } else {
            const data = new userModel(req.body);
            const savedData = await data.save();
            res.send({ message: "Successfully registered", alert: false });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Internal server error" });
    }
});

app.post('/login', async (req, res) => {
    console.log(req.body);

    const { email } = req.body
    const result = await userModel.findOne({ email: email })
    if (result) {
        console.log(result)
        const dataSend = {
            _id: result._id,
            firstName: result.firstName,
            lastName: result.lastName,
            email: result.email,
            image: result.image,
        }
        console.log(dataSend)
        res.send({ message: "Login Successfully", alert: true, data: dataSend })
    } else {
        res.send({ message: "Email is not registered", alert: false })
    }

})





app.listen(PORT, () => {
    console.log(`Server is runnnig on port ${PORT}`)
})


// HYUeEGuPVUf2PL6O  mogo password