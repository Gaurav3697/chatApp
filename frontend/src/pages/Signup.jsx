import React, { useState } from 'react';
import useSignup from '../hooks/useSignup';

const Signup = () => {
  const [input,setInput] = useState({
    name:"",
    username:"",
    password:"",
    gender:""
})
const [showPassword,setShowPassword] = useState(false);
const {loading,signup} = useSignup();

const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("submitting");
    console.log(input)
    await signup(input);
}

  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="form-container h-auto w-[100vw] md:w-[50vw] md:h-auto bg-white dark:bg-black bg-opacity-50 dark:bg-opacity-70 flex flex-col rounded-3xl">
          <h1 className='text-black dark:text-white flex justify-center text-4xl font-bold'>SIGN UP</h1>

          <form onSubmit={handleSubmit} className="space-y-6 px-24 py-5 " >

            <div className="mt-2">
              <input placeholder='name' id="name" name="name" type="text" autoComplete="name" onChange={(e)=>{setInput({...input,name:e.target.value})}} value={input.name} required className="p-4 block w-full rounded-2xl border-0 py-1.5 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>

            <div className="mt-2">
              <input placeholder='username' id="username" name="username" type="text" autoComplete="username" onChange={(e)=>{setInput({...input,username:e.target.value})}} value={input.username} required className="p-4 block w-full rounded-2xl border-0 py-1.5 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>

            <div className="flex items-center justify-between w-full">
              <div className="mt-2 w-full">
                <input placeholder='password' id="password" name="password" onChange={(e)=>{setInput({...input,password:e.target.value})}} value={input.password}  type={showPassword ? 'text' : 'password'} autoComplete="current-password" required className="p-4  block w-full rounded-2xl border-0 py-1.5 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                <label>
                  <div className="text-sm w-full flex justify-end items-end self-end right-0 " >
                    <a to={'/forgotpassword'} className="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-300 flex justify-end items-end self-end mr-3">Forgot password?</a>
                  </div>
                  <input
                    type="checkbox"
                    onChange={() => setShowPassword(!showPassword)}
                  />
                  &ensp; Show Password
                </label>
              </div>
            </div>

            <div className="flex flex-col">
              <select id="gender" name="gender" onChange={(e)=>{setInput({...input,gender:e.target.value})}} value={input.gender} className="border border-gray-300 rounded-2xl p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="" disabled>Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div>
              <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
            </div>
            <div className="flex justify-center m-auto"> OR </div>

            <div>
              <a href='/login' className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Login</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup
