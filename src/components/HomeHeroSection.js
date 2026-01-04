import HomeHeroSectionBruschetas from '../assets/bruschetas-image-HomeHeroSection.jpg'
function HomeHeroSection (){
    return (
        <>
            <div>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Restaurant specializing in Mediterranean cuisine.
                Our menu is characterized by its flexibility, variety
                of ingredients, and emphasis on fresh fruits, vegetables,
                olive oil, and a variety of seafood.</p>
                <button>Reserve a Table</button>
            </div>
            <div>
                <img src={HomeHeroSectionBruschetas} alt="Different Types of Bruscheta"></img>
            </div>
        </>
    );
}

export default HomeHeroSection;