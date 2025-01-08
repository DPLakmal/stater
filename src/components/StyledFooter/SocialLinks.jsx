import React from "react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaXTwitter,
} from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

const SocialLinks = ({ links }) => {
  const formattedLinks = getSocialProfiles(links);

  if (!formattedLinks || !formattedLinks?.length) return null;

  return (
    <ul className={"flex justify-center items-center md:justify-start"}>
      {formattedLinks.map(
        ({ link, icon }, index) =>
          link && (
            <li
              key={index}
              className={
                "m-1 bg-[#F0F0F0] p-[9px] rounded-[6px] text-[#262626]"
              }
            >
              <a
                href={link}
                target={"_blank"}
                rel={"noreferrer"}
                className={"p-1 block"}
              >
                {icon}
              </a>
            </li>
          ),
      )}
    </ul>
  );
};

const getSocialProfiles = (links) => {
  const socialLinks = [];
  const size = 20;

  for (let i = 0; i < links.length; i++) {
    const { profile, url } = links[i];

    switch (profile) {
      case "TikTok":
        socialLinks.push({
          link: url,
          icon: <FaTiktok size={size} />,
        });
        break;
      case "Facebook":
        socialLinks.push({
          link: url,
          icon: <FaFacebookF size={size} />,
        });
        break;
      case "X (Twitter)":
        socialLinks.push({
          link: url,
          icon: <FaXTwitter size={size} />,
        });
        break;
      case "Instagram":
        socialLinks.push({
          link: url,
          icon: <FaInstagram size={size + 2} />,
        });
        break;
      case "LinkedIn":
        socialLinks.push({
          link: url,
          icon: <FaLinkedinIn size={size} />,
        });
        break;
      default:
        break;
    }
  }
  return socialLinks;
};

export default SocialLinks;
