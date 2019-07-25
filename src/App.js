import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';

import {CardList} from './components/card-list/card-list.component'

class App extends Component {

  constructor(){
    super();
    this.state ={
      searchField:"",
      monsters:[
        {name: 'Frankenstein',
         id: 'asc1'
        },
        {name: 'Dracula',
        id: 'asc2'
       },
       {name: 'Zombie',
       id: 'asc3'
      }
      ]
    }
  }
  componentDidMount(){
    console.log('did mount');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => this.setState({monsters:users}))
  }
  render() {
    return (
      <div className="App">
        <input type='search' placeholder='search monster' onChange={e=> {
          this.setState({searchField:e.target.value}).then(console.log(this.state ))
          
        }}
        >
          
          </input>
        <CardList monsters={this.state.monsters}/>
          
        
    </div>
    )
  }
}



export default App;
