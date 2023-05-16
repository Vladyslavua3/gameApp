import styles from "./menu.module.css";
import Image from "next/image";
import iconCounterSmall from "@/data/img/iconCounterSmall.png";
import play from "@/data/img/Vector.png";

export type MatchMakingType = {
    title:string
}

export const MatchMakingItems = ({title}:MatchMakingType) => {
    return(
        <div className={styles.matchItem}>
            <Image src={iconCounterSmall} alt={'icon'}/>
            <p>{title}</p>
            <Image src={play} alt={'play'}/>
        </div>
    )
}
