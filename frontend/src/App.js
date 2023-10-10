import "./App.css";
import { Link } from "react-router-dom";

function App() {
    return <div>
      <h1>Welcome to the Pizza Parlor!</h1>
      <h2>Have a look at our delicious pizzas</h2>
      <Link to="/pizzas">Pizzas</Link>
    </div>;
}

export default App;