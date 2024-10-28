import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

interface IToggleIconMenuProps {
    openNavBar: boolean,
    setNavBarIsOpen: any
}

export const ToggleIconMenu = ({ openNavBar, setNavBarIsOpen }: IToggleIconMenuProps) => {
    return (
        <div className="block md:hidden">
            <button onClick={() => setNavBarIsOpen(!openNavBar)} aria-label="Toggle Menu" className="md:hidden text-4xl text-letters flex justify-center items-center cursor-pointer">
            {openNavBar ? <IoMdClose /> : <GiHamburgerMenu />}
            </button>
        </div>
    )
}