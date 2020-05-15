import React from 'react';
import settings from './settings'
import axios from 'axios';
import './App.css';
import Card from './components/Card';
import Header from './components/header'


//an app that will display a random Pokemon with info and a picture
// a button that the user and push to get a new random pokemon
class App extends React.Component {
  constructor()
  {
    super();
    this.state = {
      displayPokemon: {},
      pokemonCount: 0,

    }
  }

  getPokemonCount = async () =>
  {
    let {count} =  await fetch(`${settings.apiBaseRoute}/pokemon`).then((Response) => Response.json());

    this.setState({
      pokemonCount: count,
    });
  }


  // async await
  getRandomPokemon = async () =>
  {
    // need a random WHOLE number between 1 and xxxxxx
    const number = Math.floor((Math.random() * this.state.pokemonCount)) + 1;
  
    const pokemonUrl = `${settings.apiBaseRoute}/pokemon/${number}`
                     //fetch v
    const data = await fetch(pokemonUrl).then((response) => response.json());
    
    this.setState({
      displayPokemon: data,
    });
    
                      //axios v
    // const data = await axios.get(pokemonUrl);
    // console.log(data);
    // this.setState({
    //    //axios uses data.data v, fetch is just data because it is already getting a j.son response
    //   displayPokemon: data.data,   
    //});
  }


  async componentDidMount()
  {
    this.getPokemonCount()
    .then(() =>
      {
        return this.getRandomPokemon();
      })
      .catch((err) =>
      {

      })
  }

  render()
  {
    return(
      <div className='main'>
        <Header />
        <Card {...this.state.displayPokemon} />
        <section className="controls">
          <button onClick={this.getRandomPokemon}>Get Random</button>
        </section>
      </div>
    )
  }
}

export default App;
