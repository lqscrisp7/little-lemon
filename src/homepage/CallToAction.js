import { Link } from "react-router-dom"

function CallToAction() {
    return (
        <div className="call-to-action">
            <div className="description">
                <h1>Little Lemon</h1>
                <h5>Chicago</h5>
                <p>We are a family owned
                    Mediterrenean restaurant,
                    focused on traditional
                    recipes served with a modern
                    twist.</p>
                <Link to="/booking"><button>Reserve a Table</button></Link>
            </div>
            <img src="restauranfood.jpg" height={325} width={325} style={{ objectFit: 'fill' }} />
        </div>
    )
}

export default CallToAction