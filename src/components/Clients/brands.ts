import amazonImg from "../../assets/brands/amazon.png"
import mangoImg from "../../assets/brands/mango.png"
import microsoftImg from "../../assets/brands/microsoft.png"
import nikeImg from "../../assets/brands/nike.png"


interface Brands {
    img: string,
    alt: string,
}

export const brands: Brands[] = [
    {
        img: mangoImg,
        alt: "mango"
    },
    {
        img: microsoftImg,
        alt: "microsoft"
    },
    {
        img: nikeImg,
        alt: "Nike"
    },
    {
        img: amazonImg,
        alt: "amazon"
    },
    {
        img: mangoImg,
        alt: "mango"
    },
    {
        img: microsoftImg,
        alt: "microsoft"
    },
]