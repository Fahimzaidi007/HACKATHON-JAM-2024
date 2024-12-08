
import React from 'react';
import Image from 'next/image';

export const DesignerIntro = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto flex items-center justify-center">
        <div className="flex items-center space-x-8">
          <div className="w-32 h-32 relative">
            <Image
              src="/designer.jpg"
              alt="Designer Portrait"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Meet Muhammad Hasaan</h2>
            <p className="text-gray-600">
              Muhammad Hasaan is the designer behind our carefully curated collection of apparel. With a passion for fashion and an eye for detail, he creates styles that are both modern and timeless.
            </p>
            <p className="text-gray-600">
              Inspired by his travels and the diverse cultures he has experienced, Hasaan's designs blend classic silhouettes with contemporary flair, resulting in pieces that effortlessly complement any wardrobe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};