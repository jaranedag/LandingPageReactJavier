import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx"

//create your first component
const Home = () => {
	const datos = [
		{
			titulo: "Perro",
			descripcion: "Canino",
			img: "https://t1.ea.ltmcdn.com/es/posts/9/6/1/como_piensan_los_perros_7169_600.jpg",
			color: "danger",
		},
		{
			titulo: "Gato",
			descripcion: "Felino",
			img: "https://images.ecestaticos.com/FVdcvD11qPRi-JWDH3USTiXDmeQ=/0x0:2120x1414/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F47b%2F328%2F963%2F47b3289639713b8e80c8d682d219fba7.jpg",
			color: "info",
		},
		{
			titulo: "Hamster",
			descripcion: "Roedor",
			img: "https://t1.ea.ltmcdn.com/es/razas/1/0/5/hamster-dorado_501_0_600.jpg",
			color: "info",
		},
		
	]
	return (
		<div className="container-fluid">
			<Navbar/>
			<div className="container my-5">
				<Jumbotron/>

				<div className="d-flex justify-content-center my-5">

                 {datos.map((objeto,posicion)=>{
					return <Card titulo={objeto.titulo} 
					descripcion={objeto.descripcion}
					img={objeto.img}
					color={objeto.color}
					/>

				 })
				 }
				</div>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;
