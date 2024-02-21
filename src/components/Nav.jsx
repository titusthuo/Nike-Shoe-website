import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className='py-4 px-6 absolute z-10 w-full bg-white shadow-md'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/' className='flex items-center'>
          <img
            src={headerLogo}
            alt='logo'
            width={129}
            height={29}
            className='w-[129px] h-[29px]'
          />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-8 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat text-base text-gray-700 hover:text-indigo-600 transition duration-300'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='flex gap-4 text-base font-medium font-montserrat max-lg:hidden'>
          <a href='/' className='text-gray-700 hover:text-indigo-600 transition duration-300'>Sign in</a>
          <span className='text-gray-500'>/</span>
          <a href='/' className='text-gray-700 hover:text-indigo-600 transition duration-300'>Explore now</a>
        </div>
        <div className='hidden max-lg:flex items-center'>
          <img src={hamburger} alt='hamburger icon' width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
