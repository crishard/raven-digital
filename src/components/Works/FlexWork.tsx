import { Fade, Zoom } from "react-awesome-reveal"
import work5 from "../../assets/grid/NIo8Fd-RngE.png"
import work4 from "../../assets/grid/WS7tgu261f0.png"
import { Button } from "../Button/Button"
export const FlexWork = () => {
    return (
        <div className="lg:flex block gap-4 pt-4">
            <div className="text-white flex justify-center items-center px-8">
                <div className="lg:py-0 py-16">
                    <Fade triggerOnce={true} cascade duration={1000} direction="down">
                        <h2 className="text-2xl font-bold">NOT IMPRESSED?</h2>
                        <p className="text-paragraph pb-8 pt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <Button text={"See more"} />
                    </Fade>

                </div>
            </div>
            <Zoom triggerOnce={true} duration={2000}>
                <div className="flex justify-center">
                    <img src={work4} alt="" className="sm:h-[376px] h-[260px] lg:my-0 my-7" />
                </div>
                <div className="flex justify-center">
                    <img src={work5} alt="" className="sm:h-[376px] max-w-[600px] sm:w-full w-[80%]" />
                </div>
            </Zoom>

        </div>
    )
}
