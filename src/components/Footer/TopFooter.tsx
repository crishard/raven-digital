import logo from "../../assets/logo.png";

export const TopFooter = () => {
    return (
        <div>
            <div className="flex justify-center">
                <img src={logo} alt="" className="w-[150px] h-[50px]" />
            </div>
            <div className="flex justify-center pt-6">
                <p className="text-paragraph  max-w-[420px] text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit id fringilla turpis tempor enim. Vel tristique suspendisse </p>
            </div>
        </div>
    )
}
