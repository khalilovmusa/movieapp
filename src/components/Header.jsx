import { href, NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
const Header = () => {

   const navigation = [
      {
         label: "TV Shows",
         href: 'tv'
      },
      {
         label: "Movies",
         href: 'movie'
      }
   ]
  return (
    <header className='fixed top-0 w-full h-16 bg-neutral-600/75'>
      <div className='container mx-auto px-2 flex items-center h-full'>
         <NavLink key={'Home'} to={''}>
            <img 
             src={logo}
             alt='logo'
             width={120}
            />
         </NavLink>

         <nav className='flex items-center gap-1 ml-5'>
            {
               navigation.map((nav,index) => {
                  return(
                     <div>
                        <NavLink key={nav.label} to={nav.href} className={'px-2 hover:text-neutral-100'}>
                           {nav.label}
                        </NavLink>
                     </div>
                  )
               })
            }
         </nav>
      </div>
    </header>
  )
}

export default Header