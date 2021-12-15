import React from 'react'
import Link from 'next/link'
import Logo from '../public/Logo'
import Facebook from '../public/images/social/Facebook'
import Google from '../public/images/social/Google'
import Twitter from '../public/images/social/Twitter'

const Footer = () => {
  return (
    <footer>
      <div className='upper-section'>
        <div className='left-side'>
          <Logo />
        </div>
        <div className='right-side'>
          <div>
            <span className='list-header'>Product</span>
            <ul className='list'>
              <li><Link href='#'>Popular</Link></li>
              <li><Link href='#'>Trending</Link></li>
              <li><Link href='#'>Guided</Link></li>
              <li><Link href='#'>Products</Link></li>
            </ul>
          </div>
          <div>
            <span className='list-header'>Company</span>
            <ul className='list'>
              <li><Link href='#'>Press</Link></li>
              <li><Link href='#'>Mission</Link></li>
              <li><Link href='#'>Strategy</Link></li>
              <li><Link href='#'>About</Link></li>
            </ul>
          </div>
          <div>
            <span className='list-header'>Info</span>
            <ul className='list'>
              <li><Link href='#'>Support</Link></li>
              <li><Link href='#'>Customer Service</Link></li>
              <li><Link href='#'>Get started</Link></li>
            </ul>
          </div>
          <div>
            <span className='list-header'>Follow us</span>
            <div className='social-links'>
              <Link href='#'><a><Facebook /></a></Link>
              <Link href='#'><a><Google /></a></Link>
              <Link href='#'><a><Twitter /></a></Link>
            </div>
          </div>
        </div>
      </div>
      <div className='lower-section'>
        © 2021 Manual. All rights reserverd
      </div>
    </footer>
  )
}

export default Footer
