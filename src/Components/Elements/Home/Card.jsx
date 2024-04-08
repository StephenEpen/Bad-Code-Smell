import { Link } from "react-router-dom"

const MAX_EXPLANATION_LENGTH_MOBILE = 155;
const MAX_EXPLANATION_LENGTH_DESKTOP = 205;

/* eslint-disable react/prop-types */
const CardContent = (props) => {
    const { image, title, explanation, linked } = props

    const shortenExplanation = (explanation) => {
        const maxExplanationLength = window.innerWidth <= 768 ? MAX_EXPLANATION_LENGTH_MOBILE : MAX_EXPLANATION_LENGTH_DESKTOP;

        if (explanation.length > maxExplanationLength) {
            return explanation.substring(0, maxExplanationLength) + "...";
        }
        return explanation;
    };

    return(
        <div className="w-full max-w-md h-48 md:h-64 bg-[#212121] bg-opacity-90 rounded-lg shadow mx-5 my-5 flex flex-row">
            <div className="flex items-center mx-2">
                <img src={image} alt="content" className="p-2 h-48 w-28 md:h-64 md:w-48 object-contain"/>
            </div>
            <div className="w-full"> 
                <h5 className=" text-lg md:text-2xl font-semibold tracking-tight text-white pt-5">
                    {title}
                </h5>
                <p className="text-xs md:text-base text-white pt-2 pr-5 text-justify">
                {shortenExplanation(explanation)}
                </p>
                <Link to={linked} className="text-xs md:text-sm text-blue-200 hover:text-blue-500 flex justify-end pt-4 md:pt-3 pr-5 underline">Read More</Link>
            </div>
        </div>
    )
}

export default CardContent