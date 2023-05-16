import styles from "./mainSection.module.css";
import Image from "next/image";
import Banner from "@/data/img/Banner.png";
import card1 from "@/data/img/Featured Card 1.png";
import card2 from "@/data/img/Featured Card 2.png";
import card3 from "@/data/img/Featured Card 3.png";
import card4 from "@/data/img/Featured Card 4.png";
import {Lato} from "next/font/google";
import {useState} from "react";

const inter = Lato({ weight:'400',subsets: ['latin'] })


export const MainSection = () => {

    const [isClicked,setIsClicked] = useState(false)

    const clickHandler = () => {
        setIsClicked(true)
    }

  return(
      <section className={styles.container}>
          {!isClicked ?  <button onClick={clickHandler} className={styles.btn} style={inter.style}>Create Party 5v5</button> : ''}
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