import { Link } from "react-router-dom"
import { RiMotorbikeFill } from "react-icons/ri";

function Specials() {
    const specials = [
        {
            name: 'Greek Salad',
            price: 12.99,
            description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
            img: 'greek-salad.jpg'
        },
        {
            name: 'Bruchetta',
            price: 5.99,
            description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
            img: 'bruchetta.png'
        },
        {
            name: 'Lemon Dessert',
            price: 5.00,
            description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
            img: 'lemon-dessert.jpg'
        },
    ]
    return (
        <div className="specials">
            <div className="heading">
                <h2>Specials</h2>
                <Link to="/menu"><button>Online Menu</button></Link>
            </div>
            <div className="dish-container">
                {specials.map(x =>
                    <article className="dish-card">
                        <img src={x.img} alt={x.name} width={265} height={185} style={{ objectFit: 'fill', borderRadius: '10px 10px 0px 0px' }} />
                        <div className="dish-detail">
                            <div className="dish-detail-top">
                                <div className="name-price">
                                    <div className="name">{x.name}</div>
                                    <div className="price">$ {x.price}</div>
                                </div>
                                <div className="dish-description">{x.description}</div>
                            </div>
                            <div className="order-row">
                                <div className="order">Order a delivery</div>
                                <RiMotorbikeFill size={18} fill='black' />
                            </div>
                        </div>
                    </article>)}
            </div>
        </div>
    )
}

export default Specials