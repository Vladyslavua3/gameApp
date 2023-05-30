import React from 'react';
import Link from "next/link";
import {Lato} from "next/font/google";
import style from '../ConfimCode/confirmCodePage.module.css'
import Image from "next/image";
import backgroundLogo from "@/data/img/logoImg.png";

const lato = Lato({ weight:'400',subsets: ['latin'] })

export const ConfirmCodePage = () => {


    return (
        <div className={style.container} style={lato.style}>
            <div className={style.infoDiv}>
                <h1 className={style.confirmTitle}>Enter the verification <br/>code we just sent your <br/>registered email</h1>
            </div>
            <div className={style.formDivConfirm}>
                <form className={style.form}>
                    <div className={style.inputContainer}>
                        <input className={style.codeInput} type={'tel'} maxLength={1} required/>
                        <input className={style.codeInput} type={'tel'} maxLength={1} required/>
                        <input className={style.codeInput} type={'tel'} maxLength={1} required/>
                        <input className={style.codeInput} type={'tel'} maxLength={1} required/>
                        <input className={style.codeInput} type={'tel'} maxLength={1} required/>
                        <input className={style.codeInput} type={'tel'} maxLength={1} required/>
                    </div>
                    <button className={style.btn} style={lato.style}>Confirm Code</button>
                    <p className={style.resendStyle}>if you did not get email you can <Link href={'/'} className={style.infoLink}>Resend here!</Link></p>
                </form>
                <div className={style.logo}>
                    <Image src={backgroundLogo} alt={'backgroundLogo'}/>
                </div>
            </div>
        </div>
    );
};
