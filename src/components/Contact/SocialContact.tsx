import { CiLocationOn } from "react-icons/ci";
import { IoIosMail } from "react-icons/io";
import { MdOutlinePhone } from "react-icons/md";
import { ButtonCall } from "./ButtonCall";
import { SocialContactInformation } from "./SocialContactInformation";
import { SocialContactLine } from "./SocialContactLine";


export const SocialContact = () => {
  return (
    <div className="">
      
      <SocialContactLine text={"Mobile Number"} icon={<MdOutlinePhone />} text_item={""} />

      <div className="flex gap-3 mb-2">
        <SocialContactInformation text={"+1 252-937-3762"} icon={undefined} text_item={""} />

        <ButtonCall />
      </div>

      <div className="flex gap-3 ">
        <SocialContactInformation text={"+1 252-937-3762"} icon={undefined} text_item={""} />
        <ButtonCall />
      </div>
      <SocialContactLine text={"Email"} icon={<IoIosMail />} text_item={"sample@exemple.com"} />
      <SocialContactLine text={"Address"} icon={<CiLocationOn />} text_item={"5 Indian Spring Dr.Mundelein, IL 60060"} />
    </div>
  )
}
