import React from 'react';

interface ICardServicesProps {
    icon: React.ElementType;
    title: string;
    text: string;
}

export const CardServices: React.FC<ICardServicesProps> = ({ icon: Icon, title, text }) => {
    return (
        <div className="relative bg-[#1B2837] max-w-[300px] sm:my-0 my-6 px-8 py-6 text-letters cursor-pointer overflow-hidden group">
            <div className="pb-16 relative z-10 transition-all duration-1000">
                <h5 className="font-semibold text-lg pb-6">{title}</h5>
                <p className="pb-6 text-base">{text}</p>
                <a href="#" className="underline font-semibold">Contact us</a>
            </div>

            <div className="absolute bottom-0 right-0 bg-blue-background py-4 px-6 rounded-tl-[40px] transition-all duration-700 ease-in-out 
                w-[80px] h-[65px] group-hover:w-full group-hover:h-full group-hover:rounded-tl-[400px] ">
                <div className="text-3xl text-white flex justify-end items-end h-full w-full">
                    <Icon/>
                </div>
            </div>
        </div>
    );
};