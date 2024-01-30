import {Link} from 'react-router-dom';
import Special from "../layouts/cards/Special";
import { Carousel } from 'react-responsive-carousel';
import GreekSalad from '../../assets/greek-salad.jpeg';
import Bruschetta from '../../assets/brushetta.jpeg';
import LemonDessert from '../../assets/lemon-dessert.jpeg';
import Testimonial from './cards/Testimonial';
export default function Home() {
  return (
    <>
    <header>
        <article className="call-to-action">
            <section className="hero-text">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p className="subsection">We're a family owned Mediterranean restaurant, located on  Maldove Street in Chicago, Illionis. We focus on traditional recipes served with a modern twist.</p><br></br>
                <Link className="action-button" to="/reservations">Reserve a table</Link>
            </section>
            <section className="hero-image">
                <img src={require('../../assets/food1.png')} alt="Little Lemon restaurant cuisine"></img>
            </section>
        </article>
    </header>

    <main>
      <section className="specials">
            <article className="specials-topbar">
                <h1>Special Offers</h1>
            </article>
            <section className="specials-cards">
                <Special image={GreekSalad} name="Greek Salad" price="$15.99" description="Refreshing salad, tomato, lettuce, feta cheese  olives."/>
                <Special image={Bruschetta}name="Bruschetta" price="$17.99" description="Toasted bread, topped tomato, prosciutto cheese."/>
                <Special image={LemonDessert} name="Lemon Dessert" price="$10.99" description="Fresh baked lemon bread coated in salt and sugar."/>
            </section>
            <section className="specials-carousel">
            <Carousel infiniteLoop={true} autoPlay={true} Interval={5000} showStatus={false}>
                <Special image={GreekSalad} name="Greek Salad" price="$15.99" description="Feta Cheese, tomato, lettuce"/>
                <Special image={Bruschetta}name="Bruschetta" price="$17.99" description="Bread, mango, green onions"/>
                <Special image={LemonDessert} name="Lemon Dessert" price="$10.99" description="Lemon bread, vanilla Icing"/>
            </Carousel>
            </section>
        </section>

        <section className="testimonials">
            <article className="testimonials-topbar">
                <h1>Testimonials</h1>
            </article>
            <section className="testimonials-cards">
                <Testimonial name="Alan Walker" description="This is the best Mediterranean food that I've ever had!"/>
                <Testimonial name="Bryan Adams" description="This is the best Mediterranean food that I've ever had!"/>
                <Testimonial name="Christina Age" description="This is the best Mediterranean food that I've ever had!"/>
                <Testimonial name="Daniel Pinto" description="This is the best Mediterranean food that I've ever had!"/>
                <Testimonial name="Elvis Presley" description="This is the best Mediterranean food that I've ever had!"/>
                <Testimonial name="Fredy Mercury" description="This is the best Mediterranean food that I've ever had!"/>
                <Testimonial name="Gregory Dell" description="This is the best Mediterranean food that I've ever had!"/>
                <Testimonial name="Harry Potter" description="This is the best Mediterranean food that I've ever had!"/>
            </section>
            <section className="testimonials-carousel">
            <Carousel infiniteLoop={true} autoPlay={true} Interval={5000} showStatus={false}>
                <Testimonial name="Allan Walker" description="This is the best Mediterranean food that I've ever had!"/>
                <Testimonial name="Bryan Adama" description="This is the best Mediterranean food that I've ever had!"/>
                <Testimonial name="Christina Age" description="This is the best Mediterranean food that I've ever had!"/>
                <Testimonial name="Daniel Pinto" description="This is the best Mediterranean food that I've ever had!"/>
                <Testimonial name="Elvis Presley" description="This is the best Mediterranean food that I've ever had!"/>
                <Testimonial name="Fredy Mercury" description="This is the best Mediterranean food that I've ever had!"/>
                <Testimonial name="Gregory Dell" description="This is the best Mediterranean food that I've ever had!"/>
                <Testimonial name="Harry Potter" description="This is the best Mediterranean food that I've ever had!"/>
            </Carousel>
            </section>
        </section>
        
        <article className="about-us">
            <section className="hero-text">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p className="about-subtext">Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario. Despite the city's diversity, the two brothers recognized the lack of Mediterranean cuisine in Chicago, and were inspired to bring the flavors of their hometown in Italy to the people of Chicago. The two brothers continue to oversee the Little Lemon restaurant, nearly thirty years later.</p>
            </section>
            <section className="double-image">
                <img className="about-1" src={require('../../assets/food3.jpeg')} alt="Item 1"></img>
                <img className="about-2" src={require('../../assets/food2.jpeg')} alt="Item 2"></img>
            </section>
        </article>
      </main>
    </>
  );
}
