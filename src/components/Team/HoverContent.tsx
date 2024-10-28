interface HoverContentProps{
    name: string,
    text: string,
    position: string
}

import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

export const HoverContent = ({name, text, position}:HoverContentProps) => {
    return (
        <div className="py-6">
            <h3 className="text-2xl font-semibold mb-4">{name}</h3>
            <p className="font-medium mb-4">{position}</p>
            <p className="text-center py-8">
                {text}
            </p>
            <div className="flex gap-6 pt-6  justify-center">
                <FaFacebookF/>
                <FaTwitter/>
                <FaInstagram/>
            </div>
        </div>
    )
}
