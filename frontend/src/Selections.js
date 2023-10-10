import { useReducer, useState } from "react";
import { useNavigate } from 'react-router-dom';
import PizzaSelector from "./PizzaSelector";

function selectionsReducer(prevState, action) {
    switch (action.type) {
        case 'ADD':
            return [...prevState, action.payload];
        case 'UPDATE':
            return [...prevState.filter( selection => selection.pizza_id !== action.payload.pizza_id), action.payload];
        case 'REMOVE':
            return [...prevState.filter( selection => selection.pizza_id !== action.payload.pizza_id)];
        case 'CLEAR':
            return prevState = [];
        default:
            break;
    }
};


function Selections({pizzas, setOrdering}) {
    const [errorMessage, setErrorMessage] = useState("");
    const [name, setName] = useState("");
    const [selections, dispatcher] = useReducer(selectionsReducer, []);
    const navigate = useNavigate();

    function addHandler(pizza, quantity) {
        dispatcher({ type: 'ADD', payload: { pizza_id: pizza.id, quantity: quantity }});
    };
    function updateHandler(pizza, quantity) {
        dispatcher({ type: 'UPDATE', payload: { pizza_id: pizza.id, quantity: quantity }});
    };
    function removeHandler(pizza) {
        dispatcher({ type: 'REMOVE', payload: { pizza_id: pizza.id} });
    };
    function clearHandler() {
        dispatcher({ type: 'CLEAR' });
    };

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
          let res = await fetch("http://localhost:3001/orders/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: name,
              selections: selections
            }),
          });
          let resJson = await res.json();
          if (res.status === 201) {
            setName("");
            clearHandler();
            navigate(`/order/${resJson.id}`)
        } else {
            setErrorMessage("An error has occured");
          }
        } catch (err) {
          console.log(err);
        }
      };

    console.log(pizzas)

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="message">{errorMessage ? <h1>{errorMessage}</h1> : null}</div>
                <button>Confirm Order</button>
                <button onClick={() => setOrdering(false)}>
                    Cancel Order
                </button>
                <br/>
                <label>Enter your name:
                    <input 
                        type="text" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                {pizzas.map((pizza) => (
                    <PizzaSelector
                        pizza={pizza}
                        addHandler={addHandler}
                        updateHandler={updateHandler}
                        removeHandler={removeHandler}
                    />
                ))}
            </form>
        </div>
    );
}

export default Selections;
