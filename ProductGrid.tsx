import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardBody, CardFooter } from "./components/ui/card"
import { Button } from "./components/ui/button"

// Sample product data
const products = [
  {
    id: 1,
    name: 'T-Shirt',
    image: '/t-shirt.jpg',
    price: 19.99,
    description: 'A comfortable and stylish t-shirt.'
  },
  {
    id: 2,
    name: 'Jeans',
    image: '/jeans.jpg',
    price: 49.99,
    description: 'High-quality denim jeans.'
  },
  {
    id: 3,
    name: 'Hoodie',
    image: '/hoodie.jpg',
    price: 29.99,
    description: 'A cozy and versatile hoodie.'
  },
  {
    id: 4,
    name: 'Shoes',
    image: '/shoes.jpg',
    price: 59.99,
    description: 'Stylish and comfortable shoes.'
  }
];

export const ProductGrid = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <Card key={product.id}>
            <Link href={`/products/${product.id}`}>
              <a>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-40 object-cover"
                />
              </a>
            </Link>
            <CardBody>
              <h3 className="text-lg font-medium">{product.name}</h3>
              <p className="text-gray-500">{product.description}</p>
            </CardBody>
            <CardFooter>
              <div className="flex justify-between items-center">
                <span className="font-bold">${product.price}</span>
                <Button variant="primary">Add to Cart</Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};