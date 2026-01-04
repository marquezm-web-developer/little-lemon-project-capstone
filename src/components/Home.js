//src/components/home.js
//This is the home component for little lemon react app
import HomeHeroSection from "./HomeHeroSection";

function Home(){
    return (
        <main>
          <section className='HomeHeroSection'>
            <HomeHeroSection/>
          </section>
          <section className='HighLightsSection'></section>
          <section className='TestimonialsSection'></section>
          <section className='AboutSection'></section>
        </main>
    )
}

export default Home;