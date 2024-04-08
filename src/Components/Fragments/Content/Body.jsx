/* eslint-disable react/prop-types */
import ExplanationText from "../../Elements/Content/ExplanationText";
import ExplanationImage from "../../Elements/Content/ExplanationImage";
import Title from "../../Elements/Content/Title";
import MyCoolCodeBlock from "../../Elements/Content/CodeHolder";
import ExplanationExample from "../../Elements/Content/ExplanationExample";

const Body = (props) => {
    const{ id, title, image, paragraph1, paragraph2, paragraph3, code1, code2 } = props;
    // const [showBeforeCode, setShowBeforeCode] = useState(false); 
    // const [showAfterCode, setShowAfterCode] = useState(false);

    // const handleBeforeClick = () => {
    //     setShowBeforeCode(true);
    //     setShowAfterCode(false);
    // };

    // const handleAfterClick = () => {
    //     setShowBeforeCode(false);
    //     setShowAfterCode(true);
    // };

    return(
        <div>
            <Title ts={title}/>
            <ExplanationImage image={image} />
            <ExplanationText ets={paragraph1} title={title}/>
            <ExplanationText ets={paragraph2} title={title}/>
            <ExplanationExample title={title} />
            <MyCoolCodeBlock condition="Before" code={code1} language="java" showLineNumbers="true" />
            <MyCoolCodeBlock condition="After" code={code2} language="java" showLineNumbers="true" />
            <div className="flex-col justify-center text-sm text-justify mt-2 md:text-lg">
                <div id={id}>
                    {paragraph3}
                </div>
            </div>
        </div>      
    );
};

export default Body;