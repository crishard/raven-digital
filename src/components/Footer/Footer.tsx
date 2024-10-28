import { Fade } from "react-awesome-reveal";
import { FooterServices } from "./FooterServices";
import { SocialFooter } from "./SocialFooter";
import { TopFooter } from "./TopFooter";

export const Footer = () => {
    return (
        <footer className="bg-primary flex justify-center text-center py-16 sm:px-20 px-10">
            <div>
                <Fade direction="down" duration={800} cascade triggerOnce={true}>
                    <TopFooter />
                    <FooterServices />
                    <SocialFooter />
                    <p className="text-paragraph text-sm">Copyright © 2021. Raven Digital. All rights reserved.</p>
                </Fade>
            </div>
        </footer>
    )
}
