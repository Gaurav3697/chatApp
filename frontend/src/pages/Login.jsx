import React, { useState } from 'react';
import useLogin from '../hooks/useLogin';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [ userName, setUsername ] = useState("");
  const [ password, setPassword ] = useState("");
  const { loading, login } = useLogin();

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("submitting");
    console.log(userName,password)
    await login(userName,password);
}

  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="form-container h-[80vh] w-[100vw] md:w-[50vw] md:h-[70vh] bg-white dark:bg-black dark:text-white bg-opacity-50 dark:bg-opacity-70 flex flex-col rounded-3xl">
          <h1 className='text-black dark:text-white flex justify-center text-4xl font-bold'>Log In</h1>
          <form className="space-y-6 px-24 py-5 " onSubmit={handleSubmit} >

            <div className="mt-2">
              <input placeholder='username' id="username" name="username" type="text" onChange={(e) => setUsername(e.target.value)} autoComplete="username" required className="p-4 block w-full rounded-2xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset dark:text-white ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>

            <div className="flex items-center justify-between w-full">
              <div className="mt-2 w-full">
                <input placeholder='password' id="password" name="password" type={showPassword ? 'text' : 'password'} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" required className="p-4  block w-full rounded-2xl border-0 py-1.5 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                <label>
                  <div className="text-sm w-full flex justify-end items-end self-end right-0"  >
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

            <div>
              <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Log In</button>
            </div>

            <div className="flex justify-center m-auto"> OR </div>

            <div>
              <a href='/signup' className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Register</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
