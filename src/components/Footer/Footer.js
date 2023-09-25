import styles from './Footer.module.scss'
import SocialLogo from '../SocialLogo/SocialLogo'

export default function Footer() {

    return (
        <div
            className={styles.footerContainer}
        >
            <SocialLogo />
        </div>
    )
}