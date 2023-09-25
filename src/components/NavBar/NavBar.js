import styles from './NavBar.module.scss';
import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

export default function NavBar() {
	const [isHoveredLogo, setIsHoveredLogo] = useState(false);
	const [isHovered, setIsHovered] = useState(false)

	return (
	<nav className={styles.navBar}>
		<div
			onMouseEnter={() => setIsHoveredLogo(true)}
			onMouseLeave={() => setIsHoveredLogo(false)}
		>
			<Link to="/home" className={styles.logo}>
				<img
					src={
						isHoveredLogo
							? '&#9633'
							: '&#9632'
						}
						alt="logo"
				/>
			</Link>
		</div>
		<div className={styles.textsContainer}>
			<div
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			>
			about
			</div>
			<div
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			>
			resume
			</div>
			<div
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			>
			projects
			</div>
			<div
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			>
			contact
			</div>
		</div>
		

	</nav>;
	)
};


/* const NavBar = (props) => {
	return (
		<nav className={styles.navBar}>
			{props.routes.map(({ key, path }) => (
				<Link key={key} to={path}>
					{key}
				</Link>
			))}
		</nav>
	);
};
 */