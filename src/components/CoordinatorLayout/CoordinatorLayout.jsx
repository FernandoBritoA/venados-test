import React from 'react';
import './CoordinatorLayout.css';
import logo from '../../assets/venados-logo.png';

const CoordinatorLayout = () => {
  const shrinkLogo = () => {
    //Get logo container and logo
    const choosenLogo = document.getElementById('shrink-logo');
    const shrinkLogoContainer = document.getElementById(
      'shrink-logo-container'
    );
    //Get window width and default values
    const windowWidth = window.innerWidth;
    let logoWidth = '200px';
    let maxScroll = 80;
    let containerWidth = '350px';

    //Change container width and max scroll  values depending on the window size
    if (windowWidth < 860) {
      logoWidth = '130px';
      maxScroll = 50;
    }

    if (windowWidth < 450) {
      containerWidth = '132px';
    } else {
      containerWidth = '350px';
    }
    shrinkLogoContainer.style.width = containerWidth;

    if (choosenLogo) {
      //When scrolling more than te maxScroll value, shrink the
      //logo and logo container
      if (
        document.body.scrollTop > maxScroll ||
        document.documentElement.scrollTop > maxScroll
      ) {
        choosenLogo.style.width = '50px';
        shrinkLogoContainer.style.top = '.2rem';

        //If mobile view, push to the right the shrinked logo
        if (windowWidth < 450) {
          shrinkLogoContainer.style.right = '0';
        } else {
          shrinkLogoContainer.style.right = 'calc(50% - 175px)';
        }
      } else {
        choosenLogo.style.width = logoWidth;
        shrinkLogoContainer.style.top = '3.5rem';

        //Recenter the logo on unshrink
        if (windowWidth < 450) {
          shrinkLogoContainer.style.right = 'calc(50% - 66px)';
        } else {
          shrinkLogoContainer.style.right = 'calc(50% - 175px)';
        }
      }
    }
  };
  window.onscroll = function () {
    shrinkLogo();
  };
  window.addEventListener('resize', shrinkLogo);

  return (
    <div id='shrink-logo-container' className='coordinator-layout'>
      <img id='shrink-logo' src={logo} alt='venados' className='logo-image' />
    </div>
  );
};

export default CoordinatorLayout;
