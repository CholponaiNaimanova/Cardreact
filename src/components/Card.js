import React from 'react';

const Card = ({text, btn, img, bacg}) => {
    return (
         <div className='card' style={{background: bacg}}>
            <h1>{text}</h1>
            <button>{btn}</button>
            <img src={img} alt=''/>
            
        </div >
    );
};

export default Card;