import { Fade, Zoom } from "react-awesome-reveal"
import img from "../../assets/homeImage.png"
import { Button } from "../Button/Button"
import NavBar from "./Navbar/NavBar"

const Header = () => {
    return (
        <header>
            <NavBar />
            <section className="pt-36 bg-secondary text-letters lg:pl-20 lg:grid grid-cols-2 gap-10 lg:px-0 md:px-20 px-10 block" id="about">
                <div className="">
                    <Fade triggerOnce={true} cascade direction="down" duration={800}>
                        <h1 className="lg:text-6xl text-5xl font-bold pb-8">WE ARE <span className="block">DIGITAL AGENCY</span></h1>
                        <p className="pb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit id fringilla turpis tempor enim. Vel tristique suspendisse eget sodales egestas. Donec duis lacus, odio velit eu eget ac tortor. Ac sit ultricies hendrerit pellentesque arcu fames sit lectus. Scelerisque id bibendum velit cras. </p>
                        <Button text="Lean more" />
                    </Fade>
                </div>

                <Zoom triggerOnce={true} duration={1000}>
                    <div>
                        <img src={img} alt="" className="pt-16 lg:pt-0" />
                    </div>
                </Zoom>
            </section>
        </header>
    )
}

export default Header