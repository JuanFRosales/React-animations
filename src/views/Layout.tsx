import { Link, Outlet, useLocation } from 'react-router-dom';
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import homeAnimation from '../assets/lottie/home.json'
import hamburgerAnimation from '../assets/lottie/hamburger.json'
import profileAnimation from '../assets/lottie/profile.json'
import saveAnimation from '../assets/lottie/save.json'
import { useEffect, useRef, useState } from 'react';



const Layout = () => {

  const [menuToggle, setMenuToggle] = useState(false);

  const toggle = () => {
    setMenuToggle(!menuToggle)
  }

  const location = useLocation()

  const homeRef = useRef<LottieRefCurrentProps>(null);
  const hamburegerRef = useRef<LottieRefCurrentProps>(null);
  const profileRef = useRef<LottieRefCurrentProps>(null)
  const saveRef = useRef<LottieRefCurrentProps>(null)


  const homeHoverHandler = () => {
    if (!homeRef.current) {
      return
    }
    homeRef.current.goToAndStop(0)
    homeRef.current.play()
  };

  const profileHoverHandler = () => {
    if (!profileRef.current) {
      return
    }
    profileRef.current.goToAndStop(-0)
    profileRef.current.play()
  };
  
  const saveHoverHandler = () => {
    if (!saveRef.current) {
      return
    }
    saveRef.current.goToAndStop(0)
    saveRef.current.play()
  };



  useEffect(() => {
    if (!hamburegerRef.current) {
      return
    }
    if (menuToggle) {
      hamburegerRef.current.setDirection(1)

    } else { hamburegerRef.current.setDirection(-1) }
    hamburegerRef.current.play();

  }, [menuToggle])

  useEffect(() => { setMenuToggle(false) }, [location])


  return (
    <div className="m-auto h-full w-11/12">
      <nav className="absolute right-0 flex flex-col-reverse items-end justify-end lg:relative lg:block lg:flex-row">
        <ul
          className={`
          mr-4
          justify-end
          overflow-hidden
          rounded-lg
          bg-slate-200
          p-0
          shadow-md
          transition-opacity
          duration-500
          ease-in-out
          lg:flex
          lg:opacity-100
          ${menuToggle ? 'opacity-100' : 'opacity-0'}
          `}
        >
          <li>
            <Link onMouseEnter={homeHoverHandler} className="block p-4 text-center  hover:bg-slate-300" to="/">

              <div className='flex items-baseline'>

                <Lottie
                  lottieRef={homeRef}
                  loop={false}
                  className='h-4 w-4'
                  animationData={homeAnimation}
                />

                <span className='p1'>Home</span>
              </div>

            </Link>
          </li>
          <li>
            <Link
              onMouseEnter={profileHoverHandler}
              className="block p-4 text-center  hover:bg-slate-300"
              to="/profile"
            >
              <div className='flex items-baseline'>

                <Lottie
                  lottieRef={profileRef}
                  loop={false}
                  className='h-8 w-8 flex-1 self-center '
                  animationData={profileAnimation}
                />

                <span className='p1 flex-1 self-center'>Profile</span>
              </div>
            </Link>
          </li>
          <li>
            <Link
              onMouseEnter={saveHoverHandler}
              className="block p-4 text-center  hover:bg-slate-300"
              to="/save"
            >
              <div className='flex items-baseline'>
 
                <Lottie
                  lottieRef={saveRef}
                  loop={false}

                  className='h-8 w-8 flex-1 self-center '
                  animationData={saveAnimation}
                />

                <span className='p1 flex-1 self-center'>Save</span>
              </div>
            </Link>
          </li>
        </ul>
        <div className="m-4 h-8 w-8 sm:block lg:hidden">
          <Lottie
            lottieRef={hamburegerRef}
            onClick={toggle}
            loop={false}
            className='h-4 w-4'
            animationData={hamburgerAnimation} />
        </div>
      </nav>
      <main className="">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
