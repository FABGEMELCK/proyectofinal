import  '../src/Header.css'
import { Link } from 'react-router-dom'
// import { ReactPropTypes } from 'react'

// const Header = () => {
// 	return (
// 		<header>
// 			<h1>style = {headingStyle} >{title}</h1>
// 		</header>
// 	)
// }
// Header.defaultProps = {
// 	title: 'Fabian'
// }
// const headingStyle = {
// 	color:'red',
// 	backgroundColor:'black'
// }

const Header = () => {
	return (
		<div class="contenedor">
			<header class="header">
				<div class="title">
					<h1>Pan Bastardo <span>de nuestro horno a tu mesa !</span></h1>
				</div>
				<nav class="menu">
					<Link to="/inicio">Inicio</Link>
					<Link to="/acerca">Acerca</Link>
					<Link to="/contacto">Contacto</Link>
					
				</nav>
			</header>

			<article class="articulo destacado">
				<div class="contenedor-texto">
					<div>
						<h2 class="titulo"><a href="#">Pan de Campo especial precio = 180 UYU</a></h2>
						<p class="fecha">
							Abrimos nuestras puertas de martes a sábados de  <time>07:00am a 12:00pm </time>
						</p>
					</div>
					<p class="descripción">
						Pan tradicional hogaza dorada.
					</p>
					<Link to="/checkout" class="btn-link">Solicitar</Link>
				</div>

				<div class="contenedor-thumbnail">
					<a href="#">
						<img src="panDeCampo.jpg" alt=""></img>
					</a>
				</div>
			</article>

			<main class="contenido">
				<article class="articulo">
					<div class="contenedor-thumbnail">
						<a href="#"><img src="panBaguette.jpg" alt=""></img></a>
					</div>
					<div class="contenedor-texto">
						<div>
							<h2 class="titulo">
								<a href="#">Pan Baguette precio = 100UYU</a>
							</h2>
							<p class="fecha">
								Abrimos nuestras puertas de martes a sábados de  <time>07:00am a 12:00pm </time>
							</p>
						</div>
						<p class="descripción">
							El pan que hizo famoso a Paris es el pan urbano por excelencia.
						</p>
						<Link to="/checkout" class="btn-link">Solicitar</Link>
					</div>
				</article>

				<article class="articulo">
					<div class="contenedor-thumbnail">
						<a href="#"><img src="panRústico.jpg" alt=""></img></a>
					</div>
					<div class="contenedor-texto">
						<div>
							<h2 class="titulo">
								<a href="htmlcheckOut.html">Pan barra rústica precio = 140UYU</a>
							</h2>
							<p class="fecha">
								Abrimos nuestras puertas de martes a sábados de  <time>07:00am a 12:00pm </time>
							</p>
						</div>
						<p class="descripción">
							Masa sin grasa de larga fermentación producto final con aroma dulce y frutos secos.
						</p>
						<Link to="/checkout" class="btn-link">Solicitar</Link>
					</div>
				</article>

				<article class="articulo">
					<div class="contenedor-thumbnail">
						<a href="#"><img src="panFoccacia.jpg" alt=""></img></a>
					</div>
					<div class="contenedor-texto">
						<div>
							<h2 class="titulo">
								<a href="#">Pan Focaccia precio = 180UYU</a>
							</h2>
							<p class="fecha">
								Abrimos nuestras puertas de martes a sábados de  <time>07:00am a 12:00pm </time>
							</p>
						</div>
						<p class="descripción">
							Correa dorada de masa rústica y cobertura creativas.
						</p>
						<Link to="/checkout" class="btn-link">Solicitar</Link>
					</div>
				</article>
			</main>

			<aside class="sidebar">
				<div class="acerca-de">
					<img src="panPresentración.jpg" alt="" class="img-perfil"></img>

					<div class="bio">
						<p class="titulo">Bienvenido!</p>
						<p>
							Pan Bastardo nacé apartir de la unión de dos amigos con un sueño en común.
							Comenzarón en la panadería del padre de uno de ellos con la venta de hamburguesas caseras.
							Un día llegó la independencia,lograrón tener su propio local.
							En las mañanas se dedican a las ventas de Pan Bastardo y en las noches a la vente de hamburguesas denominadas Horreo Burguers, en honor a la primera panaderia,la de su padre.
						</p>
					</div>
				</div>
				
				<footer>
					<p id="cname">Pan Bastardo Horreo Burger 2021</p>
				</footer>
			</aside>

		</div>
	)
}

export default Header
