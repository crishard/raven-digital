import { useState } from "react";

import { Fade } from "react-awesome-reveal";
import img from "../../../assets/logo.png";
import { Links } from "./LInks";
import { OpenNavBar } from "./OpenNavBar";
import { ToggleIconMenu } from "./ToggleiconMenu";
const NavBar = () => {

    const [openNavBar, setOpenNavBar] = useState(false)


    return (

        <nav className="sm:px-20 px-10 py-6 bg-secondary flex justify-between fixed w-full shadow-lg z-50">
            <Fade triggerOnce={true} duration={800} direction="down">
                <img src={img} alt="" className="w-[150px]" />
                <Links />
            </Fade>
            <ToggleIconMenu openNavBar={openNavBar} setNavBarIsOpen={() => setOpenNavBar(!openNavBar)} />
            <OpenNavBar navBarIsOpen={openNavBar} setNavBarIsOpen={() => setOpenNavBar(!openNavBar)} />
        </nav >


    )
}

export default NavBar