import React from 'react';

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
    { icon: 'instagram', href: '#' },
    { icon: 'tiktok', href: '#' },
    { icon: 'twitter', href: '#' },
    { icon: 'facebook', href: '#' },
    { icon: 'youtube', href: '#' },
    { icon: 'pinterest', href: '#' },
  ];

  const regions = [
    'us', 'ca', 'au', 'nz', 'uk', 'cn', 'eu', 'jp', 'kr', 'tw'
  ];

  return (
    <footer className="bg-zinc-900 text-white px-6 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Help Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">HELP</h2>
            <ul className="space-y-2">
              {helpLinks.map((link) => (
                <li key={link.title}>
                  <a href={link.href} className="text-gray-300 hover:text-white text-sm">
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
                  <a href={link.href} className="text-gray-300 hover:text-white text-sm">
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
                  <a href={link.href} className="text-gray-300 hover:text-white text-sm">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Follow The Flock Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-lg font-semibold mb-2">FOLLOW THE FLOCK</h2>
              <p className="text-gray-300 text-sm mb-4">
                Exclusive offers, a heads up on new things, and sightings of Allbirds in the wild. Oh, we have cute sheep, too. #allbirds
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.icon}
                    href={social.href}
                    className="text-gray-300 hover:text-white"
                  >
                    <span className="sr-only">{social.icon}</span>
                    <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                  </a>
                ))}
              </div>
            </div>

            {/* B Corp Logo */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-600 rounded-full mb-2"></div>
              <span className="text-sm text-gray-300">Certified B Corporation</span>
            </div>
          </div>
        </div>

        {/* Region Selector */}
        <div className="flex flex-wrap gap-4 mt-8 pt-8 border-t border-gray-700">
          {regions.map((region) => (
            <button
              key={region}
              className="w-8 h-8 bg-gray-300 text-white rounded-sm hover:opacity-80"
            >
              <span className="sr-only">{region}</span>
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;