import './Hero.css';
import restaurant_img from './icons_assets/restauranfood.jpg';
import greek_salad from './icons_assets/greek salad.jpg';
import bruchetta from './icons_assets/bruchetta.svg';
import lemon_desert from './icons_assets/lemon dessert.jpg';


export function Main(){
    return(
        <main>
            <section className="Hero">
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>We are a family owned Mediterranean restaurant focused on traditional recipes served with a modern twist.</p>
            <img src={restaurant_img} />
            <button>Reserve a table</button>
            </section>
            <section className='Specials'>
            <p>This Weeks Specials!</p>
                <button>Order Online</button>

            </section> 
            <section className='highlights'>
            <article class="feature">
                <img class="feature-img" src={greek_salad} alt="Feature"/>
                <p className='Dish-name'>Greek salad <strong >$12.99</strong></p>
                <p>The famous greek salad of crispy lettuse, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.        </p>
                <p className='Delivery'>Order a delivery 4%</p>
            </article>

            {/* <!-- Feature article #2 begins --> */}
            <article class="feature">
                <img class="feature-img" src={bruchetta} alt="Feature" />
                <p className='Dish-name'>Bruchetta <strong className='Mid'>$5.99</strong></p>
                <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                <p className='Delivery'>Order a delivery 4%</p>

            </article>
            {/* Feature article #3 begins */}
            <article class="feature">
                <img class="feature-img" src={lemon_desert} alt="Feature"/>
                <p className='Dish-name'>Lemon Dessert <strong>$5.00</strong></p>
                <p>The famous greek salad of crispy lettuse, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                <p className='Delivery'>Order a delivery 4%</p>
            </article>
            </section>
            <section className="Testimonials">
                <h2>Testimonials</h2>
            </section>
            <section className="About">
                <div className='First'></div>
                <div className='Second'></div>
            </section>
        </main>
    )
}

export default Main;