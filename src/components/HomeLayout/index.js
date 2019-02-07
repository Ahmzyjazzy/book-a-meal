
import React, { Component, Fragment } from 'react';
import './home.scss';

// component
import TextSlider from '../TextSlider';
import MenuList from '../MenuList';

class HomeLayout extends Component {

  componentDidMount(){
    
  }

  render() {

    const textArray = [
      {title:'Yummy Yummy !!!', description:'The food store that makes you chop better'},
      {title:'So Delicious !!!', description:'Order at affordable price'},
      {title:'Tasty food !!!', description:'Hmmm, taste great just for you'},
    ];

    return (
      <Fragment>
        <section className="hero--image">
          <div className="hero--cover">
            <TextSlider data={textArray}/>
          </div>
        </section>
        <MenuList />
      </Fragment>
    );
  }
}

export default HomeLayout;