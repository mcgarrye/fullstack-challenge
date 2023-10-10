import { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import Selection from "./Selection";

function Order() {
    const params = useParams();

    const [order, setOrder] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [totalPrice, setTotalPrice] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:3001/orders/${params.id}`)
            .then((response) => response.json())
            .then(setOrder)
            .then(() => setLoading(false))
            .catch(setError);
    }, [params.id]);

    useEffect(() => {
        if (order?.selections) {
            const total = order.selections?.reduce(
                (total, currentItem) => (total = total + (currentItem.quantity * currentItem.pizza.price)),
                0,
              );
            setTotalPrice(total)
        }
    }, [order]);

    if (loading) return <h1>Loading...</h1>;
    if (error)
        return <pre>{JSON.stringify(error)}</pre>;
    if (!order) return null;
    return (
        <div>
            {order.id && 
                <>
                    <h1>{order.name}, your order with Pizza Parlor is confirmed!</h1>
                    <Link to="/">Home</Link>
                    <h2>Order Summary: </h2>
                    <p>Total Price: ${totalPrice}</p>
                    <ul>
                        {order.selections?.map((selection) => (
                            <li key={selection.id}>
                                <Selection {...selection}/>
                            </li> 
                        ))}
                    </ul>
                </>
            }
            {!order.id &&
                <h1>No order found</h1>
            }
        </div>
    );
}

export default Order;