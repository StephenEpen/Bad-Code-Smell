/* eslint-disable react/prop-types */
const ExplanationImage = (props) => {
    const { image = "" } = props;
    return (
        <a>
            <img src={image} alt="Code Image" className="md:h-64"></img>
        </a>
    );
}

export default ExplanationImage;