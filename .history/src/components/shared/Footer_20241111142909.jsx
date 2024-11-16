import React from 'react';
import { 
  Instagram, 
  Tiktok, 
  Twitter, 
  Facebook, 
  Youtube, 
  Pinterest 
} from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Instagram size={24} />, href: '#' },
    { icon: <Tiktok size={24} />, href: '#' },
    { icon: <Twitter size={24} />, href: '#' },
    { icon: <Facebook size={24} />, href: '#' },
    { icon: <Youtube size={24} />, href: '#' },
    { icon: <Pinterest size={24} />, href: '#' },
  ];

  const regions = [
    { code: 'us', label: 'United States' },
    { code: 'ca', label: 'Canada' },
    { code: 'au', label: 'Australia' },
    { code: 'nz', label: 'New Zealand' },
    { code: 'uk', label: 'United Kingdom' },
    { code: 'cn', label: 'China' },
    { code: 'eu', label: 'Europe' },
    { code: 'jp', label: 'Japan' },
    { code: 'kr', label: 'South Korea' },
    { code: 'tw', label: 'Taiwan' }
  ];

  return (
    <div className="bg-zinc-900 text-white">
      {/* Follow The Flock Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-xl font-bold mb-4">FOLLOW THE FLOCK</h2>
        <p className="text-gray-300 text-sm mb-6 max-w-xl">
          Exclusive offers, a heads up on new things, and sightings of Allbirds in the
          wild. Oh, we have cute sheep, too. #allbirds
        </p>

        {/* Social Icons */}
        <div className="flex gap-4 mb-12">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="text-white hover:text-gray-300 transition-colors"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* B Corp Logo */}
        <div className="mb-12">
          <div className="w-20 h-20 bg-gray-600 rounded-full mb-3"></div>
          <p className="text-white text-sm">Certified B Corporation</p>
        </div>

        {/* Region Selector */}
        <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
          {regions.map((region) => (
            <button
              key={region.code}
              className="w-12 h-12 bg-gray-700 hover:bg-gray-600 transition-colors relative group"
            >
              <span className="sr-only">{region.label}</span>
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-gray-800 text-white rounded opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity">
                {region.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;