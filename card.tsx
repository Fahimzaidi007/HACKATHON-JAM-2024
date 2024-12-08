import React from 'react';
import clsx from 'clsx';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'default' | 'elevated';
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  className,
  ...props
}) => {
  return (
    <div
      className={clsx(
        'rounded-lg overflow-hidden',
        variant === 'elevated'
          ? 'shadow-md transition-shadow duration-200 hover:shadow-lg'
          : 'bg-white',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ children, className, ...props }) => {
  return (
    <div
      className={clsx(
        'bg-gray-100 px-6 py-4 border-b border-gray-200',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CardBody: React.FC<CardBodyProps> = ({ children, className, ...props }) => {
  return (
    <div
      className={clsx(
        'p-6',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CardFooter: React.FC<CardFooterProps> = ({ children, className, ...props }) => {
  return (
    <div
      className={clsx(
        'bg-gray-100 px-6 py-4 border-t border-gray-200',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};