const scrollNavbar = () => {
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    window.addEventListener('scroll',() => {
      if (window.scrollY >= 600 ) {
        navbar.classList.add('blue-navbar');
      } else { navbar.classList.remove('blue-navbar') }
    })
  }
}

export { scrollNavbar }
