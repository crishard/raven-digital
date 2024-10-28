import { IoSearch } from "react-icons/io5";
import NavItem from "./NavItem";
export const Links = () => {
    return (
        <ul className="hidden md:flex justify-between gap-6 items-center font-medium">
            <NavItem text={"About"} />
            <NavItem text={"Contact"} />
            <NavItem text={"Portfolio"} />
            <NavItem text={"testimonials"} />
            <IoSearch className="text-white font-medium text-2xl" />
        </ul>
    )
}

