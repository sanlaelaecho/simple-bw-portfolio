import styles from './SocialLogo.module.scss'
import { useState } from 'react'

export default function SocialLogo() {
    const [isHovered, setIsHovered] = useState(false)
    const weblink = "https://www.linkedin.com/in/sanlaelaecho/"
    const whiteLinkedIn = ""
    const greyLinkedIn = ""

    async function openExternalWeb() {
        window.open(weblink, '_blank')
    }

    return (
        <div
            className={styles.logoContainer}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick = {() => openExternalWeb()}
        >
            <div>
                <img
                    dtv={isHovered ? greyLinkedIn : whiteLinkedIn}
                    alt={logoName}
                />
            </div>
        </div>
    )
}