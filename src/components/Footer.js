import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer>
      <menu>
        <li className="img-footer">
          <img src={require("../assets/logo/Asset 9@4x.png")} height={100} alt="Little Lemon logo"></img>
        </li>
        <li>
          <h1 className="footer-header">Contact</h1>
          <ul className="footer-links">
            <li>431 El Camino Real, Santa Clara, CA</li>
            <li>+1 (666)-330-990</li><br></br>
          </ul>
        </li>
        <li>
          <h1 className="footer-header">Connect</h1>
          <ul className="footer-links-c">
          <a href="https://www.facebook.com/littlelemon" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="lg" color="white" className = "footer-links-c:hover"/>
          </a>
          <a href="https://www.instagram.com/littlelemon" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="lg" color="white" className = "footer-links-c:hover"/>
          </a>
          <a href="https://www.twitter.com/littlelemon" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="lg" color="white" className = "footer-links-c:hover"/>
          </a>
          </ul>
        </li>
        <div className="footer-copy">Copyright © Little Lemon</div>
      </menu>
    </footer>
  );
}
