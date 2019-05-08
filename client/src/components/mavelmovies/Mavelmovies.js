import React, { Component } from 'react'
import './Mavelmovies.css';

class Mavelmovies extends Component {
    constructor() {
        super();
        this.state = {
            mavelMovies: []
        }
    }
    componentDidMount() {
        fetch('/api/mavelMovies')
            .then(res => res.json())
            .then(mavelMovies => 
              this.setState({mavelMovies}, () => 
              console.log('Movies fetched ...', mavelMovies)));

    }
  render() {
    return (
      <div>
      <h1>Mavel Movies</h1>
        <ul>
            {this.state.mavelMovies.map(({ id, movieName, year}) => 
                <li key={id}>{ movieName } { year } </li>
                )}
        </ul>
      </div>
    )
  }
}

export default Mavelmovies

