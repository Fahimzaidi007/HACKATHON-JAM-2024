import React from 'react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-bold mb-4">About Us</h3>
          <p className="text-gray-400">
            We are a leading e-commerce store offering a wide range of fashionable and high-quality apparel.
          </p>
        </div>

        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/products">
                <a className="hover:text-gray-400">Products</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className="hover:text-gray-400">About</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a className="hover:text-gray-400">Contact</a>
              </Link>
            </li>
            <li>
              <Link href="/faq">
                <a className="hover:text-gray-400">FAQs</a>
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li>
              <a href="mailto:info@ecommercestore.com" className="hover:text-gray-400">
                info@ecommercestore.com
              </a>
            </li>
            <li>
              <a href="tel:+1234567890" className="hover:text-gray-400">
                +1 (234) 567-890
              </a>
            </li>
            <li>
              <p>123 Main Street, Anytown USA</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-400">
        &copy; {new Date().getFullYear()} E-commerce Store. All rights reserved.
      </div>
    </footer>
  );