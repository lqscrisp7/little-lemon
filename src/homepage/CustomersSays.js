import { IoMdStar } from "react-icons/io";

function CustomersSays() {
    const rating = [
        {
            rating: 4.5,
            img: 'customer1.jpeg',
            name: 'Benny',
            review: 'The food here is absolutely delicious! Every dish we tried was bursting with flavor and cooked to perfection. Highly recommend the Greek Salad and Bruchetta!'
        },
        {
            rating: 4.1,
            img: 'customer2.jpg',
            name: 'Alice Soo',
            review: 'If you’re a foodie like me, you’ll love this place! The menu has a fantastic selection of dishes, and we loved everything we tried. We only had good comments about the food. I can’t wait to come back again!'
        },
        {
            rating: 4.9,
            img: 'customer3.jpg',
            name: 'Jungkook',
            review: 'The menu offers a wide variety of options, and everything we tried was delicious. I especially loved the creative twists on classic dishes.'
        },
        {
            rating: 3.8,
            img: 'customer4.jpeg',
            name: 'John Doe ',
            review: 'The service at Little Lemon is top-notch! The staff is friendly, attentive, and goes above and beyond to ensure a memorable dining experience. Kudos to the entire team!'
        }
    ]

    return (
        <div className="customers-says">
            <h2>Customers Says</h2>
            <div className="rating-card-container">
                {rating.map(x =>
                    <article className="rating-card">
                        <div className="rating-row">
                            <IoMdStar size={20} fill="#F4CE14" /> {x.rating}
                        </div>
                        <div className="rating-row">
                            <img src={x.img} alt={x.name} width={46} height={46} /> {x.name}
                        </div>
                        <div className="review-text">{x.review}</div>
                    </article>
                )}
            </div>
        </div>
    )
}

export default CustomersSays