import { useState, useEffect } from "react";
import Pizza from "./Pizza";
import Selections from "./Selections";

function Pizzas() {
	const [pizzas, setPizzas] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	const [ordering, setOrdering] = useState(false);

	useEffect(() => {
		setLoading(true);
		fetch('http://localhost:3001/pizzas/', {mode: 'cors'})
			.then((response) => response.json())
			.then(setPizzas)
			.then(() => setLoading(false))
			.catch(setError);
	}, []);

	if (loading) return <h1>Loading...</h1>;
	if (error)
		return <pre>{JSON.stringify(error)}</pre>;
	if (!pizzas) return null;
	return (
		<div>
			<h1>Pizza time!</h1>	
			{!ordering && 
				<>
					<p>Would you like to start an order?</p>
					<button onClick={() => setOrdering(true)}>
						Begin Order
					</button>
					{pizzas.map((pizza) => (
						<Pizza key={pizza.id} {...pizza}/>
					))}
				</>
			}
			{ordering &&
				<>
					<Selections
						pizzas={pizzas}
						setOrdering={setOrdering}
					/>
				</>
			}
		</div>
	);
}

export default Pizzas;
