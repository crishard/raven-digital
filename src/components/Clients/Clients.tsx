import { HeaderSections } from "../HeaderSections/HeaderSections"
import { Brands } from "./Brands"

export const Clients = () => {
    return (
        <div className="bg-primary sm:px-20 px-10 py-10">
            <HeaderSections title={"Clients"} />
            <Brands />
        </div>
    )
}
