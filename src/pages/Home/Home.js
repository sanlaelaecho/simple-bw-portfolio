import "../../scss/styles.scss";
import styles from '../Home/Home.module.scss';
import { useState } from 'react';
import NavBar from "../../components/NavBar/NavBar";

export default function Home() {
	return(
		<div className={styles.home}>
			<header>
				<NavBar />
			</header>
			<center>
			<h1>i'm San Lae Lae Cho</h1>			
			</center>
		</div>
	) 
}
