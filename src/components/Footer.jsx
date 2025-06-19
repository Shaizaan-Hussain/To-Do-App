import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons'; 
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';




const Footer = () => {
  return (
   <div className="flex justify-center items-center gap-4 px-4 lg:px-44 py-3 text-center">
  <p className="text-sm text-gray-500 max-sm:hidden mr-10">
    All Rights Reserved 2025. © Shaizaan Hussain
  </p>
  
  <div className="flex gap-3 text-2xl">
    <a href="https://www.linkedin.com/in/shaizaan-hussain21/" target="_blank" rel="noopener noreferrer">
  <FontAwesomeIcon icon={faLinkedin} className="text-blue-600 hover:text-blue-800" />
</a>

    <a href="https://www.instagram.com/azaan_life/" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faInstagram} className="text-pink-500 hover:text-pink-700" />
    </a>
    <a href="https://github.com/Shaizaan-Hussain" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faGithub} className="text-gray-800 hover:text-black" />
    </a>
    <a href="https://shaizaanportfolio.vercel.app/" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faGlobe} className="text-blue-500 hover:text-blue-700" />
    </a>
  </div>
</div>

  ) 
}

export default Footer