import React from 'react';
import { card } from  "./components/Ui/card"
import { Avatar } from "./components/Ui/Avatar"
import { rating } from "./components/Ui/rating"



// Sample customer review data
const reviews = [
  {
    id: 1,
    name: 'John Doe',
    avatar: '/john-doe.jpg',
    rating: 4.5,
    review: "I've been a customer of this store for years and have always been impressed by the quality of their products. The customer service is top-notch, and the selection is fantastic."
  },
  {
    id: 2,
    name: 'Jane Smith',
    avatar: '/jane-smith.jpg',
    rating: 5,
    review: "I absolutely love shopping at this store. The clothes are stylish, well-made, and really affordable. I always find something I like and the return policy is super easy to use."
  },
  {
    id: 3,
    name: 'Michael Johnson',
    avatar: '/michael-johnson.jpg',
    rating: 4,
    review: "The shipping was fast and the items arrived in perfect condition. I'm really happy with my purchases and will definitely be back."
  }
];

export const CustomerReviews = () => {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-2xl font-bold mb-4">What Our Customers Say</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {reviews.map((review) => (
          
          
              

        
        ))}
      </div>
    </div>
  );
};