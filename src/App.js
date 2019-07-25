import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';

import {CardList} from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component';
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
  // const handleCHange = function(e) {
  //   this.setState({searchField:e.target.value})
    
  // }
  componentDidMount(){
    console.log('did mount');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => this.setState({monsters:users}))
  }
  render() {
    const {monsters, searchField} = this.state;
    console.log(monsters, searchField);
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
       <SearchBox
        placeholder="Search Monster"
        handleChange = {e => this.setState({searchField:e.target.value})}
       />
        <CardList monsters={filteredMonsters}/>
          
        
    </div>
    )
  }
}



export default App;
