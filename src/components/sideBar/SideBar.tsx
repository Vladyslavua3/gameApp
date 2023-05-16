import Image from "next/image";
import logo from "@/data/img/logo.png";
import Marketplace from "@/data/img/Marketplace.png";
import Upgrade from "@/data/img/Upgrade.png";
import Wallet from "@/data/img/Wallet.png";
import Profile from "@/data/img/profileLogo.png";
import styles from './sideBar.module.css'

export const SideBar = () => {
  return(
      <section className={styles.left}>
          <div className={styles.leftHead}>
              <Image src={logo} width={60} height={60} alt={'logo'} className={styles.logo}/>
          </div>
          <div>
              <ul className={styles.leftMenu}>
                  <li>
                      <Image src={Marketplace} alt={'rewards'}/>
                  </li>
                  <li>
                      <Image src={Upgrade} width={58} alt={'favorite'}/>
                  </li>
                  <li>
                      <Image src={Wallet} alt={'wallet'}/>
                  </li>
                  <li>
                      <Image src={Profile} alt={'profile'}/>
                  </li>
              </ul>
          </div>
      </section>
  )
}