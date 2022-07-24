import './App.css';
import Pelicula from './components/pelicula';
import Pagewrapper from './components/Pagewrapper';
import peliculasJson from './Json/movies.json'
import Pagination from './components/Pagination';

function App() {

	let peliculas = peliculasJson;



  return (
	  <Pagewrapper>

			{peliculas.map(pelicula => 
				<Pelicula name={pelicula.name} age={pelicula.age} punctuation={pelicula.punctuation} director={pelicula.director} director2={pelicula.director2} star1={pelicula.star1} star2={pelicula.star2} star3={pelicula.star3} date={pelicula.date} runtime={pelicula.runtime}protection={pelicula.protection} image={pelicula.image}>
					{pelicula.description}
		  	</Pelicula>
			)}

			<Pagination actual={2} total={4} onChange={(actual) => { 
				alert(actual)
			}} />

		  
	  </Pagewrapper> 
  );
}

export default App;
