import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';

interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  size = 'md',
  className,
  ...props
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={size === 'xs' ? 24 : size === 'sm' ? 32 : size === 'md' ? 40 : 48}
      height={size === 'xs' ? 24 : size === 'sm' ? 32 : size === 'md' ? 40 : 48}
      className={clsx(
        'rounded-full object-cover',
        size === 'xs' ? 'w-6 h-6' :
        size === 'sm' ? 'w-8 h-8' :
        size === 'md' ? 'w-10 h-10' :
        'w-12 h-12',
        className
      )}
      {...props}
    />
  );
};