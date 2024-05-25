import React from 'react'
import { Carousel } from "flowbite-react";
import { Outlet, Link } from "react-router-dom";

import './onboarding.css'
//components
import {
    onboardingText, onboardingText2, onboardingText3,
    onboardingTextBody, onboardingTextBody2, onboardingTextBody3
} from '../../common/texts';

import Layout from '../../components/layouts/Layout';

export default function Onboarding() {
  return (
    <>
        <Layout>
            <div className='w-[500px] h-[800px]'>

            <Carousel leftControl=" " rightControl=" " slideInterval={1000}>
                <div className='flex flex-col text-center'>
                    <img src="/images/handmoney.png" alt="Placeholder" />
                    <span className='font-poppinsBold text-4xl'>
                        {onboardingText}
                    </span>
                    <span className='font-poppins text-2xl'>
                        {onboardingTextBody}
                    </span>
                </div>

                <div className='flex flex-col text-center'>
                    <img src="/images/Ilustration.png" alt="Placeholder" />
                    <span className='font-poppinsBold text-4xl'>
                        {onboardingText2}
                    </span>
                    <span className='font-poppins text-2xl'>
                        {onboardingTextBody2}
                    </span>
                </div>

                <div className='flex flex-col text-center'>
                    <img src="/images/plan.png" alt="Placeholder" />
                    <span className='font-poppinsBold text-4xl'>
                        {onboardingText3}
                    </span>
                    <span className='font-poppins text-2xl'>
                        {onboardingTextBody3}
                    </span>
                </div>
            </Carousel>

            </div>

            <div className='flex flex-col w-64'>
                <Link to={`/auth/signup`} class="text-2xl text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full px-5 py-2.5 text-center mb-2">Sign Up</Link>
                <Link to={`/auth/login`} class="text-2xl text-violet-100 bg-light-40 hover:bg-light-100 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full px-5 py-2.5 text-center mb-2">Login</Link>

            </div>
        </Layout>

    </>
  )
}
