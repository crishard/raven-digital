import { SocialContactInformation } from "./SocialContactInformation"

interface ISocialContactLineProps {
    text: string,
    icon: any,
    text_item: string
}


export const SocialContactLine = ({ text, icon, text_item }: ISocialContactLineProps) => {
    return (
        <div className="pb-3">
            <p className="flex gap-2 items-center pt-8 pb-4 font-medium" > <span className="text-lg">{icon}</span> {text}</p>

            <SocialContactInformation text={text_item} icon={undefined} text_item={""} />
        </div>
    )
}
