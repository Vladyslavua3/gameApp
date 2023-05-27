import style from "@/layout/LayoutAuth/layoutAuth.module.css";
import Image from "next/image";
import backgroundGreen from "@/data/img/ellipseBack.png";
import backgroundBlue from "@/data/img/ellipseBack2.png";
import React from "react";
import {ConfirmCodePage} from "@/components/auth/ConfimCode/ConfirmCodePage";

const ConfirmCode = () => {
  return(
      <div className={style.container}>
          <div className={style.backgroundGreen}>
              <Image src={backgroundGreen} alt={'backgroundGreen'}/>
          </div>
          <div className={style.backgroundBlue}>
              <Image src={backgroundBlue} alt={'backgroundBlue'}/>
          </div>
          <ConfirmCodePage/>
      </div>
  )
}

export default ConfirmCode