interface IInputProps {
    label: string,
    placeholder: string,
    textarea: boolean
}
export const Input = ({ label, placeholder, textarea }: IInputProps) => {
    return (
        <div className="text-start pb-8">

            {textarea ?
                <><label htmlFor="">
                    {label}
                </label>
                    <textarea rows={3} placeholder={placeholder} className="bg-secondary border-b-[1px] border-[#536A82] block px-3 placeholder:text-[#2E2E2E] outline-none pt-3 w-[80%] resize-none" /></>
                :
                <><label htmlFor="">
                    {label}
                </label>
                    <input type="text" placeholder={placeholder} className="bg-secondary border-b-[1px] border-[#536A82] block px-3 placeholder:text-[#2E2E2E] outline-none pt-3  w-[80%]" /></>}

        </div>

    )
}
