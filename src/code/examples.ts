

const example_1 = 
`type Card = {
	id: string,
	title: string,
	author: string,
	image: string,
}

const cards: Card[] = [
	{
		id: "0",
		title: "First card",
		author: "J. Doe",
		image: "https://images.unsplash.com/photo-1728327511669-887b0d0cf351?q=80&w=1452&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
	},
	{
		id: "1",
		title: "Second card",
		author: "J. Doe",
		image: "https://images.unsplash.com/photo-1728588266991-90ecfa62a372?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
	},
	{
		id: "2",
		title: "Third card",
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
				<img src={props.image} alt="card image" />
			</div>
		</div>
	);
};

const renderCard = (item: Card) => <Card props={item} />;

<Carousel list={cards} renderComponent={renderCard} />
`;

export const examples = [
	example_1,
];