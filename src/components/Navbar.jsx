import styles from '../style'
import { logo, close, menu } from '../assets'
import { navLinks } from '../constans'
import { useState } from 'react'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <div className='w-full flex py-6 justify-center items-center navbar'>
      <img src={logo} alt='hoobank' 
      className='w-[124px] h-[32px] '/>

      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li
          key={nav.id}
          className={`font-poppins text-white cursor-pointer ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-[16px] mr-10`}>
            <a href={`${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
      
      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img src={toggle ? close : menu} alt='menu'
        className='w-[28px] h-[28px] object-contain cursor-pointer'
        onClick={() => setToggle((prev) => !prev)}
        />
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
        <ul className='list-none flex flex-col justify-end items-center  flex-1'>
        {navLinks.map((nav, index) => (
          <li
          key={nav.id}
          className={`font-poppins text-white cursor-pointer ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-[16px]`}>
            <a href={`${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
        </div>
      </div>

    </div>
  )
}

export default Navbar