import { Lato } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import {SideBar} from "@/components/sideBar/SideBar";
import {Menu} from "@/components/menu/Menu";
import {MainSection} from "@/components/mainSection/MainSection";
import {UserSection} from "@/components/userSection/UserSection";

const inter = Lato({ weight:'400',subsets: ['latin'] })



export default function Home() {
  return (
      <>
      <main className={styles.main} style={inter.style}>
          <SideBar/>
          <Menu/>
          <MainSection/>
          <UserSection/>
      </main>
      </>
  )
}
