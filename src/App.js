import React, { Component } from 'react';
import './App.css';
import DogList from './DogList';
import './DogList.css';

    class App extends Component {
      constructor(props){
        super(props);
        this.state = {
          dogs: []
        }
      }
    
      componentDidMount() {
          fetch("https://dog.ceo/api/breeds/image/random/100")
          .then((res) => res.json())
          .then((data) => {
            this.setState({dogs:data.message})
          })
    }

 render() {
   return (
    <div className="App">
      <h1  style={{textAlign: 'center'}}>
        Welcome to Dogs World.
      </h1>

     <DogList dogs={this.state.dogs}/>
    </div>
   );
 }
}
export default App;
