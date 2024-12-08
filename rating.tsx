import React from 'react';
import { Star } from 'lucide-react';
import clsx from 'clsx';

interface RatingProps {
  value: number;
  maxValue?: number;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  color?: string;
}

export const Rating: React.FC<RatingProps> = ({
  value,
  maxValue = 5,
  size = 'md',
  color = 'yellow-400'
}) => {
  const stars = Array.from({ length: maxValue }, (_, index) => index + 1);

  return (
    <div className="flex items-center">
      {stars.map((star) => (
        <Star
          key={star}
          className={clsx(
            'mr-1',
            size === 'xs' ? 'w-4 h-4' :
            size === 'sm' ? 'w-5 h-5' :
            size === 'md' ? 'w-6 h-6' :
            'w-8 h-8',
            star <= value ? `text-${color}` : 'text-gray-300'
          )}
        />
      ))}
    </div>
  );
};