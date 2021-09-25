/* eslint-disable @next/next/no-html-link-for-pages */
import Navbar from "../nav"
import { FaHome, FaSearch, FaVideo, FaGithub } from 'react-icons/fa'

const Navigation = () => {
    return(
        <Navbar position="fixed-bottom ">
          <ul className="navbar-nav mx-auto mb-ms-0">
            <li className="nav-item">
              <a className="nav-link active" href="/">
                <FaHome size={20} />
              </a>
            </li>
          </ul>
          <ul className="navbar-nav me-auto  mb-ms-0">
            <li className="nav-item">
              <a className="nav-link active" href="/search">
                <FaSearch size={20} />
              </a>
            </li>
          </ul>
          <ul className="navbar-nav me-auto  mb-ms-0">
            <li className="nav-item">
              <a className="nav-link active" href="/video">
                <FaVideo size={20} />
              </a>
            </li>
          </ul>
          <ul className="navbar-nav me-auto mb-ms-0">
            <li className="nav-item">
              <a className="nav-link active" href="https://github.com/GarutCodeCamp">
                <FaGithub size={20} />
              </a>
            </li>
          </ul>
      </Navbar>
    )
}

export default Navigation