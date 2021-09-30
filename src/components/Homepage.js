import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCheckSquare,
	faCoffee,
	faTimes,
	faBars,
} from "@fortawesome/fontawesome-free-solid";
import BrandLogo from "../images/logo.png";

export const Homepage = () => {
	const hideMenu = () => {
		let navMenu = document.getElementById("navMenu");
		navMenu.style.right = "-200px";
	};
	const showMenu = () => {
		let navMenu = document.getElementById("navMenu");
		navMenu.style.right = "0";
	};
	return (
		<>
			<div className="header">
				<nav>
					<img className="brand-logo" src={BrandLogo} alt="brand logo" />
					<div className="nav-menu" id="navMenu">
						<FontAwesomeIcon
							onClick={() => hideMenu()}
							className="closeIcon menuIcon"
							icon={faTimes}
						/>
						<ul>
							<li className="nav-link">Home</li>
							<li className="nav-link">Course</li>
							<li className="nav-link">Blog</li>
							<li className="nav-link">About</li>
							<li className="nav-link">Contact</li>
						</ul>
					</div>
					<FontAwesomeIcon
						className="barIcon menuIcon"
						icon={faBars}
						onClick={() => showMenu()}
					/>
				</nav>
				<div className="homepage-title">
					<h1>World's Biggest university</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
						laudantium, veritatis beatae hic, neque, quo ut libero consequuntur
						culpa magni itaque.
						<br />
						commodi fuga tempora aspernatur ipsum quis earum quo eaque eum,
						quidem excepturi.
					</p>
					<button className="hero-btn">Visit Us To Know More</button>
				</div>
			</div>
		</>
	);
};
