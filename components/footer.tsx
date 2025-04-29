import React from "react";
import { links } from "@/lib/data";
import Image from "next/image";
import myLogo from "@/public/myimage.png";
export default function Footer() {
  return (
    <footer className=" py-10 px-4 text-center ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-6">
        <div className="flex flex-col items-start">
          <div className="text-2xl font-bold  mb-4">
            <Image
              src={myLogo}
              alt="Profile picture"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem]  shadow-xl"
            />
          </div>
        </div>
        <div className="flex flex-col items-start">
          <h3 className="text-lg font-semibold  ml-5 mb-4">Links</h3>
          <ul className="space-y-2">
            {links.map((link) => (
              <li key={link.hash}>
                <a
                  href={link.hash}
                  className=" hover:text-[#00b4d8] transition-colors duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-start">
          <h3 className="text-lg font-semibold  mb-4">Contact Us</h3>
          <p className=" mb-2">1234 Street Name, City, Country</p>
          <p className=" mb-2">
            Email:{" "}
            <a
              href="mailto:contact@example.com"
              className=" hover:text-[#00b4d8] transition-colors duration-300"
            >
              contact@example.com
            </a>
          </p>
          <p className="">Phone: +1 (123) 456-7890</p>
        </div>
      </div>

      <div className="border-t border-[#caf0f8]/30 pt-6">
        <small className="block text-xs  mb-2">
          © 2025 Muhammad Areeb. All rights reserved.
        </small>
        <p className="text-xs ">
          <span className="font-semibold">About this website:</span> Built with{" "}
          React.js, Next.js, TypeScript, Tailwind CSS, and Framer Motion.
        </p>
      </div>
    </footer>
  );
}
