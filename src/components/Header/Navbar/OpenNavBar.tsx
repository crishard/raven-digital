import NavItem from "./NavItem"


interface IOpenNavBArProps {
    navBarIsOpen: boolean
}

export const OpenNavBar = ({ navBarIsOpen }: IOpenNavBArProps) => {
    return (
        <>
            {navBarIsOpen && (
                <div className="absolute top-16 left-0 w-full bg-bg-secondary shadow-lg min-[920px]:hidden h-screen py-16 text-center bg-secondary mt-8">
                    <ul className="space-y-4">
                        <NavItem text={"About"} />
                        <NavItem text={"Contact"} />
                        <NavItem text={"Portfolio"} />
                        <NavItem text={"testimonials"} />
                    </ul>
                </div>
            )}
        </>
    )
}