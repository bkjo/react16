// import React, { Component, Fragment } from 'react';
// import { createPortal } from 'react-dom';

// const BoundaryHOC = ProtectedComponent => 
//   class Boundary extends Component{
//     constructor(props){
//       super(props);
//       this.state = {
//         hasError: false
//       }
//     }
//     componentDidCatch = () => {
//       this.setState({
//         hasError: true
//       })
//     }
//     render(){
//       const {hasError} = this.state;
//       if(hasError){
//         return <ErrorFallback />;
//       }else{
//         return <ProtectedComponent />;
//       }
//     }
//   };


// class ErrorMarker extends Component{
//   constructor(props){
//     super(props);
//     this.state ={
//       friends: ["jisu", "flynn", "deal","kneeplayer"]
//     }
//   }
//   componentDidMount(){
//     setTimeout(() => {
//       this.setState({
//         friends: undefined
//       })
//     }, 2000);
//   }
//   render(){
//     const {friends} = this.state;
//     return friends.map(friend => ` ${friend} `);
//   }
// }

// const PErrorMaker = BoundaryHOC(ErrorMarker);

// class Portals extends Component{
//   render() {
//     return createPortal(<Message />, document.getElementById('touchme'));
//   }
// }
// const Message = () => "Just touch it";

// const PPortals = BoundaryHOC(Portals);

// class ReturnType extends Component{
//   render(){
//     return "Hello";
//   };
// }

// const ErrorFallback = () => "Sorry something went wrong";

// class App extends Component {
//   render() {
//     return (
//       <Fragment>
//         <ReturnType/>
//         <PErrorMaker />
//         <PPortals />
//       </Fragment>
//     );
//   }
// }

// export default BoundaryHOC(App);



/* -------------------------------------------------------------------------------- */

import React, { Component } from 'react';

const MAX_PIZZA = 20;

const eatPizza = (state, props) => {
    const {pizzas} = state;
    if(pizzas < MAX_PIZZA){
      return {
        pizzas: pizzas + 1
      };
    }else{
      return null;
    }
    
};

class Controlled extends Component{
    constructor(props){
        super(props);
        this.state={
            pizzas: 0
        }
    }
    render(){
        const {pizzas} = this.state;
        return (
            <button onClick={this._handleClick}>
                {`I have eaten ${pizzas} ${pizzas === 1 ? "pizza" : "pizzas"}`}
            </button>
        );
    }
    _handleClick = () => {
      this.setState(eatPizza);
    }
}

class App extends Component {
    render() {
        return <Controlled />
    }
}

export default App;