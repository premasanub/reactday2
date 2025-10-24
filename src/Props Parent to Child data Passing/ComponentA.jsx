//import part
import React from 'react';

const ComponentA = ({b}) => {
    //js part
    const a = 10;
    return (
        //html and css part
        <div>
            <h1>Child Component a value is: {a}</h1>
            <h1>Parent Component b nalue is :{b}</h1>
        </div>
    );
};
 
//export part
export default ComponentA;
