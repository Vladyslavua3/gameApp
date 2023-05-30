import React, {useEffect, useRef, useState} from 'react';
import Image from "next/image";
import player1 from '../../../data/img/Player1.png'
import player2 from '../../../data/img/secondPlayer.png'
import mapLego from '../../../data/img/mapLego.png'
import mapLou from '../../../data/img/mapLou.png'
import mapRedLine from '../../../data/img/mapRedline.png'
import mapShred from '../../../data/img/mapShred.png'
import style from './gameSection.module.css'
import {useActions} from "@/hooks/useActions";
import {appActions} from "@/app/appReducer";
import {mapsActions} from "@/components/mainSection/gameReducer/gameReducer";
import {useSelector} from "react-redux";
import {
    selectAwpLegoMap,
    selectByLouMap, selectGame,
    selectRedLineMap,
    selectShred
} from "@/components/mainSection/gameReducer/gameSelector";;
import {PreparingMatch} from "@/components/mainSection/PreparingMatch/PreparingMatch";


export const GameSection = () => {

    const {setRedMap,setLegoMap,setLouMap,setShredMap} = useActions(mapsActions)

    const redMap = useSelector(selectRedLineMap)

    const byLou = useSelector(selectByLouMap)

    const awpLego = useSelector(selectAwpLegoMap)

    const shred = useSelector(selectShred)

    const game = useSelector(selectGame)

    const [chooseMap,setChooseMap] = useState(false)

    const lastMap = useRef({
        name:'',
        isSelected:false,
        img:Image
    })

    let finalMap = {}

    useEffect( () => {

        let res = []

        for (let gameKey in game) {
            if(game[gameKey].isSelected){
                res = [...res,game[gameKey]]
            }
        }

        if (res.length === 1) {
            setChooseMap(true)
            lastMap.current = res[0]
        }

        console.log(finalMap)

    },[game])


    const [timer,setTimer] = useState(20)

    const secondString = String(timer % 60).padStart(2,"0")


    useEffect(()=>{
        setInterval(()=>{
            setTimer((s) => Math.max(s - 1, 0) )
        },1000)
    },[])



    const handlerForLou = () => {
        setTimer(20)
        setLouMap({isSelected:false})
    }


    const handlerForRedLine = () => {
        setTimer(20)
        setRedMap({isSelected:false})
    }

    const handlerForLego = () => {
        setTimer(20)
        setLegoMap({isSelected:false})
    }

    const handlerForShred = () => {
        setTimer(20)
        setShredMap({isSelected:false})
    }


    return (
        <div className={style.container}>
            <div className={style.box}>
            <div className={style.playersBox}>
                <Image src={player1} alt={'player1'}/>
                <span>VS</span>
                <Image src={player2} alt={'player2'}/>
            </div>
                {chooseMap ? <div><PreparingMatch name={lastMap.current.name} img={lastMap.current.img}/></div> :
                    <div className={style.box}>
                    <div className={style.timerBox}>
                        <h2>
                            {
                                secondString
                            }
                        </h2>
                    </div>
                    <div className={style.mapsBox}>
                    <ul style={{listStyleType:'none'}}>
                    <li className={style.mapBox}>
                    <Image src={mapRedLine} alt={'mapRedLine'}/>
                    <h3>MAP-Aim_Redline</h3>
                    <button onClick={handlerForRedLine}  disabled={!redMap.isSelected} className={redMap.isSelected ? style.btn : style.selectedBtn}>BAN</button>
                    </li>
                    <li className={style.mapBox}>
                    <Image src={mapLou} alt={'mapLou'}/>
                    <h3>MAP-1v1 Aim by LOU</h3>
                    <button onClick={handlerForLou} disabled={!byLou} className={byLou.isSelected ? style.btn : style.selectedBtn}>BAN</button>
                    </li>
                    <li className={style.mapBox}>
                    <Image src={mapLego} alt={'mapLego'}/>
                    <h3>MAP-AWP_Lego_Neon</h3>
                    <button onClick={handlerForLego} disabled={!awpLego} className={awpLego.isSelected ? style.btn : style.selectedBtn}>BAN</button>
                    </li>
                    <li className={style.mapBox}>
                    <Image src={mapShred} alt={'mapShred'}/>
                    <h3>MAP-Shred</h3>
                    <button onClick={handlerForShred} disabled={!shred} className={shred.isSelected ? style.btn : style.selectedBtn}>BAN</button>
                    </li>
                    </ul>
                    </div>
                    </div>
                }
            </div>
        </div>
    );
};




