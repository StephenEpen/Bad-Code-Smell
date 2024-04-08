import { useRouteError } from "react-router-dom";
import ParticleBackground from "../Components/Particles/Particle";

const ErrorPage = () => {
    const error = useRouteError();

    const getRandomNumber = () => {
        return Math.floor(Math.random() * 8) + 1;
    };
    
    return(
        <>
        <ParticleBackground/>
            <div className="text-white flex justify-center min-h-screen items-center flex-col">
                <img src={`/images/error${getRandomNumber()}.jpg`} alt="error" className="w-80 h-96 rounded-xl mb-5 object-contain"/>
                <h1 className="text-4xl font-bold">Oops!</h1>
                <p className="my-3 text-xl">Sorry, an unexpected error had occured</p>
                <p className="text-lg">
                    {error.statusText || error.message}
                </p>
            </div>
        </>
    )
}

export default ErrorPage;