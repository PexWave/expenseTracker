import React from 'react'
import { Button } from "flowbite-react";
import { useForm } from "react-hook-form"

//api
import { signin } from '../../../composable/authentication/signin';

//components
import Layout from '../../../components/layouts/Layout'

export default function Signin() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const validations = {
    email: { required: 'This field is required', pattern: /^\S+@\S+\.\S+$/ }, // Email format validation
    password: { required: 'This field is required', minLength: 8 }, // Minimum password length
    // confirmPassword: { required: true, validate: (value) => value === formValues.password || "Passwords don't match" }, // Custom validation for password confirmation
  };
  const onSubmit = (data) => signin(data);

  return (
    <Layout>
    <form onSubmit={handleSubmit(onSubmit)}>

      <div className='flex flex-col gap-2 w-96'>
        <span className='text-2xl m-auto'>Login</span>
        <input {...register("email", validations.email)} type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-12" placeholder="Email" required />
        {errors.email && <span className="text-red-500">{errors.email.message}</span>}
        {errors.email?.type === "pattern" && (
        <p className="text-red-500" role="alert">Enter a valid email address</p>
      )}
        <input {...register("password", validations.password)} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-12" placeholder="Password" required />
        {errors.password && <span className="text-red-500">{errors.password.message}</span>}
        {errors.password?.type === "minLength" && (
        <p className="text-red-500" role="alert">min length 8</p>
      )}
        <Button type='submit' color="dark" size="md" className='w-56 m-auto'>Sign In</Button>
      </div>
    </form>

    </Layout>
  )
}
