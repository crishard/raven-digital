
interface ICardProps {
    number: number;
    text: string;
}

export const CardInfo = ({ number, text }: ICardProps) => {
    return (
        <div className="flex gap-12">
            <div className="flex flex-col items-center justify-center text-white ">
                <p className="sm:text-3xl tex-xl font-semibold pb-3">{number}</p>
                <p className="text-center text-[#8FC2FF] line-clamp-2 sm:text-base text-xs whitespace-pre-line font-medium">{text}</p>
            </div>
            <div className="bg-[#8FC2FF] sm:h-[120px] h-[90px] w-[1px]"></div>
        </div>

    );
};