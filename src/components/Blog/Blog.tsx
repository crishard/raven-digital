import React from 'react';
import { Zoom } from 'react-awesome-reveal';
import { HeaderSections } from '../HeaderSections/HeaderSections';
import Card from './Card';
import { blogData } from './blog';

const Blog: React.FC = () => {
  return (
    <section className='bg-secondary sm:px-20 px-10 pt-8 pb-12'>
      <div className='flex justify-center'>
        <HeaderSections title='Blog' />
      </div>

      <div className="flex justify-center gap-8 flex-wrap py-10 pb-20 ">
        <Zoom triggerOnce={true} duration={800}>
          {blogData.map((item, index) => (
            <Card
              key={index}
              image={item.img}
              category={item.title}
              date={item.data}
              views={item.number}
              title={item.subtitle}
              description={item.text}
            />
          ))}
        </Zoom>
      </div>
    </section>
  );
};

export default Blog;
