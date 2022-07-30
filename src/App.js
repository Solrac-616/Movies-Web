import React, {useState, useEffect} from 'react';
import './App.css';
import Pelicula from './components/Pelicula/Pelicula';
import Pagewrapper from './components/PageWrapper1/Pagewrapper.js';
import peliculasJson from './Json/movies.json'
import Pagination from './components/Pagination/Pagination';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Pagesingle from './components/Pagesingle/Pagesingle';
import PageColLeft from './components/PageColLeft/PageColLeft';
import PageColRight from './components/PageColRight/PageColRight';
import Topbar from './components/Topbar/Topbar';
import SearhForm from './components/SearhForm/SearhForm';
import Ads from './components/Ads/Ads';
import FacebookSd from './components/FacebookSd/FacebookSd';
import Footer from './components/Footer/Footer';

function App() {
	
	const [paginaActual, setPaginaActual] = useState(1);
	let peliculas = peliculasJson;
	const pagePerPage = 4;

	peliculas = peliculas.slice(
		(paginaActual - 1) * pagePerPage,
		paginaActual *pagePerPage
	);

	const getPagesTotal = () => {
		let moviesTotal = peliculasJson.length;
		return Math.ceil(moviesTotal / pagePerPage);
	};

  return (
	  <Pagewrapper>
			<Header />

			<Hero />

			<Pagesingle>

				<PageColLeft>

					<Topbar />

					{peliculas.map(pelicula => 
						<Pelicula name={pelicula.name} age={pelicula.age} punctuation={pelicula.punctuation} director={pelicula.director} director2={pelicula.director2} star1={pelicula.star1} star2={pelicula.star2} star3={pelicula.star3} date={pelicula.date} runtime={pelicula.runtime}protection={pelicula.protection} image={pelicula.image}>
							{pelicula.description}
					</Pelicula>
					)}

					<Pagination actual={paginaActual} total={getPagesTotal()} onChange={(page) => { 
						setPaginaActual(page)
					}} />

				</PageColLeft>

				<PageColRight>

					<SearhForm />

					<Ads />

					<FacebookSd />

				</PageColRight>

				
			
			</Pagesingle>

			<Footer />

			

		  
	  </Pagewrapper> 
  );
}

export default App;
