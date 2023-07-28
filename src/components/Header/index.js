import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import Popup from 'reactjs-popup'
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="header-con">
    <Link to="/">
      <img
        className="header-img"
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
      />
    </Link>
    <Popup
      model
      trigger={
        <button type="button" data-testid="hamburgerIconButton">
          <GiHamburgerMenu size="30" />
        </button>
      }
      className="popup-content"
    >
      {close => (
        <div>
          <button
            type="button"
            data-testid="closeButton"
            onClick={() => close()}
          >
            <IoMdClose size="30" />
          </button>
          <ul className="nav-link-con">
            <li>
              <Link
                className="nav-link"
                to="/"
                style={{textDecoration: 'none'}}
                onClick={() => close()}
              >
                <AiFillHome size="36" />
                <p className="nav-link-text">Home</p>
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                to="/about"
                style={{textDecoration: 'none'}}
                onClick={() => close()}
              >
                <BsInfoCircleFill size="32" />
                <p className="nav-link-text">About</p>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </Popup>
  </div>
)

export default Header
