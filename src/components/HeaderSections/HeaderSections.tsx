
interface IHeaderSectionProps {
    title: string
}

export const HeaderSections = ({ title }: IHeaderSectionProps) => {
    return (
        <h2 className="text-3xl font-semibold text-letters">{title}</h2>
    )
}
