import HeroImage from "../../assets/food4.jpeg";

export default function About() {
  return (
    <>
      <header className="reserve-table">
        <img className="header-reserve" src={HeroImage} alt="Little Lemon Ingredients"></img>
        <div className="reserve-header-text">
          <h1>About us</h1>
        </div>
      </header>
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
    </>
  );
}
