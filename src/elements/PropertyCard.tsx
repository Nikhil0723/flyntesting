import React from 'react';
import { Card, Button, Typography, Rate, Tag, Divider } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

const { Meta } = Card;
const { Title, Text } = Typography;

const ProductCard = () => {
  const product = {
    name: "Sample Product",
    price: 49.99,
    description: "This is a dummy product description. It's for demonstration purposes.",
    category: "Electronics",
    image: "https://via.placeholder.com/150",
    rating: 4.5,
    totalReviews: 35,
  };

  return (
    <Card
      style={{ width: '300px',height:'400px'  }}
      cover={<img alt={product.name} src={product.image}  className='h-[220px]'/>}
      
    >
      <Meta
        title={<div>
            
        </div>}
        description={
          <div>
            <Text strong>${product.price.toFixed(2)}</Text>
            <br />
           
            <p>{product.description}</p>
            <Tag color="blue">{product.category}</Tag>
            
          </div>
        }
        style={{padding:0 , margin:0}}
      />
    </Card>
  );
};

export default ProductCard;
