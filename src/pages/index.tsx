import { Lato } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import {SideBar} from "@/components/sideBar/SideBar";
import {Menu} from "@/components/menu/Menu";
import {MainSection} from "@/components/mainSection/MainSection";
import {UserSection} from "@/components/userSection/UserSection";
import {NextPageWithLayout} from "@/pages/_app";

 const inter = Lato({ weight:'400',subsets: ['latin'] })



const Home:NextPageWithLayout = () => {


  return (
      <main className={styles.main} style={inter.style}>
          <SideBar/>
          <Menu/>
          <MainSection/>
          <UserSection/>
      </main>
  )
}


export default Home