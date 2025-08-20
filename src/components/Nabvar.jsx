import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { navData } from "../../constant";


const Navbar = () => {
  //  useGSAP(() => {
  // 	const navTween = gsap.timeline({
  // 	 scrollTrigger: {
  // 		trigger: 'nav',
  // 		start: 'bottom top'
  // 	 }
  // 	});

  // 	navTween.fromTo('nav', { backgroundColor: 'transparent' }, {
  // 	 backgroundColor: '#00000050',
  // 	 backgroundFilter: 'blur(10px)',
  // 	 duration: 1,
  // 	 ease: 'power1.inOut'
  // 	});
  //  })

  return (
     <nav className="fixed z-50 w-full ">
      <div className="nav-container">
        <a href="/" className="nav-brand">
          <img src="/images/logo.png" className="w-8 h-8" alt="logo" />
          <p className="nav-title">Velvet Pour</p>
        </a>

        <ul className="nav-links">
          {navData.map((navdata) => (
            <li key={navdata.id}>
              <a href={`#${navdata.id}`} className="nav-link">
                {navdata.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
    
  );
};
export default Navbar;
