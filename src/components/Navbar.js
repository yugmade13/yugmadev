import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiMoon, FiSun } from 'react-icons/fi';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import lightLogo from '../assets/light-logo.png';
import darkLogo from '../assets/dark-logo.png';
import { ThemeContext } from '../contexts/ThemeContext';
import Navigation from './styled/Navigation';
import Logo from './styled/Logo';
import Button from './styled/Button';
import WrapIcon from './styled/WrapIcon';

function Navbar() {
  const { currentTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <Navigation data-testid="navbar">
      <Link to="/">
        <Logo
          src={currentTheme === 'light' ? lightLogo : darkLogo}
          alt="logo image"
        />
      </Link>
      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
        <WrapIcon hover>
          <Button
            fontSize="20px"
            type="button"
            onClick={toggleTheme}
          >
            {currentTheme === 'light'
              ? <FiSun />
              : <FiMoon />}
          </Button>
        </WrapIcon>
        <WrapIcon hover>
          <Link data-testid="github" to="https://github.com/yugmade13">
            <SiGithub />
          </Link>
        </WrapIcon>
        <WrapIcon hover>
          <Link data-testid="linkedin" to="https://www.linkedin.com/in/yugma-dewangga-3a80991ba/">
            <SiLinkedin />
          </Link>
        </WrapIcon>
      </div>
    </Navigation>
  );
}

export default Navbar;
