/* eslint-disable react/prop-types */
import { useState } from 'react';
import { CodeBlock, arta } from 'react-code-blocks';

function MyCoolCodeBlock({ condition, code, language, showLineNumbers }) {
  const [isVisible, setIsVisible] = useState(false)

  const handleVisible = () => {
    setIsVisible(!isVisible)
  }

  return (
    <div className='font-normal'>
       <button className='text-sm md:text-lg py-2 cursor-pointer flex justify-between items-center' onClick={handleVisible}>
        {condition}
        <span className="text-xl mt-2 ml-1">
          <ion-icon name={`${isVisible ? "chevron-up" : "chevron-down"}`} />
        </span>
      </button>
      {isVisible && 
        <div className="text-xs mb-3">
          <CodeBlock
            text={code}
            language={language}
            showLineNumbers={showLineNumbers}
            theme={arta}
            hidden
          />
        </div>
      }
    </div >
  );
}

export default MyCoolCodeBlock;