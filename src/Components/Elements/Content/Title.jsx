/* eslint-disable react/prop-types */
const Title = (props) => {
    return (
        <div className="flex justify pt-7 pb-5 text-xl md:text-3xl md:mb-3 font-semibold" id={props.id}>
            {props.ts}
        </div>
    );
};

export default Title