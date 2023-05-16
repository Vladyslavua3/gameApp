import styles from "./userSection.module.css";
import Image from "next/image";
import smallWallet from "@/data/img/smallwallet.png";
import iconSmallProfile from "@/data/img/iconSmallProfile.png";
import iconSettings from "@/data/img/iconSettings.png";
import iconRing from "@/data/img/iconRing.png";
import avatar from "@/data/img/Polygon 1.png";
import rang from "@/data/img/Rang.png";
import iconTilt from "@/data/img/iconTilt.png";
import iconChat from "@/data/img/iconChat.png";

export const UserSection = () => {
  return(
      <section className={styles.container}>
          <div className={styles.containerHeader}>
              <Image src={smallWallet} alt={'wallet'}/>
              <Image src={iconSmallProfile} alt={'profile'}/>
              <Image src={iconSettings} alt={'settings'}/>
              <Image src={iconRing} alt={'ring'}/>
          </div>
          <div className={styles.avatar}>
              <Image src={avatar} alt={'avatar'} />
              <h3>Crypto Nygma</h3>
          </div>
          <div className={styles.title}>
              <h3 style={{color:'rgba(255, 255, 255, 0.55)'
              }}>Overview</h3>
              <p style={{color: 'rgba(255, 255, 255, 0.25)'}}>See all</p>
          </div>
          <div>
              <div className={styles.box}>
                  <Image src={rang} alt={'rang'}/>
                  <div className={styles.boxItem}>
                      <h3 className={styles.fontWhite}>Recent Results</h3>
                      <p style={{color:'green'}}>W W W W W</p>
                  </div>
              </div>
              <div className={styles.box}>
                  <div className={styles.boxItem}>
                      <h3 className={styles.fontWhite}>EU RANK</h3>
                      <p style={{color:'green'}}>30212</p>
                  </div>
                  <div className={styles.boxItem}>
                      <h3 className={styles.fontWhite}>GER RANK</h3>
                      <p style={{color:'green'}}>6530</p>
                  </div>
              </div>
              <div className={styles.box}>
                  <div className={styles.boxItem}>
                      <h3 className={styles.fontWhite}>LEAGUE</h3>
                      <p style={{color:'grey'}}>Silver</p>
                  </div>
                  <div className={styles.boxItem}>
                      <h3 className={styles.fontWhite}>LEAGUE RANK</h3>
                      <p style={{color:'grey'}}>13</p>
                  </div>
              </div>
          </div>
          <div className={styles.tilt}>
              <h3 className={styles.fontWhite}>TILT METER</h3>
              <Image src={iconTilt} alt={'tilt'}/>
          </div>
          <Image src={iconChat} alt={'chat'} className={styles.chat}/>
      </section>
  )
}