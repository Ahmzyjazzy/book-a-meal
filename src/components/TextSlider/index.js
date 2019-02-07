



import React, { Component, Fragment } from 'react';
import './slider.scss';
import { totalmem } from 'os';

class ImageSlider extends Component {

  constructor(props){
    super(props);
    this.state = {
      current_index: 0,
      interval: 3000,
      total: 4
    }
  }

  componentDidMount(){
    this.initialize();
  }

  initialize() {
    const listItems = document.querySelectorAll('.slider--cont li');

    setInterval(()=>{
      //remove
      listItems.forEach((li, index)=>{
        (this.state.current_index == index) ? li.classList.add('active') : li.classList.remove('active');
      });
      //update current_index
      const { current_index } = this.state;
      this.setState({
        current_index: (current_index < listItems.length - 1) ? (current_index + 1) : 0
      })
    }, 
    this.state.interval);
  }

  render() {
    const { data } = this.props;
    console.log(data);

    return (
      <ul className="slider--cont">
        {
          data.map((item, i)=>{
            return (<li key={i}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </li>
            )
          })
        }
      </ul>
    );
  }
}

export default ImageSlider;