import React from 'react';

const Heading = ({children}) => 
    <h1 className="myheading">{headingcase(children)}</h1>;


const Subheading = ({children}) =>
    <h2 className="mysubheading">{subheadingcase(children)}</h2>;

function headingcase(text) {
    console.log('Converting to heading case');
    return text.toUpperCase();
}

function subheadingcase(text) {
    console.log('Converting to subheading case');
    return text.toLowerCase();
}

export {
    Heading,
    Subheading,
};

