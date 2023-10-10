
function Selection({pizza, quantity}) {
    return (
        <section>
            <p>Type: {pizza.name}; Price: ${pizza.price}; Quantity: {quantity}</p>
        </section>
    );
}

export default Selection;