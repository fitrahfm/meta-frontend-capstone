import React from 'react';
import FooterLogo from '../../assets/footer-logo.png';

import NavLinks from '../../data/navigation.json';
import Contact from '../../data/contact.json';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F8F9FA]">
      <section role="navigation" className="flex justify-center items-center lg:p-8 lg:grid lg:grid-cols-8 lg:justify-items-center lg:items-start lg:gap-4">
        <figure className="w-16 col-start-3 m-3">
          <img src={FooterLogo} alt="Little Lemon Logo" />
        </figure>
        <nav role="footer-navigation" className="hidden lg:block">
          <h3 className="text-xs text-gray-600 mb-2">Navigation</h3>
          {
            NavLinks.data.map((data) => {
              return (
                <h4 className="text-xs text-gray-500 mb-1">
                  <a href={ data.url }>{ data.name }</a>
                </h4>  
              )
            })
          }
        </nav>
        <nav role="social-navigation" className="hidden lg:block">
          <h3 className="text-xs text-gray-600 mb-2">Social Media Links</h3>
          <h4 className="text-xs text-gray-500 mb-1">{Contact.data.address}</h4>
          <h4 className="text-xs text-gray-500 mb-1">{Contact.data.phone_number}</h4>
          <h4 className="text-xs text-gray-500 mb-1">{Contact.data.email}</h4>
        </nav>
        <nav role="social-navigation" className="hidden lg:block">
          <h3 className="text-xs text-gray-600 mb-2">Social Media Links</h3>
          <h4 className="text-xs text-gray-500 mb-1"><a href="/">Instagram</a></h4>
          <h4 className="text-xs text-gray-500 mb-1"><a href="/">Facebook</a></h4>
          <h4 className="text-xs text-gray-500 mb-1"><a href="/">Twitter</a></h4>
          <h4 className="text-xs text-gray-500 mb-1"><a href="/">Youtube</a></h4> 
        </nav>
      </section>
      <section role="copyright" className='border-t p-4 flex justify-center items-center'>
        <h4 className="text-sm text-gray-600">© 2023 Little Lemon. All rights reserved.</h4>
      </section>
    </footer>
  )
}

export default Footer;