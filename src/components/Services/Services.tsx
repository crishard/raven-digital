import { HeaderSections } from "../HeaderSections/HeaderSections"
import { GridServices } from "./GridServices"

export const Services = () => {
    return (
        <section className=" bg-secondary py-24 px-10 sm:px-24">
            <div className="text-center pb-12">
                <HeaderSections title="What we do" />
            </div>
            <GridServices />
        </section>
    )
}
