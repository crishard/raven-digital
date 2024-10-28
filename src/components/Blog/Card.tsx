import React from 'react';

interface ICardProps {
  image: string;
  category: string;
  date: string;
  views: number;
  title: string;
  description: string;
}

const Card: React.FC<ICardProps> = ({
  image,
  category,
  date,
  views,
  title,
  description,
}) => {
  return (
    <div className={"relative bg-gray-800 rounded-lg overflow-hidden shadow-lg hover-border group rounded-tr-[70px] px-4 py-5 pb-12 w-[320px] h-[500px] cursor-pointer"}>
      <div className='absolute z-10'>
        <div className='relative'>
          <img src={image} alt="Card Image" className="h-[290px] object-cover rounded-tr-[70px]" />
          <span className={`group-hover:text-white text-letters text-base absolute bottom-0 left-0 bg-blue-background pl-3 pr-8 pb-2 pt-3 font-bold rounded-tr-[60px]`}>{category}</span>
        </div>
      </div>

      <div className={`transition duration-300 absolute bottom-8 z-10`}>
        <div className={`flex justify-between text-paragraph text-sm mt-2 group-hover:text-white`}>
          <span>{date}</span>
          <span>{views}</span>
        </div>
        <h2 className="text-white font-semibold mt-2">{title}</h2>
        <p className={`text-paragraph text-sm mt-2 max-w-[290px] group-hover:text-white`}>
          {description}
        </p>
      </div>
      <div className="absolute bottom-0 left-0 z-0 group-hover:h-[300px] transition-all duration-500 ease-in-out w-full h-[6px] bg-blue-background"></div>
    </div>
  );
};

export default Card;
