import React from 'react';
import Link from 'next/link';
import { Button } from "./components/ui/button"
import { ShoppingCart } from 'lucide-react';

export const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <a className="text-xl font-bold">E-commerce Store</a>
        </Link>

        <nav className="space-x-4">
          <Link href="/products">
            <a className="hover:text-gray-400">Products</a>
          </Link>
          <Link href="/about">
            <a className="hover:text-gray-400">About</a>
          </Link>
          <Link href="/contact">
            <a className="hover:text-gray-400">Contact</a>
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost">
            <ShoppingCart className="w-6 h-6" />
            <span className="sr-only">Shopping Cart</span>
          </Button>
          <Button variant="primary">Sign In</Button>
        </div>
      </div>
    </header>
  );