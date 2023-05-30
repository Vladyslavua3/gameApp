import {useEffect, useState} from "react";
import style from "./confirm.module.css";
import {useActions} from "@/hooks/useActions";
import {appActions} from "@/app/appReducer";

  

export const ConfirmModal = () => {

    const [timer,setTimer] = useState(20)

    const secondString = String(timer % 60).padStart(2,"0")

    const {setConfirmGame} = useActions(appActions)

    useEffect(()=>{
        setInterval(()=>{
            setTimer((s) => Math.max(s - 1, 0) )
        },1000)
    },[])


    const handler = () => {
        setConfirmGame({confirmGame:true})
    }

  return(
      <div className={style.container}>
          <div className={style.modal}>
              <h1>MATCH FOUND</h1>
              <div className={style.border}>
                  <h2>
                  {
                      secondString
                  }
                  </h2>
              </div>
              <button className={style.btn} onClick={handler}>CONFIRM MATCH</button>
          </div>
      </div>
  )
}