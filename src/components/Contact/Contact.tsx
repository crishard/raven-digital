
import { Fade, Zoom } from "react-awesome-reveal";
import { FaMapMarked } from "react-icons/fa";
import { Button } from "../Button/Button";
import { HeaderSections } from "../HeaderSections/HeaderSections";
import { Input } from "./Input";
import { SocialContact } from "./SocialContact";

export const Contact = () => {
  return (
    <section className="sm:px-20 px-10 bg-secondary text-center py-32 relative" id="contact">
      <HeaderSections title="Contact us" />

      <div className="text-letters text-start grid grid-cols-2 max-[740px]:grid-cols-1 pt-16 gap-16 ">
        <Fade triggerOnce={true} duration={1000} direction="left">
        <form action="#">
          <Input label={"Name"} placeholder={"Name here"} textarea={false} />
          <Input label={"Last name"} placeholder={"Last name here"} textarea={false} />
          <Input label={"Email"} placeholder={"example@gmail.com"} textarea={false} />

          <Input label={"Message"} placeholder={"Start typing"} textarea={true} />
          <Button text="Send message" />
        </form>
        </Fade>
        <Fade triggerOnce={true} duration={1000} direction="right">
        <SocialContact />
        </Fade>
      </div>
      <Zoom triggerOnce={true} duration={1000} className="absolute right-0 bg-blue-background py-4 px-6 rounded-tl-[40px] text-letters shadow-blue-background/60 shadow-md" >
      <div className="text-3xl">
          <FaMapMarked />
        </div>
      </Zoom>
    </section>
  )
}
