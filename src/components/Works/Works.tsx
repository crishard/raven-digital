
import { HeaderSections } from "../HeaderSections/HeaderSections"
import { FlexWork } from "./FlexWork"
import { GridWorks } from "./GridWorks"

export const Works = () => {
    return (
        <section className="bg-secondary sm:px-20 px-10 pb-20" id="portfolio">
            <HeaderSections title={"Our Works"} />
            <div className="flex justify-center">
                <div>
                    <GridWorks />
                    <FlexWork />
                </div>
            </div>
        </section>
    )
}