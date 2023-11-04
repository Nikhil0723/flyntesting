import React from 'react';
import { Carousel, Button } from 'antd';
import CatCard from '../../elements/CatCard.tsx';

const cardStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '150px', // Adjust the card width
  height: '200px',
  background: '#364d79',
  color: '#fff',
  border: '1px solid #ccc',
};

const cards = [
  { title: 'Card 1', content: 'Lorem ipsum' },
  { title: 'Card 2', content: 'Dolor sit amet' },
  { title: 'Card 3', content: 'Consectetur adipiscing' },
  { title: 'Card 4', content: 'Elit sed do eiusmod' },
  { title: 'Card 5', content: 'Tempor incididunt' },
  { title: 'Card 6', content: 'Ut labore et dolore' },
  { title: 'Card 7', content: 'Magna aliqua' },
  { title: 'Card 8', content: 'Ut enim ad minim' },
  // Add more cards as needed
];

const App: React.FC = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <div>
      <Carousel
        afterChange={onChange}
        slidesToShow={7}
        slidesToScroll={1}
        infinite={true}
        prevArrow={<Button type="primary" shape="round" icon={<i className="fas fa-chevron-left" />} />}

        nextArrow={<Button type="primary" shape="round" icon={<i className="fas fa-chevron-right" />} />}
        responsive={[
          {
            breakpoint: 511,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 5,
            },
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
            },
          },
        ]}
      >
        {cards.map((card, index) => (
       <h1>abc</h1>
        ))}
      </Carousel>
    </div>
  );
};

export default App;
