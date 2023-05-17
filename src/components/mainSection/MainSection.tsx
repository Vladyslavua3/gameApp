import styles from "./mainSection.module.css";
import Image from "next/image";
import Banner from "@/data/img/Banner.png";
import card1 from "@/data/img/Featured Card 1.png";
import card2 from "@/data/img/Featured Card 2.png";
import card3 from "@/data/img/Featured Card 3.png";
import card4 from "@/data/img/Featured Card 4.png";
import plus from '@/data/img/plus.png'
import avatar from '@/data/img/avatar.png'
import {Lato} from "next/font/google";
import {MouseEventHandler, useEffect, useState} from "react";
import {useActions} from "@/hooks/useActions";
import {appActions} from "@/app/appReducer";
import {useSelector} from "react-redux";
import {selectFiveVsFive, selectOneVsOne} from "@/app/appSelectors";

const inter = Lato({ weight:'400',subsets: ['latin'] })



const OneVsOneSection = () => {

    const [isSearching,setIsSearching] = useState<boolean>(false)

    return(
        <div className={styles.containerForOne}>
            <div className={styles.containerForOneItem}>
                <Image src={avatar} alt={''} width={30}/>
                <p>VS</p>
                <Image src={plus} alt={''}/>
            </div>
            {isSearching && <p className={styles.fontWhite}>SEARCHING</p>}
            <button  className={styles.btnForSearching} style={inter.style} onClick={() => setIsSearching(!isSearching)}>{!isSearching ? 'SEARCH' : 'CANCEL'}</button>
        </div>
    )
}


const FiveVsFiveSection = () => {

    const [isSearching,setIsSearching] = useState<boolean>(false)

    const {setFiveVsFive} = useActions(appActions)

    const isFiveVsFive = useSelector(selectFiveVsFive)

    return(
        <div className={styles.containerForOne}>
            <div className={styles.containerForOneItem}>
                <Image src={avatar} alt={''} width={30}/>
                <Image src={plus} alt={''}/>
                <Image src={plus} alt={''}/>
                <Image src={plus} alt={''}/>
                <Image src={plus} alt={''}/>
            </div>
            {!isSearching && <button className={styles.btnForSearching}
                                     style={inter.style}
                                     onClick={()=>setFiveVsFive({fiveVSFive:!isFiveVsFive})}
            >LEAVE</button>}
            <button  className={styles.btnForSearching} style={inter.style} onClick={() => setIsSearching(!isSearching)}>SEARCH</button>
        </div>
    )
}


export const MainSection = () => {

    const isOneVsOne = useSelector(selectOneVsOne)

    const isFiveVsFive = useSelector(selectFiveVsFive)

    const {setFiveVsFive} = useActions(appActions)

    const clickHandler:MouseEventHandler<HTMLButtonElement> = () => {
            setFiveVsFive({fiveVSFive:true})
    }

  return(
      <section className={styles.container}>
          {!isFiveVsFive ?
              <button onClick={clickHandler}
                      className={styles.btn}
                      style={inter.style}
              >Create Party</button>
              : isOneVsOne ? <OneVsOneSection/> : <FiveVsFiveSection/>}
          <div>
              <Image src={Banner} alt={''}/>
          </div>
          <div>
              <h2 className={styles.fontWhite}>Active Competitions</h2>
              <Image src={card1} alt={''}/>
              <Image src={card2} alt={''}/>
          </div>
          <div>
              <h2 className={styles.fontWhite}>Upcoming Events</h2>
              <Image src={card3} alt={''}/>
              <Image src={card4} alt={''}/>
          </div>
      </section>
  )
}