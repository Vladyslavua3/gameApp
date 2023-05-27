import {useEffect, useState} from "react";
import style from "./confirm.module.css";

  

export const ConfirmModal = () => {

    const [timer,setTimer] = useState(20)

    const secondString = String(timer % 60).padStart(2,"0")


    useEffect(()=>{
        setInterval(()=>{
            setTimer((s) => Math.max(s - 1, 0) )
        },1000)
    },[])


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
              <button className={style.btn}>CONFIRM MATCH</button>
          </div>
      </div>
  )
}