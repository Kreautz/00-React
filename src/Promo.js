import React from 'react';
import promo from './promo.jpg';
import './App.css';

class Promo extends React.Component{
    render(){
        return <div>
            <img src={promo}  alt="promo" />
                 </div>
    }
}

export default Promo;