import React from 'react';
import style from "@/components/auth/Login/loginPage.module.css";
import Link from "next/link";
import Image from "next/image";
import googleIcon from "@/data/img/googleIcon.png";
import steamIcon from "@/data/img/steamIcon.png";
import {Lato} from "next/font/google";


const lato = Lato({ weight:'400',subsets: ['latin'] })

export const RegisterPage = () => {
    return (
        <div className={style.container} style={lato.style}>
            <div className={style.topInfo}>
                <Link href={'login'} className={style.topLink}>Sign In</Link>
                <span style={{borderBottom:'2px solid white'}}>Register</span>
            </div>
            <div className={style.infoDiv}>
                <h1 className={style.infoTitle}>Sign Up to play on SubFag</h1>
            </div>
            <div className={style.formDiv}>
                <form className={style.form}>
                    <input className={style.inputStyle} placeholder={'Email'} type={'email'}/>
                    <input className={style.inputStyle} placeholder={'Create password'} type={'password'}/>
                    <input className={style.inputStyle} placeholder={'Confirm password'} type={'password'}/>
                    <button className={style.btn}>Sign up</button>
                    <div className={style.title}>
                        <span>Or continue with</span>
                    </div>
                    <div className={style.socialDiv}>
                        <Image src={googleIcon} alt={'googleIcon'}/>
                        <Image src={steamIcon} alt={'steamIcon'}/>
                    </div>
                </form>
            </div>
        </div>
    );
};
