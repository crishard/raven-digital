import { useState } from 'react';
import { Fade, Zoom } from 'react-awesome-reveal';
import { testimonials } from './testimonials';

export default function Testimonials() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const handleClick = (index: number) => {
        setCurrentTestimonial(index);
    };

    return (
        <div className="flex justify-center items-center py-24 sm:px-24 px-10 bg-secondary">

            <div className="lg:flex block  gap-12 items-center">
                <Zoom duration={1500} triggerOnce={true} className='w-full lg:block flex justify-center lg:pb-0 pb-10'>
                    <img
                        src={testimonials[currentTestimonial].imageSrc}
                        alt={testimonials[currentTestimonial].name}
                        className="rounded-2xl shadow-lg sm:min-w-[350px]"
                    />
                </Zoom>

                <div className='flex gap-6'>
                    <div
                    >
                        <Fade triggerOnce={true} cascade duration={500} direction='down'>
                            <h2 className="text-4xl font-bold text-white mb-4">Testimonials</h2>
                            <h3 className="text-xl font-semibold text-white">{testimonials[currentTestimonial].name}</h3>
                            <p className="text-white opacity-75 mb-4">{testimonials[currentTestimonial].title}</p>
                            <p className="text-white opacity-75">{testimonials[currentTestimonial].content}</p>
                            <p className="text-white opacity-75 pt-4 xl:block hidden">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit id fringilla turpis tempor enim. Vel tristique suspendisse eget sodales egestas. </p>
                        </Fade>

                    </div>

                    <div className="transform flex flex-col space-y-1 text-center  items-center">
                    <Fade triggerOnce={true} cascade duration={500} direction='down'>
                        <p className='text-white font-semibold pb-1'>01</p>
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                className={`w-[2px] h-16 rounded-full transition-all duration-300 ${currentTestimonial === index ? 'bg-blue-500' : 'bg-gray-400'
                                    }`}
                                onClick={() => handleClick(index)}
                            />
                        ))}

                        <p className='text-white font-semibold pt-1'>03</p>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    );
}
