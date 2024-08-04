"use client";

import { useState } from 'react';
import BannerImageComp from '../components/BannerImageComp';
import EditBannerTemplateBs from '../components/EditBannerTemplateBs';
import bannerData from '../data/banners.json';

const HomePage = () => {
  const [banners, setBanners] = useState(bannerData);
  const [isEditing, setIsEditing] = useState(false);
  const [currentBannerIndex, setCurrentBannerIndex] = useState<number | null>(null);

  const handleEdit = (index: number) => {
    setCurrentBannerIndex(index);
    setIsEditing(true);
  };

  const handleSave = (title: string, description: string, cta: string, image: string) => {
    if (currentBannerIndex !== null) {
      const updatedBanners = [...banners];
      updatedBanners[currentBannerIndex] = { title, description, cta, image };
      setBanners(updatedBanners);
    }
    setIsEditing(false);
  };

  return (
    <div className="bg-white z-50">
      {banners.map((banner, index) => (
        <BannerImageComp
          key={index}
          title={banner.title}
          description={banner.description}
          cta={banner.cta}
          image={banner.image}
          
          onEdit={() => handleEdit(index)}
        />
      ))}
      {isEditing && currentBannerIndex !== null && (
        <EditBannerTemplateBs
          title={banners[currentBannerIndex].title}
          description={banners[currentBannerIndex].description}
          cta={banners[currentBannerIndex].cta}
          image={banners[currentBannerIndex].image}
          onSave={handleSave}
          onClose={() => setIsEditing(false)}
        />
      )}
    </div>
  );
};

export default HomePage;
