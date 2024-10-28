import { Fade } from "react-awesome-reveal"
import { brands } from "./brands"

export const Brands = () => {
    return (
        <div className="pt-4">
            <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_64px,_black_calc(100%-64px),transparent_100%)]">
                <div className="flex items-center justify-center md:justify-start [&_li]:mx-1 [&_img]:max-w-none animate-infinite-scroll gap-16">
                <Fade triggerOnce={true} duration={1000} direction="up">
                    {brands.map((brand, index) => (
                        <img src={brand.img} alt={brand.alt} key={index} className="sm:w-24 sm:h-24 w-10 h-10" />
                    ))}
                    {brands.map((brand, index) => (
                        <img src={brand.img} alt={brand.alt} key={index} className="sm:w-24 sm:h-24 w-10 h-10" />
                    ))}
                    {brands.map((brand, index) => (
                        <img src={brand.img} alt={brand.alt} key={index} className="sm:w-24 sm:h-24 w-10 h-10" />
                    ))}
                     </Fade>
                </div>
            </div>
        </div>
    )
}
