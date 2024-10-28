import { HeaderSections } from "../HeaderSections/HeaderSections"
import { GridTeam } from "./GridTeam"

export const Team = () => {
    return (
        <div className="py-12 bg-secondary sm:px-24 px-10">
            <HeaderSections title={"Our team"} />
            <GridTeam />
        </div>
    )
}


