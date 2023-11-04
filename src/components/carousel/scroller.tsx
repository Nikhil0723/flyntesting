import React from 'react';
import CatCard from '../../elements/CatCard.tsx';

const Scroller: React.FC = () => {
  const rentalCategories: string[] = [
    'Student-Friendly',
    'Senior Housing',
    'Vacation Retreats',
    'Family Homes',
    'Professional Rentals',
    'Short-Term Stays',
    'Long-Term Leases',
    'Luxury Residences',
    'Affordable Options',
    'Shared Accommodations',
    'Co-Living Spaces',
    'Remote Getaways',
    'Pet-Friendly Rentals',
    'Furnished Dwellings',
    'Unfurnished Homes',
    'Beachfront Properties',
    'Mountain Escapes',
    'City-Center Apartments',
    'Suburban Houses',
    'Rural Retreats',
  ];

  return (
    <div className='w-[100vw] px-[2%] md:px-[4%] lg:px-[6%] my-[35px]  select-none'>
    <div className="category cursor-pointer overflow-x-auto scrollbar-hidden flex space-x-3 p-2 flex-nowrap">
      {rentalCategories.map((cat) => (
        <CatCard key={cat} category={cat} />
      ))}
    </div>
    </div>
  );
};

export default Scroller;
