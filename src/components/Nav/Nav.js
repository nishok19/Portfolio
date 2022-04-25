import "./Nav.scss";
import LinkedinVect from "../../images/linkedin-vector.svg";
import InstaVect from "../../images/insta-vector.svg";
import DribbleVect from "../../images/dribble-vector.svg";

import { useSpring, animated } from "react-spring";

const Nav = () => {
  const navAnim = useSpring({
    from: { opacity: 0, x: 30 },
    to: { opacity: 1, x: 0 },
    config: { duration: 600 },
  });

  const socioAnim = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 400 },
  });

  return (
    <div className="nav-container">
      <header>
        <animated.a style={socioAnim} href="/" className="logo">
          Nishok-Orion ;)
        </animated.a>

        <nav>
          <ul>
            <animated.li style={navAnim}>
              <a href="/">My work</a>
            </animated.li>
            <animated.li style={navAnim}>
              <a href="/">My skills</a>
            </animated.li>
            <animated.li style={navAnim}>
              <a href="/">Hire me</a>
            </animated.li>
          </ul>
        </nav>
      </header>
      <div className="social-header">
        <ul>
          <animated.li style={socioAnim}>
            <a href="/">
              <img src={LinkedinVect} alt="LinkedIn" />
            </a>
          </animated.li>
          <animated.li style={socioAnim}>
            <a href="/">
              <img src={InstaVect} alt="Instagram" />
            </a>
          </animated.li>
          <animated.li style={socioAnim}>
            <a href="/">
              <img src={DribbleVect} alt="Droibble" />
            </a>
          </animated.li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
