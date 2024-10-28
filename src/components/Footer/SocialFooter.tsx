import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export const SocialFooter = () => {
    return (
        <div className="text-letters flex justify-center text-lg gap-12  font-semibold py-10">
            <FaFacebookF className="cursor-pointer"/>
            <FaTwitter className="cursor-pointer"/>
            <FaInstagram className="cursor-pointer"/>
        </div>
    )
}
