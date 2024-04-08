/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import ExplanationText from "../../Elements/Content/ExplanationText";
import TitleMain from "../../Elements/Content/TitleMain";

const Header = (props) => {
    const{id, title, explanation} = props;
    return(
        <div className="pt-5">
            <TitleMain tms={title} />
            <div className="flex-col justify-center text-sm text-justify mt-2 md:text-lg">
            <div id={id}>
                {explanation}
            </div>
        </div>
        </div>      
    );
};

export default Header;