interface NavItemProps {
    text: string,
    link: string,
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const NavItem = ({ text, link, onClick }: NavItemProps) => {
    return (
        <li>
            <a href={link} className="text-white font-medium text-lg" onClick={onClick}>{text}</a>
        </li>

    )
}
export default NavItem