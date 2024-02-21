import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className='max-container bg-gray-800 py-12'>
      <div className='flex justify-between items-start gap-10 flex-wrap max-lg:flex-col'>
        <div className='flex flex-col items-start'>
          <a href='/'>
            <img
              src={footerLogo}
              alt='logo'
              width={120}
              height={36}
              className='m-0'
            />
          </a>
          <p className='mt-6 text-lg leading-7 font-montserrat text-gray-200 sm:max-w-sm'>
            Elevate your living space with our exclusive collection of furniture
            and decor. Discover timeless designs that suit your style.
          </p>
          <div className='flex items-center gap-4 mt-8'>
            {socialMedia.map((icon) => (
              <div
                className='flex justify-center items-center w-10 h-10 bg-blue-500 rounded-full'
                key={icon.alt}
              >
                <img src={icon.src} alt={icon.alt} width={20} height={20} />
              </div>
            ))}
          </div>
        </div>

        <div className='flex flex-1 justify-between lg:gap-8 gap-10 flex-wrap'>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className='font-montserrat text-2xl leading-normal font-semibold mb-4 text-gray-200'>
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className='mt-2 font-montserrat text-base leading-normal text-gray-300 hover:text-blue-500'
                    key={link.name}
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className='flex justify-between text-gray-300 mt-10 max-sm:flex-col max-sm:items-center'>
        <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
          <img
            src={copyrightSign}
            alt='copyright sign'
            width={18}
            height={18}
            className='rounded-full m-0'
          />
          <p>© 2024. All rights reserved.</p>
        </div>
        <p className='font-montserrat cursor-pointer hover:text-blue-500'>
          Terms of Service
        </p>
      </div>
    </footer>
  );
};

export default Footer;
