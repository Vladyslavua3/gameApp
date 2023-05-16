import styles from "./menu.module.css";
import Image from "next/image";

export type MenuItemType = {
    img: string,
    name: string
}

export const MenuItem = ({img,name}:MenuItemType) => {
    return(
        <div className={styles.containerItem}>
            <Image src={img} alt={name} width={35} height={35}/>
            <p>{name}</p>
        </div>
    )
}