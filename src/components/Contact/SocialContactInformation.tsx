
interface ISocialContactLineProps {
    text: string,
    icon: any,
    text_item: string
}

export const SocialContactInformation = ({ text }: ISocialContactLineProps) => {
    return (
        <p className="text-sm text-paragraph flex items-center">{text}</p>
    )
}
