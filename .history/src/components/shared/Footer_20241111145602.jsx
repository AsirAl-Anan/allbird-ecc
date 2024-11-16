import React from 'react';
import { 
  Instagram,
  MessageCircle as TikTokIcon, // Using MessageCircle as substitute for TikTok
  Twitter,
  Facebook,
  Youtube,
  Share2 as PinterestIcon // Using Share2 as substitute for Pinterest
} from 'lucide-react';

const Footer = () => {
  const helpLinks = [
    { title: 'Chat with us!', href: '#' },
    { title: '1-888-963-8944', href: 'tel:18889638944' },
    { title: '1-814-251-9966 (Text)', href: 'tel:18142519966' },
    { title: 'help@allbirds.com', href: 'mailto:help@allbirds.com' },
    { title: 'Returns/Exchanges', href: '#' },
    { title: 'FAQ/Contact Us', href: '#' },
    { title: 'Afterpay', href: '#' },
  ];

  const shopLinks = [
    { title: "Men's Shoes", href: '#' },
    { title: "Women's Shoes", href: '#' },
    { title: "Men's Apparel", href: '#' },
    { title: "Women's Apparel", href: '#' },
    { title: 'Socks', href: '#' },
    { title: 'Gift Cards', href: '#' },
    { title: 'Refer a Friend', href: '#' },
  ];

  const companyLinks = [
    { title: 'Our Stores', href: '#' },
    { title: 'Our Story', href: '#' },
    { title: 'Our Materials', href: '#' },
    { title: 'Sustainability', href: '#' },
    { title: 'Investors', href: '#' },
    { title: 'Shoe Care', href: '#' },
    { title: 'Affiliates', href: '#' },
    { title: 'Bulk Orders', href: '#' },
    { title: 'Careers', href: '#' },
    { title: 'Press', href: '#' },
    { title: 'Allbirds Responsible Disclosure Program', href: '#' },
    { title: 'California Transparency Act', href: '#' },
    { title: 'Community Offers', href: '#' },
    { title: 'Our Blog - The Perch', href: '#' },
  ];

  const socialLinks = [
    { icon: <Instagram className="w-6 h-6" />, href: '#', label: 'Instagram' },
    { icon: <TikTokIcon className="w-6 h-6" />, href: '#', label: 'TikTok' },
    { icon: <Twitter className="w-6 h-6" />, href: '#', label: 'Twitter' },
    { icon: <Facebook className="w-6 h-6" />, href: '#', label: 'Facebook' },
    { icon: <Youtube className="w-6 h-6" />, href: '#', label: 'Youtube' },
    { icon: <PinterestIcon className="w-6 h-6" />, href: '#', label: 'Pinterest' },
  ];

  const regions = [
    { code: 'US', label: 'United States' },
    { code: 'CA', label: 'Canada' },
    { code: 'AU', label: 'Australia' },
    { code: 'NZ', label: 'New Zealand' },
    { code: 'UK', label: 'United Kingdom' },
    { code: 'CN', label: 'China' },
    { code: 'EU', label: 'Europe' },
    { code: 'JP', label: 'Japan' },
    { code: 'KR', label: 'South Korea' },
    { code: 'TW', label: 'Taiwan' }
  ];
  return (
    <footer className="bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Help Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">HELP</h2>
            <ul className="space-y-2">
              {helpLinks.map((link) => (
                <li key={link.title}>
                  <a href={link.href} className="text-gray-300 hover:text-white text-sm transition-colors">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Shop Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">SHOP</h2>
            <ul className="space-y-2">
              {shopLinks.map((link) => (
                <li key={link.title}>
                  <a href={link.href} className="text-gray-300 hover:text-white text-sm transition-colors">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">COMPANY</h2>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.title}>
                  <a href={link.href} className="text-gray-300 hover:text-white text-sm transition-colors">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Follow The Flock Section */}
        <div className="border-t border-gray-800 pt-12">
          <h2 className="text-xl font-bold mb-4">FOLLOW THE FLOCK</h2>
          <p className="text-gray-300 text-sm mb-6 max-w-xl">
            Exclusive offers, a heads up on new things, and sightings of Allbirds in the
            wild. Oh, we have cute sheep, too. #allbirds
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mb-12">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-white hover:text-gray-300 transition-colors"
                aria-label={social.label}
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
    </footer>
  );
};

export default Footer;