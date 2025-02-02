import Link from 'next/link';
import React from 'react'


export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Address Section */}
          <div>
            <p className="text-gray-500 mt-4 md:mt-10">
              400 University Drive Suite 200 Coral Gables,
              <br /> FL 33134 USA
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h4 className="text-black font-semibold mb-3">Links</h4>
            <ul className="space-y-1">
              <li className="text-gray-600 cursor-pointer hover:text-black">
             <Link href={'/'}>  Home </Link> 
              </li>
              <li className="text-gray-600 cursor-pointer hover:text-black">
              <Link href={'/routes/shop'}>  Shop </Link> 
              </li>
              <li className="text-gray-600 cursor-pointer hover:text-black">
              <Link href={'/routes/blog'}>  About </Link> 
              </li>
              <li className="text-gray-600 cursor-pointer hover:text-black">
              <Link href={'/routes/contact'}>  Contact </Link> 
              </li>
              
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h4 className="text-black font-semibold mb-3">Help</h4>
            <ul className="space-y-1">
              <li className="text-gray-600 cursor-pointer hover:text-black">
                Payment Options
              </li>
              <li className="text-gray-600 cursor-pointer hover:text-black">
                Returns
              </li>
              <li className="text-gray-600 cursor-pointer hover:text-black">
                Privacy Policies
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h4 className="text-black font-semibold mb-3">Newsletter</h4>
            <form className="flex flex-wrap items-center gap-2">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
              <button
                type="submit"
                className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-6 border-t border-gray-200 pt-4 ">
          <p className="text-sm ">
            2022 Meubel House. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
