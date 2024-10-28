import { useState } from 'react';
interface ICardTeamProps {
  imageSrc: string,
  hoverContent: any
}
export const CardTeam = ({ imageSrc, hoverContent }: ICardTeamProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-64 h-96 mx-4 overflow-hidden rounded-lg shadow-lg my-6 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={imageSrc}
        alt="Profile"
        className={`w-full h-full object-cover transition-all duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
      />
      <div
        className={`absolute inset-0 bg-[#2B61F7] text-white flex flex-col text-center items-center p-4 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
      >
        {hoverContent}
      </div>
    </div>
  );
};

