import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const ExplanationExample = (props) => {
    return (
        <div className="flex justify text-sm md:text-lg mt-5">
            Contoh code {props.title}
            <Link to="/" className="ml-2 underline text-blue-200 hover:text-blue-500">(source)</Link>
        </div>
    );
};

export default ExplanationExample;