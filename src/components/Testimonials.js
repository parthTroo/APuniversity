import React from "react";
import User1 from "../images/user1.jpg";
import User2 from "../images/user2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/fontawesome-free-solid";

function Testimonials() {
	return (
		<div className="testimonials">
			<h1>What Our Student Says</h1>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
			<div className="row">
				<div className="testimonial-col">
					<img src={User1} alt="user 1" />
					<div>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ex
							inventore incidunt in sit omnis ratione vel obcaecati esse
							excepturi.
						</p>
						<div className="userRatings">
							<h3>Miky Bredan</h3>
							<FontAwesomeIcon className="star" icon={faStar} />
							<FontAwesomeIcon className="star" icon={faStar} />
							<FontAwesomeIcon className="star" icon={faStar} />
							<FontAwesomeIcon className="star" icon={faStar} />
							<FontAwesomeIcon className="star" icon={faStar} />
						</div>
					</div>
				</div>
				<div className="testimonial-col">
					<img src={User2} alt="user 2" />
					<div>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ex
							inventore incidunt in sit omnis ratione vel obcaecati esse
							excepturi.
						</p>
						<div className="userRatings">
							<h3>Presto Anyal</h3>
							<FontAwesomeIcon className="star" icon={faStar} />
							<FontAwesomeIcon className="star" icon={faStar} />
							<FontAwesomeIcon className="star" icon={faStar} />
							<FontAwesomeIcon className="star" icon={faStar} />
							<FontAwesomeIcon className="star" icon={faStarHalf} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Testimonials;
