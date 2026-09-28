import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header storeName="ComponentCorner Games" />

      <Hero
        title="Level Up Your Game Library"
        subtitle="Discover top-rated games at prices you'll love."
        ctaText="Shop Now"
        image="https://placehold.co/1200x400/1a1a2e/1a1a2e"
      />

      <div className="product-grid">
        <ProductCard
          name="Elden Ring"
          price={59.99}
          image="https://placehold.co/600x400?text=Elden+Ring"
          description="An open-world action RPG set in the Lands Between."
        />
        <ProductCard
          name="FIFA 26"
          price={69.99}
          image="https://placehold.co/600x400?text=FIFA+26"
          description="The latest football simulation with updated teams, players, and game modes."
        />
        <ProductCard
          name="Grand Theft Auto V"
          price={29.99}
          image="https://placehold.co/600x400?text=GTA+V"
          description="An open-world crime adventure across the streets of Los Santos."
        />
        <ProductCard
          name="Football Manager 26"
          price={59.99}
          image="https://placehold.co/600x400?text=Football+Manager+26"
          description="Build your squad, set your tactics, and manage your club to glory."
        />
        <ProductCard
          name="Call of Duty: Black Ops Cold War"
          price={39.99}
          image="https://placehold.co/600x400?text=Black+Ops+Cold+War"
          description="A Cold War-era first-person shooter with a campaign, multiplayer, and Zombies."
        />
      </div>

      <Footer
        storeName="ComponentCorner Games"
        tagline="Your one-stop shop for the best video games."
        email="support@componentcorner.com"
        phone="(555) 123-4567"
        address="123 Pixel Street, Game City, USA"
        hours="Mon–Fri: 9am–6pm"
      />
    </div>
  );
}

export default App;