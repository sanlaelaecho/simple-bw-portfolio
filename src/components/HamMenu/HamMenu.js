import styles from "./HamMenu.module.scss";
import { Link } from 'react-router-dom';


export default function HamMenu() {

  return (
    <ul className={styles.menuContainer}>
      <li>
          <ul className={styles.menuOptions}>
            <li>
              <Link to="/aboutme" className={styles.about}>
                about me
              </Link>
            </li>
            <li>
              <Link to="/resume" className={styles.about}>
                resume
              </Link>
            </li>
            <li>
              <Link to="/projects" className={styles.about}>
                projects
              </Link>
            </li>
            <li>
              <Link to="/contactme" className={styles.about}>
                contact me
              </Link>
            </li>
          </ul>
      </li>
    </ul>
  );
}