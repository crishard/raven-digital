import { Fade } from "react-awesome-reveal"
import work1 from "../../assets/grid/L0nipfx-Ry4.png"
import work3 from "../../assets/grid/sDwhXKJijyE.png"
import work2 from "../../assets/grid/UVfvFrp4x4E.png"
export const GridWorks = () => {
    return (
        <Fade triggerOnce={true} direction="left" duration={2000}>
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 gap-6 pt-16  max-w-[1315px]  grid-cols-1">
                <div className="flex justify-center">
                    <img src={work1} alt="" className="sm:h-[376px] sm:w-full max-w-[360px] h-[260px]" />
                </div>
                <div className="col-span-2 flex  justify-center">
                    <img src={work2} alt="" className="sm:h-[376px] lg:w-full max-w-[760px] w-[80%] " />
                </div>
                <div className="flex justify-center">
                    <img src={work3} alt="" className="sm:h-[376px] sm:w-full max-w-[360px] h-[260px]" />
                </div>
            </div>
        </Fade>

    )
}
