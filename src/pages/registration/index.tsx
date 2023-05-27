import React from 'react';
import {getLayoutAuth} from "@/layout/LayoutAuth/LayoutAuth";
import {RegisterPage} from "@/components/auth/Register/RegisterPage";


const Registration = () => <RegisterPage/>


Registration.getLayout = getLayoutAuth

export default Registration;