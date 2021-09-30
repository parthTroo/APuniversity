import React from "react";
import campusA from "../images/london.jpg";
import campusB from "../images/newyork.png";
import campusC from "../images/washington.png";

function Campus() {
	return (
		<div className="campus">
			<h1>Our Global Campus</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
				suscipit aperiam, amet quasi quidem nulla.
			</p>
			<div className="row">
				<div className="campus-col">
					<img src={campusA} alt="campus A" />
					<div className="layer">
						<h3>LONDON</h3>
					</div>
				</div>
				<div className="campus-col">
					<img src={campusB} alt="campus B" />
					<div className="layer">
						<h3>NEWYORK</h3>
					</div>
				</div>
				<div className="campus-col">
					<img src={campusC} alt="campus C" />
					<div className="layer">
						<h3> WASHINGTON</h3>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Campus;
