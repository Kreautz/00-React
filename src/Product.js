import React from 'react';
import logo from './logo.svg';
import './App.css';

class Product extends React.Component{
    render(){
        return (
        <div className="col s6 m3">
        	<div className="card yellow lighten-3">
        	 <div className="card-image black-text">
            <img src={logo} className="App-logo"/>
            </div>
            <div className="card-content">
                <h1>{this.props.judul}</h1> <h3>Harga : {this.props.harga}</h3>
        	</div>
        	<div className="card-action">
        	<a href="#">This is a link</a>
        	</div>
        </div>
        </div>
        )
    }
}
export default Product;