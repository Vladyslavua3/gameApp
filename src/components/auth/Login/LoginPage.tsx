import style from '../Login/loginPage.module.css'
import Image from "next/image";
import googleIcon from '../../../data/img/googleIcon.png'
import steamIcon from '../../../data/img/steamIcon.png'
import Link from "next/link";
import {Lato} from "next/font/google";


const lato = Lato({ weight:'400',subsets: ['latin'] })


export const LoginPage = () => {
    return (
        <div className={style.container} style={lato.style}>
            <div className={style.topInfo}>
                <span style={{borderBottom:'2px solid white'}}>Sign In</span>
                <Link href={'registration'} className={style.topLink}>Register</Link>
            </div>
            <div className={style.infoDiv}>
                <h1 className={style.infoTitle}>Sign In to play on SubFag</h1>
                <p className={style.infoP}>{`if you don't have an account
                you can            
            `}</p><Link href={'registration'} className={style.infoLink}>Register here!</Link>
            </div>
            <div className={style.formDiv}>
                <form className={style.form}>
                    <input className={style.inputStyle} placeholder={'Email'} type={'email'}/>
                    <input className={style.inputStyle} placeholder={'Password'} type={'password'}/>
                    <span className={style.forgetSpan}>Forget Password ?</span>
                    <button className={style.btn}>Sign in</button>
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
  )
}