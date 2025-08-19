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
    <nav className="fixed z-50 w-full">
      <div className="flex md:flex-row flex-col md:justify-between items-center gap-5 py-5 lg:px-0 px-5 container mx-auto">
        <a
          href="/"
          className="flex gap-2 cursor-pointer text-nowrap md:text-base text-sm"
        >
          <img src="/images/logo.png" className="w-8 h-8" alt="logo" />
          <p className="font-modern-negra text-3xl -mb-2">Velvet Pour</p>
        </a>

        <ul className="flex items-center justify-center lg:gap-12 gap-7">
          <li>
            <a
              href="#cocktails"
              className="cursor-pointer text-nowrap md:text-base text-sm"
            >
              Cocktails
            </a>
          </li>
          <li>
            <a
              href="#aboutus"
              className="cursor-pointer text-nowrap md:text-base text-sm"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#theart"
              className="cursor-pointer text-nowrap md:text-base text-sm"
            >
              The Art
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="cursor-pointer text-nowrap md:text-base text-sm"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
                                     