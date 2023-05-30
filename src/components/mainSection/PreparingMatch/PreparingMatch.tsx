import Image, {ImageProps} from "next/image";
import {FC} from "react";
import style from './preparingMatch.module.css'

type PropsType = {
    name:string
    img:ImageProps
}


export const PreparingMatch:FC<PropsType> = ({name,img}) => {
  return(
      <div>
          <h1 className={style.title}>PREPARING MATCH</h1>
          <div className={style.container}>
              <h2>{name}</h2>
              <Image src={img.src} alt={name} width={400} height={400}/>
              <div className={style.linkBox}>
                  <div className={style.link}></div>
                  <button className={style.btn}>COPY IP</button>
              </div>
          </div>
      </div>
  )
}