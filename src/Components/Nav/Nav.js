import React from 'react'
import './nav.css'
import { MdOutlineHome ,MdOutlineContactPage , MdDesignServices} from "react-icons/md";
import { useState } from 'react';
export default function Nav() {
  const [activeNav , setActiveNav] = useState('#')
  return (
    <nav>
      <a  href='#' onClick={() => setActiveNav('#')}className={activeNav === '#' ? 'active' : ''}><MdOutlineHome /></a>
      <a href='#services' onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><MdDesignServices /></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>
        <MdOutlineContactPage />
        </a>
    
    </nav>
  )
}
