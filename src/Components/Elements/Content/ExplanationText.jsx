/* eslint-disable react/prop-types */
const ExplanationText = (props) => {
    return (
        <div className="flex-col justify-center text-sm text-justify mt-2 md:text-lg">
            <div>
                {props.ets}
            </div>
        </div>
    );
};

export default ExplanationText;