import React from 'react'
import { Link } from 'gatsby'
import KenticoLogo from '../images/kentico_rgb_small.png';


const Header = () => (
  <div
    style={{
      margin: '0 auto',
    }}
  >
    <div style={{
      position: 'relative',
      top: '0',
      left: '2em'
    }}>
      <Link
        to="/"
        style={{
          color: 'white',
          textDecoration: 'none',
        }}>
        <img
          src={KenticoLogo}
          alt="Kentico logo"
          style={{
            width: '143px',
            height: '66px'
          }} />
      </Link>
    </div>
  </div>
)


export default Header
