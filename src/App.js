import React, {Component} from 'react';
import {Title} from './components/title/title.component';
import {SearchBar} from './components/search-bar/search-bar.component';
import {CardList} from './components/card-list/card-list.component';
import './App.css';

class App extends Component {
  constructor() {
      super();
      this.state = {
        monsters: [],
        searchField: ''
      }
    }

    componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}))
    }

    handleChange = (e) => {
      this.setState({searchField:e.target.value});
    }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
        <Title/>
        <SearchBar placeholder='Search Monsters' handleChange={this.handleChange}/>
        <CardList monsters={filteredMonsters}/>
      </div>
    )
  }
}

export default App;
