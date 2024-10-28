import { IoSearch } from "react-icons/io5";
import NavItem from "./NavItem";

export const Links = () => {
    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        event.preventDefault();  
        const section = document.querySelector(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <ul className="hidden md:flex justify-between gap-6 items-center font-medium">
            <NavItem text="About" link="#about" onClick={(e) => handleClick(e, "#about")} />
            <NavItem text="Contact" link="#contact" onClick={(e) => handleClick(e, "#contact")} />
            <NavItem text="Portfolio" link="#portfolio" onClick={(e) => handleClick(e, "#portfolio")} />
            <NavItem text="Testimonials" link="#testimonials" onClick={(e) => handleClick(e, "#testimonials")} />
            <IoSearch className="text-white font-medium text-2xl" />
        </ul>
    );
};
