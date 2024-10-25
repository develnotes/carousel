import Carousel from "../lib/main";
import { examples } from "./code/examples";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
import { useEffect, useState } from "react";
import { IconBrandGithubFilled } from "@tabler/icons-react";


function App() {

	return (
		<div className="app">

			<h1>Carousel Demo App</h1>

			<Section />

			<Section />

			<Section />

			<footer className="footer">
				<div className="footer__copy-and-name">&copy; 2024 - Carousel Demo App</div>
				<div className="footer__separator"></div>
				<div className="footer__github-link"><a href="https://github.com/develnotes/carousel-demo-app"><IconBrandGithubFilled size={18} /></a></div>
			</footer>
		</div>
	);
}

export default App;



const Section = () => {

	type Card = {
		id: string,
		title: string,
		author: string,
		image: string,
	}

	const cards: Card[] = [
		{
			id: "0",
			title: "First post",
			author: "J. Doe",
			image: "https://images.unsplash.com/photo-1728327511669-887b0d0cf351?q=80&w=1452&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
		},
		{
			id: "1",
			title: "Second post",
			author: "J. Doe",
			image: "https://images.unsplash.com/photo-1728588266991-90ecfa62a372?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
		},
		{
			id: "2",
			title: "Third post",
			author: "J. Doe",
			image: "https://images.unsplash.com/photo-1729548981784-ba5cae844e9c?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
		}
	];

	const Card = ({ props }: { props: Card }) => {
		return (
			<div className="card">
				<h2 className="card__title">{props.title}</h2>
				<h3 className="card__author">{props.author}</h3>
				<div className="card__image">
					<img src={props.image} alt="Card image" />
				</div>
			</div>
		);
	};

	const renderCard = (item: Card) => <Card props={item} />;

	const [showCode, setShowCode] = useState<boolean>(false);

	useEffect(() => {
		hljs.highlightAll();

		return () => {
			document.querySelectorAll("code").forEach(el => {
				el.removeAttribute("data-highlighted");
			})
		}
	}, [showCode]);

	return (
		<section>
			<div className="wrapper">
				<div className="cards">
					<Carousel list={cards} renderComponent={renderCard} />
				</div>
				{
					showCode &&
					<div className="code">
						<pre><code className="language-javascript">{examples[0]}</code></pre>
					</div>
				}
			</div>

			<button className="button" onClick={() => {
				if (showCode) {
					setShowCode(false);
				} else {
					setShowCode(true);
				}
			}}>{showCode ? "Hide code" : "Show code"}</button>
		</section>
	);
}