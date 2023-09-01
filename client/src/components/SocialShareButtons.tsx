import React from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaRedditSquare,
  FaWhatsappSquare,
} from "react-icons/fa";

interface SocialShareButtonsProps {
  className?: string;
  title: string;
  url: string;
}

const SocialShareButtons = ({
  url,
  title,
  className,
}: SocialShareButtonsProps) => {
  const SocialMediaShareAPI = {
    facebook: (id: string, url: string) =>
      `https://www.facebook.com/dialog/share?app_id=${id}&display=popup&href=${url}`,
    twitter: (url: string, title: string) =>
      `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
    reddit: (url: string, title: string) =>
      `https://reddit.com/submit?url=${url}&title=${title}`,
    whatsapp: (url: string, title: string) =>
      `https://api.whatsapp.com/send?text=${title} ${url}`,
  };

  return (
    <div className={`w-full flex justify-between ${className}`}>
      <a
        target="_blank"
        rel="noreferrer"
        href={SocialMediaShareAPI.facebook("304419755572966", url)}
      >
        <FaFacebookSquare className="text-[#3b5998] w-12 h-auto" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href={SocialMediaShareAPI.twitter(url, title)}
      >
        <FaTwitterSquare className="text-[#00acee] w-12 h-auto" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href={SocialMediaShareAPI.reddit(url, title)}
      >
        <FaRedditSquare className="text-[#ff4500] w-12 h-auto" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href={SocialMediaShareAPI.whatsapp(url, title)}
      >
        <FaWhatsappSquare className="text-[#25d366] w-12 h-auto" />
      </a>
    </div>
  );
};

export default SocialShareButtons;
