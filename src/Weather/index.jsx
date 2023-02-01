import React, { PureComponent, createRef } from 'react';
import './todo.css';
import clsx from 'clsx';
import CityForm from './cityForm';
import CityDetails from './cityDetails';

export default class Todo extends PureComponent {
  state = {
    cityDetails: [],
    error: null,
  };

  cityName = createRef();

  // async componentDidMount() {
  //   this.loadTodo('all');
  // }

  // loadTodo = async () => {
  //   try {
  //     this.setState({ cityDetails: [] });
  //   } catch (error) {
  //     this.setState({ error });
  //   }
  // };

  searchCity = async event =>  {
    try {
      event.preventDefault();

      const cityName = this.cityName.current.value;
      
      const url = 'http://localhost:3000/weatherList';

      const res = await fetch(`${url}?cityName=${cityName}`);
      const json = await res.json();
      

      if (!res.ok) {
        throw new Error(json);
      }

      if (Object.keys(json).length === 0) {
        alert('City Not Found!');
      }

      this.setState({ cityDetails: json });
    } catch (error) {
      this.setState({ error });
    }
  };

  clearCity = () =>  {
    try {
      this.cityName.current.value = '';

      this.setState({ cityDetails: []});
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
    console.log('render');

    const { error, cityDetails } = this.state;
    if (error) {
      return <h1>{error.message}</h1>;
    }
    console.log(cityDetails)
    return (
      <div className="todo justify-center">
        <h1 className="todo__title text-xl font-bold">Weather App</h1>
        <CityForm searchCity={this.searchCity} ref={this.cityName} />
        <div>
          <CityDetails cityDetails={cityDetails} clearCity={this.clearCity}/>
        </div>
      </div>
    );
  }
}
