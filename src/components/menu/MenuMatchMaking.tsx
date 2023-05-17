import styles from "./menu.module.css";
import Image from "next/image";
import iconCounterSmall from "@/data/img/iconCounterSmall.png";
import play from "@/data/img/Vector.png";
import greenPlay from '@/data/img/greenPlay.png'
import {useActions} from "@/hooks/useActions";
import {appActions} from "@/app/appReducer";
import {MouseEventHandler, useState} from "react";



export const MatchMakingItems = () => {

    const [isActive,setIsActive] = useState(false)

    const [isActiveForFive,setIsActiveForFive] = useState(false)

    const {setOneVsOne,setFiveVsFive} = useActions(appActions)


    const clickHandler:MouseEventHandler<HTMLButtonElement> = () => {
        setOneVsOne({oneVSOne:true})
        setFiveVsFive({fiveVSFive:false})
        setIsActive(!isActive)
        setIsActiveForFive(false)
    }

    const clickHandlerForFive:MouseEventHandler<HTMLButtonElement> = () => {
        setFiveVsFive({fiveVSFive:true})
        setOneVsOne({oneVSOne:false})
        setIsActiveForFive(!isActiveForFive)
        setIsActive(false)
    }

    return (
        <>
            <div className={!isActive ? styles.matchItem : styles.active}
                 onClick={clickHandler}
                 onBlur={()=>setIsActive(!isActive)}
            >
                <Image src={iconCounterSmall} alt={'icon'}/>
                <p>1 VS 1 RANKED</p>
                <Image src={!isActive ? play : greenPlay} alt={'play'}/>
            </div>
            <div className={!isActiveForFive ? styles.matchItem : styles.active}
                 onBlur={()=>setIsActive(!isActive)}
                 onClick={clickHandlerForFive}>
                <Image src={iconCounterSmall} alt={'icon'}/>
                <p>5 VS 5 RANKED</p>
                <Image src={!isActiveForFive ? play : greenPlay} alt={'play'}/>
            </div>
            <div className={styles.matchItem}>
                <Image src={iconCounterSmall} alt={'icon'}/>
                <p>5v5 UNRANKED</p>
                <Image src={play} alt={'play'}/>
            </div>
            <div className={styles.matchItem}>
                <Image src={iconCounterSmall} alt={'icon'}/>
                <p>PUBLIC WARMUP</p>
                <Image src={play} alt={'play'}/>
            </div>
        </>
    )
}
