import React from 'react';
import { UserOutlined } from '@ant-design/icons';

interface CatCardProps {
  category: string;
}

const CatCard: React.FC<CatCardProps> = ({ category }) => {
  return (
    <div className='h-[120px] min-w-[150px] border rounded-[20px] bg-[#fffff] flex flex-col gap-3 items-center justify-center'>
      <div><UserOutlined style={{ fontSize: '50px' }} /></div>
      <div >
        <p className='text-[#858F98] text-[12px] text-center'>{category}</p>
      </div>
    </div>
  );
};

export default CatCard;
