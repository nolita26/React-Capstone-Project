import HeroImage from "../../assets/food4.jpeg";
import Special from "./cards/Special";
import GreekSalad from '../../assets/greek-salad.jpeg';
import Bruschetta from '../../assets/brushetta.jpeg';
import LemonDessert from '../../assets/lemon-dessert.jpeg';
import { Carousel } from 'react-responsive-carousel';

export default function Order() {
  return (
    <>
      <header className="reserve-table">
      <img className="header-reserve" src={HeroImage} alt="Little Lemon Ingredients"></img>
      <div className="reserve-header-text">
        <h1>Order Online</h1>
      </div>
    </header>
    <section className="specials">
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
    </>
  );
}
