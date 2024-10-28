import NavItem from "./NavItem"

interface IOpenNavBArProps {
    navBarIsOpen: boolean,
    setNavBarIsOpen: any,
}

export const OpenNavBar = ({ navBarIsOpen, setNavBarIsOpen }: IOpenNavBArProps) => {
    return (
        <>
            {navBarIsOpen && (
                <div className="absolute top-16 left-0 w-full bg-bg-secondary shadow-lg min-[920px]:hidden h-screen py-16 text-center bg-secondary mt-8">
                    <ul className="space-y-4">
                        <NavItem text={"About"} link={"/#about"} onClick={() => setNavBarIsOpen(!navBarIsOpen)}/>
                        <NavItem text={"Contact"} link={"/#contact"} onClick={() => setNavBarIsOpen(!navBarIsOpen)}/>
                        <NavItem text={"Portfolio"} link={"/#portfolio"} onClick={() => setNavBarIsOpen(!navBarIsOpen)}/>
                        <NavItem text={"Testimonials"} link={"/#testimonials"} onClick={() => setNavBarIsOpen(!navBarIsOpen)}/>
                    </ul>
                </div>
            )}
        </>
    )
}