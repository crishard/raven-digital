import { Fade } from "react-awesome-reveal";
import { CardInfo } from "./CardInfo";
import "./ScrollWorks.css";
import { worksData } from "./works";


export const ScrollWorks = () => {
    return (
        <section className="bg-blue-background sm:px-20 px-10 sm:py-16 py-8">
            <Fade triggerOnce={true} duration={1000} direction="up">
                <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_64px,_black_calc(100%-64px),transparent_100%)]">
                    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-1 [&_img]:max-w-none animate-infinite-scroll">
                        {worksData.map((image, index) => (
                            <li key={index} className="sm:px-8 px-2">
                                <CardInfo number={image.number} text={image.text} />
                            </li>
                        ))}
                        {worksData.map((image, index) => (
                            <li key={`duplicate-${index}`} className="sm:px-8 px-2">
                                <CardInfo number={image.number} text={image.text} />
                            </li>
                        ))}
                        {worksData.map((image, index) => (
                            <li key={`duplicate-${index}`} className="sm:px-8 px-2">
                                <CardInfo number={image.number} text={image.text} />
                            </li>
                        ))}
                    </ul>
                </div>
            </Fade>
        </section>
    );
};
