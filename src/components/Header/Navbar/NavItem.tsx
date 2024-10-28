interface NavItemProps {
    text: string
}

const NavItem = ({ text }: NavItemProps) => {
    return (
        <li>
            <a href="#" className="text-white font-medium text-lg">{text}</a>
        </li>

    )
}
export default NavItem