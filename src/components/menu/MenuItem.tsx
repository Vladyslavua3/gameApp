import styles from "./menu.module.css";
import Image, {StaticImageData} from "next/image";

export type MenuItemType = {
    img: StaticImageData,
    name: string
}

export const MenuItem = ({img,name}:MenuItemType) => {
    return(
        <div className={styles.containerItem}>
            <Image src={img.src} alt={name} width={35} height={35}/>
            <p>{name}</p>
        </div>
    )
}