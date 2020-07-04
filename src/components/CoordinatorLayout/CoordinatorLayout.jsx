import React from 'react';
import './CoordinatorLayout.css';
import logo from '../../assets/venados-logo.png';

const CoordinatorLayout = () => {
  const shrinkLogo = () => {
    const choosenLogo = document.getElementById('shrink-logo');
    const shrinkLogoContainer = document.getElementById(
      'shrink-logo-container'
    );
    let logoWidth = '200px';
    let maxScroll = 80;
    const windowWidth = window.innerWidth;
    if (windowWidth < 860) {
      logoWidth = '130px';
      maxScroll = 50;
    }
    let containerWidth = '350px';
    if (windowWidth < 450) {
      containerWidth = '132px';
    } else {
      containerWidth = '350px';
    }
    shrinkLogoContainer.style.width = containerWidth;

    if (choosenLogo) {
      if (
        document.body.scrollTop > maxScroll ||
        document.documentElement.scrollTop > maxScroll
      ) {
        choosenLogo.style.width = '50px';
        shrinkLogoContainer.style.top = '.2rem';

        if (windowWidth < 450) {
          shrinkLogoContainer.style.right = '0';
        } else {
          shrinkLogoContainer.style.right = 'calc(50% - 175px)';
        }
      } else {
        choosenLogo.style.width = logoWidth;
        shrinkLogoContainer.style.top = '3.5rem';

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
