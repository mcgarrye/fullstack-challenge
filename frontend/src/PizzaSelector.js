import { useState } from "react";
import Pizza from "./Pizza";

function PizzaSelector({pizza, addHandler, updateHandler, removeHandler}) {
    const [checked, setChecked] = useState(false);
    const [quantity, setQuantity] = useState(0);

    function handleCheckbox() {
        if (!checked) {
            setChecked(true)
            setQuantity(1)
            addHandler(pizza, 1)
        }
        else {
            setChecked(false)
            setQuantity(0)
            removeHandler(pizza)
        }
    }

    function handleNumber(value) {
        console.log(value)
        setQuantity(value)
        updateHandler(pizza, value)
    }

    return (
        <>
            <Pizza key={pizza.id} {...pizza}/>
            <input type="checkbox" onClick={handleCheckbox}/>
            <input type="number" disabled={!checked} value={quantity} min={1} onChange={(e) => handleNumber(e.target.value)}/>
        </>
    );
}

export default PizzaSelector;