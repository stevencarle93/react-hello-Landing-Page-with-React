import React, { useState } from "react";
import Bottom from "./bottom.jsx";
import Cards from "./cards.jsx";
import Carousel from "./carousel.jsx";
import Navbar from "./navbar.jsx";

//create your first component
const Home = () => {
	const [getCardsContent, setCardsContent] = useState([
		{img:"https://picsum.photos/300/300", title:"Title 1", text:"Some quick example text to build on the card title and make up the bulk of the card's content."},
		{img:"https://picsum.photos/300/300", title:"Title 2", text:"Some quick example text to build on the card title and make up the bulk of the card's content."},
		{img:"https://picsum.photos/300/300", title:"Title 3", text:"Some quick example text to build on the card title and make up the bulk of the card's content."},
		{img:"https://picsum.photos/300/300", title:"Title 4", text:"Some quick example text to build on the card title and make up the bulk of the card's content."}
	])
	return (
		<div className="container-fluid">

			<Navbar />

			<div className="container-fluid">

				<div className="container">
					<div className="row">
						<div className="col">
							<Carousel />
						</div>
					</div>
				</div>

				<div className="container">
					<div className="row">
						{getCardsContent.map((content) => (
							<div className="col">
								<Cards img={content.img} title={content.title} text={content.text} />
							</div>
						))}	
					</div>
				</div>
			</div>

			<Bottom />
			
		</div>
	);
};

export default Home;
