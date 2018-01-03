import React, { Component } from 'react';
import './App.css';
const url="./data.json";

class App extends Component {
  constructor(){
    super();
    this.state={
      data:[]
    };
  };

componentDidMount(){
  fetch(url)
  .then((response) =>
        response.json())
  .then((result) =>{
    this.setState({data:result});
    console.log(this.state.data);
  }
  )
}


  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">E-Commerce</a>
          </div>
          <ul class="nav navbar-nav">
          {this.state.data.map((data,i) => 
          <li className="dropdown" key={i}>
              <a className="dropdown-toggle" data-toggle="dropdown" href="#" >{data.category}
              <span className="caret"></span></a>
              <ul className="dropdown-menu multi-level" role="menu" aria-labelledby="dropdownMenu">
              {data.subcategory.map((subdata,i) =>
                    <li key={i} className="dropdown-submenu"><a href="#">{subdata.name}</a>
                     <ul className="dropdown-menu">
                    {subdata.types.map((types,i) =>
                        <li key={i}><a tabindex="-1" href="#">{types}</a></li>
                    )}
                    </ul>
                    </li>
                    
              )}  
              </ul>
          </li>
          )}
        </ul>
        </div>
      </nav>
        
      </div>
    );
  }
}

export default App;
