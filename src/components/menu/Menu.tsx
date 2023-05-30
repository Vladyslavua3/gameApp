import styles from "./menu.module.css";
import Image from "next/image";
import addButton from "@/data/img/addbutton.png";
import iconCounter from "@/data/img/iconCounter.png";
import shieldTick from "@/data/img/shieldtick.png";
import github from "@/data/img/github.png";
import discord from "@/data/img/discord.png";
import twitter from "@/data/img/twitter.png";
import twitch from "@/data/img/twitch.png";
import {MatchMakingItems} from "@/components/menu/MenuMatchMaking";
import {MenuItem} from "@/components/menu/MenuItem";
import {menuItems} from "@/data/data";



const menuData = menuItems


export const Menu = () => {


  return(
      <section className={styles.container}>
          <div className={styles.containerHeader}>
              <Image src={addButton} alt={'addButton'}/>
              <Image src={iconCounter} alt={'iconCounter'}/>
              <h2>ADD GAME</h2>
          </div>
          <div className={styles.menu}>
              <div className={styles.menuItem}>
                  {menuData.map((item)=> <MenuItem key={item.name} img={item.img} name={item.name}/>)}
              </div>
              <div className={styles.menuItem}>
                  <h3>MATCHMAKING</h3>
                  <MatchMakingItems/>
              </div>
          </div>
          <div className={styles.antiCheat}>
              <Image src={shieldTick} alt={'anti-cheat'}/>
              <h3>Anti-Cheat</h3>
          </div>
          <div className={styles.socialLogos}>
              <Image src={github} alt={'github icon'}/>
              <Image src={discord} alt={'discord icon'}/>
              <Image src={twitter} alt={'twitter'}/>
              <Image src={twitch} alt={'twitch'}/>
          </div>
      </section>
  )
}