import Hero from "../components/largeComponents/Hero"
import PetsForHomePage from "../components/PetsForHomePage"
import Card from "../components/Card"
import ProductsForHomePage from "../components/ProductsForHomePage"
import PetSellers from "../components/PetSellers"
import Adoption from "../components/Adoption"
import SliderInHomePage from "../components/SliderInHomePage"
import Time from "../components/Time"

function Home() {
  return (
    <>
      <Hero />
      <section className="padding">
        <PetsForHomePage />
        <Card />
        <ProductsForHomePage />
        <PetSellers />
        <Adoption />
        <SliderInHomePage />
        <Time />
      </section>
    </>
  )
}

export default Home