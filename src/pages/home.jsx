import HomeBody from "../Components/Fragments/Home/Body"
import Footers from "../Components/Fragments/Home/Footer"
import Navbar from "../Components/Navbar/Navbar"
import ParticleBackground from "../Components/Particles/Particle"

const HomePage = () => {
    return(
        <div className="min-h-screen">
            <Navbar/>
            <HomeBody/>
            <Footers/>
            <ParticleBackground/>
        </div>
    )
}


export default HomePage