// import React, { Component, Fragment } from 'react';

// const MAX_PIZZA = 20;

// const eatPizza = (state, props) => {
//     const {pizzas} = state;
//     return {
//         pizzas: pizzas + 1
//     };
// };

// class Controled extends Component{
//     constructor(props){
//         super(props);
//         this.state={
//             pizzas: 0
//         }
//     }
//     render(){
//         const {pizzas} = this.state;
//         return 
//             <button onClick={this._handleClick}>
//                 {`I have eaten ${pizzas} ${pizzas === 1 ? "pizza" : "pizzas"}`}
//             </button>
//     }
//     _handleClick(){
//         this.setState(eatPizza);
//     }
// }

// class Count extends Component {
//     render() {
//         return <Controled />
//     }
// }

// export default Count;