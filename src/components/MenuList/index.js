



import React, { Component, Fragment } from 'react';
import './menulist.scss';

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
        <main>
          {/* sort and filter */}
          <div>
            <div className="">
              <select>
                <option>A</option>
                <option>B</option>
                <option>C</option>
              </select>
            </div>
            
            <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
            <input type="text" />
          </div>
        </main>
      </section>
    );
  }
}

export default MenuList;