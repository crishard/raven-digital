import { Fade } from "react-awesome-reveal";
import { Button } from "../Button/Button";
import { CardServices } from "./CardServices";
import { servicesData } from "./services";

export const GridServices = () => {
    return (
        <div className="flex flex-wrap gap-3">
            <Fade direction="left" cascade triggerOnce={true} duration={800}>
                {servicesData.map((service, index) => (
                    <CardServices key={index} title={service.title} text={service.text} icon={service.icon} />
                ))}
            </Fade>
            <div className="text-letters px-10 py-6 col-span-2 max-w-[380px]">
            <Fade direction="down" cascade triggerOnce={true} duration={1200}>
                <h3 className="font-bold text-2xl uppercase pb-3">Solutions for
                    <span className="block"> your bussiness</span> </h3>
                <p className="text-paragraph pb-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                <Button text="Lean more" />
                </Fade>
            </div>

        </div>
    )
}
