import {PropsWithChildren, ReactElement} from "react";
import {NextPage} from "next";
import style from '../LayoutAuth/layoutAuth.module.css'
import Image from "next/image";
import backgroundGreen from '../../data/img/ellipseBack.png'
import backgroundBlue from '../../data/img/ellipseBack2.png'
import pinkCircle from '../../data/img/ellipsePink.png'
import yellowCircle from '../../data/img/ellipseYellow.png'
import greenCircle from '../../data/img/ellipseGreen.png'
import blueCircle from '../../data/img/ellipseBlue.png'
import backgroundLogo from '../../data/img/logoImg.png'
import {inter} from "@/pages";


export const LayoutAuth: NextPage<PropsWithChildren> = (props) => {
    const {children} = props

    return (
        <div className={style.container}>
            <div className={style.backgroundGreen}>
                <Image src={backgroundGreen} alt={'backgroundGreen'}/>
            </div>
            <div className={style.backgroundBlue}>
                <Image src={backgroundBlue} alt={'backgroundBlue'}/>
            </div>
            <>{children}</>
            <div className={style.backgroundLogo}>
                <Image src={backgroundLogo} alt={'backgroundLogo'}/>
            </div>
            <div className={style.backgroundCircles}>
                <Image src={pinkCircle} alt={'pinkCircle'}/>
                <Image src={yellowCircle} alt={'yellowCircle'}/>
                <Image src={greenCircle} alt={'greenCircle'}/>
                <Image src={blueCircle} alt={'blueCircle'}/>
            </div>
        </div>
    );
}

export const getLayoutAuth = (page: ReactElement) =>  <LayoutAuth>{page}</LayoutAuth>