import {MainSectionType, MenuItemType} from "@/pages";
import iconCompass from '../data/img/iconCompass.png'
import iconAdd from '../data/img/iconAdd.png'
import iconShield from '../data/img/iconShield.png'
import iconStar from '../data/img/iconStar.png'
import iconHome from '../data/img/iconHome.png'
import iconCup from '../data/img/cup.png'

export const menuItems: MenuItemType[] = [
    {
        img: iconHome,
        name: 'HOME'
    },
    {
        img: iconShield,
        name: 'MISSIONS'
    },
    {
        img: iconStar,
        name: 'UPGRADE'
    },
    {
        img: iconAdd,
        name: 'TEAMS'
    },
    {
        img: iconCup,
        name: 'TOURNAMENTS'
    },
    {
        img: iconCompass,
        name: 'SOCIAL SPACE'
    },
]


export const matchItems = [
    '1v1 RANKED',
    '5v5 RANKED Vip',
    '5v5 UNRANKED',
    'PUBLIC WARMUP'
    ]



