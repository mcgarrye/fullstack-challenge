
function Pizza({name, price, ingredients}) {
    const styles = {
        border: '1px solid rgba(0, 0, 0, 0.05)', 
   };

    return (
        <div style={styles}>
            <p><b>{name}</b> Price: {price} <br />Ingredients</p>
            <ul>
                {ingredients.map((ingredient) => (
                    <li key={ingredient.id}>{ingredient.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Pizza;