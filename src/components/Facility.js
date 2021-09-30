import React from "react";
import facilityA from "../images/library.png";
import facilityB from "../images/basketball.png";
import facilityC from "../images/cafeteria.png";

function Facility() {
	return (
		<div className="facility">
			<h1>Our Global Campus</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
				suscipit aperiam, amet quasi quidem nulla.
			</p>
			<div className="row">
				<div className="facility-col">
					<img src={facilityA} alt="facility A" />
					<h3>World Class Library</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
						veritatis quis molestias cum rem quasi aliquam repellat quaerat
						natus maiores?
					</p>
				</div>
				<div className="facility-col">
					<img src={facilityB} alt="facility A" />
					<h3>Largest Play Ground</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
						veritatis quis molestias cum rem quasi aliquam repellat quaerat
						natus maiores?
					</p>
				</div>
				<div className="facility-col">
					<img src={facilityC} alt="facility A" />
					<h3>Testy and Healthy Food</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
						veritatis quis molestias cum rem quasi aliquam repellat quaerat
						natus maiores?
					</p>
				</div>
			</div>
		</div>
	);
}

export default Facility;
