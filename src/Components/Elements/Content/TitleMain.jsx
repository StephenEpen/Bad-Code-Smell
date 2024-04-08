/* eslint-disable react/prop-types */
const TitleMain = (props) => {
    return (
        <div className="flex justify bold py-3 text-2xl md:text-4xl font-bold">
            {props.tms}
        </div>
    );
};

export default TitleMain;