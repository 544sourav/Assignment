"use client";

import Image from 'next/image';
import React from 'react';
import { FaEdit } from 'react-icons/fa';

interface BannerProps {
  title: string;
  description: string;
  cta: string;
  image: string;
  
  onEdit: () => void;
}

const BannerImageComp: React.FC<BannerProps> = ({ title, description, cta, image, onEdit }) => {
  return (
    <div  className="banner p-4  relative">
      <Image src={image} alt={title}
       width={500}
       height={500} 
      className="w-full h-48 object-cover" />
      <div className=" mt-9 absolute top-1">
        <h2 className="text-xl mx-4 font-bold">{title}</h2>
        <p className="mt-20 mx-5">{description}</p>
        <button className=" -translate-y-7 mx-64 bg-blue-500 text-white px-2 py-2 w-[20%] rounded">{cta}</button>
        
      </div>
     
      <FaEdit 
        className="absolute top-4 right-4 cursor-pointer text-gray-600"
        onClick={onEdit} 
      />
    </div>
  );
};

export default BannerImageComp;
