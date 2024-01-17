import React, { useState } from "react";
import { BiShowAlt, BiSolidHide } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginRedux } from "../../redux/userSlice";

const Login = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  })

  const navigate = useNavigate()

  const loginData = useSelector(state => state);
  console.log(loginData)
  const dispatch = useDispatch();

  console.log(userData)
  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setUserData((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = userData
    if (email && password) {
      console.log(email,password)
      console.log(import.meta.env.VITE_SERVER_DOMAIN)
      // const fetchLoginDetails = await fetch(`${import.meta.env.VITE_SERVER_DOMAIN}/login`, {
      //   method: "POST",
      //   headers: {
      //     "content-type": "application/json"
      //   },
      //   body: JSON.stringify(userData)
      // })
      // alert('succcess');
      // navigate('/')
      // const data = fetchLoginDetails.json();
      // console.log(data);
      if (userData) {
        dispatch(loginRedux(userData))
        setTimeout(() => {
          navigate('/')
        }, 1000)
      }

    } else {
      alert('Please fill the fields')
    }
  }

  return (
    <div className="p-2 md:p-4">
      <div className="w-full bg-white m-auto max-w-sm flex items-center flex-col p-4">
        {/* <h1 className="text-2xl font-bold">Log in</h1> */}
        <div className="w-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto">
          <img src="https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0=" alt="user" className="w-full" />
        </div>
        <form className="w-full py-3 flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="bg-slate-200 mt-1 w-full px-2 py-1 rounded mb-2 focus-within:outline-blue-300"
            value={userData.email}
            onChange={handleInputChange}
          />

          <label htmlFor="password">Password</label>
          <div className="flex bg-slate-200 mt-1 px-2 py-1 rounded mb-2 focus-within:outline focus-within:outline-blue-300">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className=" w-full bg-slate-200 border-none outline-none"
              value={userData.password}
              onChange={handleInputChange}
            />
            <span
              className="flex text-xl cursor-pointer"
              onClick={handleShowPassword}
            >
              {showPassword ? <BiShowAlt /> : <BiSolidHide />}
            </span>
          </div>
          <button className="w-full max-w-[150px] m-auto text-center bg-red-500 hover:bg-red-600 text-white text-xl font-medium rounded-full py-1 mt-4">
            Login
          </button>
        </form>
        <p className="text-sm mt-2">
          Don't have account?{" "}
          <Link to={"/signup"} className="text-red-500 underline">
            sign up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login






// const MongoClient = require('mongodb').MongoClient;

// // Connect to the MongoDB server
// MongoClient.connect('mongodb://localhost:27017/', function(err, client) {
//   if (err) throw err;

//   // Get the sample database
//   const db = client.db('sample');

//   // Get the collection
//   const collection = db.collection('test');

//   // Insert a document
//   collection.insertOne({ name: 'John', age: 30 }, function(err, result) {
//     if (err) throw err;

//     console.log(result);

//     // Close the connection
//     client.close();
//   });
// });