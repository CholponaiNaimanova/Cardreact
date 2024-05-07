import React from 'react';
import Card from './Card';

const Product = () => {
    return (
        <div id='product'> 
            <div className="container">
                <div className="products">
                    <Card bac={"black"} text={"Bishkek"} btn={"Follow"} img={"https://i.pinimg.com/236x/3c/99/10/3c991067cce3d93b3b31699af24cb512.jpg"} bacg={'yellow'}/>
                    <Card text={"Osh"} btn={"Asan"} img={"https://i.pinimg.com/474x/e6/f1/01/e6f1015626f5dfcf1739587ebce13841.jpg"} bacg={"teal"}/>
                    <Card text={"Batken"} btn={"Ulan"} img={"https://i.pinimg.com/236x/09/f7/4c/09f74c0b769fea033031afcf4d875dbb.jpg" } bacg={"palegreen"}/>
                    <Card text={"Talas"} btn={"Musa"} img={"https://i.pinimg.com/236x/a7/1e/2b/a71e2ba3c8f2addf3e2de58804af2908.jpg" } bacg={"violet"}/>
                </div>
            </div>
        </div>
    );
};

export default Product;