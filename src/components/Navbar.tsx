import { Link } from "react-router-dom"
import { styles } from "../styles"

import { useState } from "react"
import { menu, close } from "../assets"
import { navLinks } from "../constants"
const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, settoggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full flex  py-5 items-center  mt-4 fixed top-5  z-20 bg-primary`}>
      <div className="w-full flex justify-between  items-center text-2xl  font-bold  underline-offset-2  max-w-7xl mx-auto">
              <Link to="/"
                className="flex items-center gap-2 ml-16"
                onClick={() => {
                  setActive("")
                  window.scrollTo(0, 0)
                }}
              >

                    <span className='text-white left-4 text-[24px] font-bold cursor-pointer flex hover-underline  hover:text-2xl'>
                      Harshit &nbsp;
                      <span className='sm:block hidden'> | Portfolio </span>
                    </span>
              </Link>
            <ul className="list-none hidden sm:flex  flex-row gap-10">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`${active === nav.title ? "text-white" : "text-secondary"
                    } hover:text-blue-300 text-[18px]  font-medium cursor-pointer holographic-nav-item`}
                  onClick={() => setActive(nav.title)}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}

            </ul>
        <div className="flex sm:hidden flex flex-1  justify-end items-center ">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className=" w-[28px] h-[28px]  object-pointer"
            onClick={() => settoggle(!toggle)}
          />

          <div className={`${!toggle ? 'hidden' : 'flex'} p-4   bg-gray-800/60 backdrop-blur-sm absolute top-18 right-14 mx-6 my-6 min-w-[140px] z-10 rounded-xl `}>
            <ul className="list-none  flex flex-col gap-4  items-start justify-end">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`${active === nav.title ? "text-white" : "text-secondary"
                    } hover:text-white text-[18px] font-medium left-4  cursor-pointer holographic-nav-item`}
                  onClick={() => setActive(nav.title)}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>


      </div>
    </nav>
  )
}

export default Navbar