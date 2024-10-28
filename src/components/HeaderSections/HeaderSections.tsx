import { Fade } from "react-awesome-reveal"

interface IHeaderSectionProps {
    title: string
}

export const HeaderSections = ({ title }: IHeaderSectionProps) => {
    return (
        <Fade triggerOnce={true} duration={1000} direction="down">
            <h2 className="text-3xl font-semibold text-letters">{title}</h2>
        </Fade>
    )
}
