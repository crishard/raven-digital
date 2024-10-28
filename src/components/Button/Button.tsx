interface IButtonProps{
    text: string,
}
export const Button = ({text}: IButtonProps) => {
    return (
        <button className="bg-blue-background px-6 py-2 rounded-3xl shadow-lg shadow-blue-background/50 text-letters hover:bg-letters hover:text-blue-background border border-blue-background hover:border-blue-background transition-colors duration-500">
            {text}
        </button>
    )
}
