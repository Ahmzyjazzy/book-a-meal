



import React, { Component, Fragment } from 'react';
import './menulist.scss';

// images
import img1 from '../../assets/dishes/dish-breakfast-1.png';
import img2 from '../../assets/dishes/dish-breakfast-2.png';
import img3 from '../../assets/dishes/dish-breakfast-3.png';

class MenuList extends Component {

  constructor(props){
    super(props);
    this.state = {
    }
  }

  componentDidMount(){

  }

  render() {

    return (
      <section>
        <header className="menu--header">
          {/* <h2>Menu List</h2> */}
          <ul>
            <li className="active"><a href="javascript:;">Breakfast</a></li>
            <li><a href="javascript:;">Lunch</a></li>
            <li><a href="javascript:;">Dinner</a></li>
          </ul>
        </header>
        <main className="menu--content">
          {/* sort and filter */}
          <div className="menu--sort">
            <div className="form--group">
              <select id="caterer">
                <option>Caterer</option>
                <option>B</option>
                <option>C</option>
              </select>
            </div>
            <div className="form--group">
              <select>
                <option>Price range</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
            <div className="icon--group">
              <ul>
                <li className=""><a href="javascript:;"><i className="ion-ios-keypad"></i></a></li>
                <li className=""><a href="javascript:;"><i className="ion-ios-list"></i></a></li>
                <li className=""><a href="javascript:;"><i className="ion-md-funnel"></i></a></li>
              </ul>
            </div>
          </div>
          <div className="menu-meal--list">
            <ul>
              <li>
                  <div className="dish-list">
                      <a href="/"><img src={img1} className="img-responsive" alt="dish-menu" /></a>
                      <div className="dish-list--text">
                          <h4><a href="/">Breakfast-1</a></h4>
                          <p>by <span>Ahmzy kitchen</span></p>
                          <p>This is just a sample dish deatils to leverage on what the meal contain</p>
                      </div>
                      <section className="dish-action--cont">
                        <div>
                          {/* price tag */}
                          <h5>&#8358;40</h5>
                          <button className="btn">Book</button>
                        </div>
                      </section>
                  </div>
              </li>
                
              <li>
                <div className="dish-list">
                      <a href="/"><img src={img2} className="img-responsive" alt="dish-menu" /></a>
                      <div className="dish-list--text">
                          <h4><a href="/">Breakfast-1</a></h4>
                          <p>by <span>Ahmzy kitchen</span></p>
                          <p>This is just a sample dish deatils to leverage on what the meal contain</p>
                      </div>
                      <section className="dish-action--cont">
                        <div>
                          {/* price tag */}
                          <h5>&#8358;250</h5>
                          <button className="btn">Book</button>
                        </div>
                      </section>
                  </div>
              </li>

              <li>
                <div className="dish-list">
                      <a href="/"><img src={img3} className="img-responsive" alt="dish-menu" /></a>
                      <div className="dish-list--text">
                          <h4><a href="/">Breakfast-1</a></h4>
                          <p>by <span>Ahmzy kitchen</span></p>
                          <p>This is just a sample dish deatils to leverage on what the meal contain</p>
                      </div>
                      <section className="dish-action--cont">
                        <div>
                          {/* price tag */}
                          <h5>&#8358;500</h5>
                          <button className="btn">Book</button>
                        </div>
                      </section>
                  </div>
              </li>
              
            </ul>
          </div>
        </main>
      </section>
    );
  }
}

export default MenuList;