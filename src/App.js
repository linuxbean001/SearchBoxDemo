import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBox from './components/searchBox/searchBox';
import GetDataService from './service/GetDataService';

const getDataAPI = new GetDataService();


class App extends React.Component{
  constructor(props){
    super(props);   
    this.state={
      data:[]
    }
  }

  componentDidMount(){
    getDataAPI.getData()
        .then(response => {
          console.log('api : ',JSON.parse(response.data));
          this.setState({
            data:JSON.parse(response.data)
          });
        })
        .catch(function (error) {
          console.log(error);
        })
  }

  render(){      
    return (
      <div className="App">
        <h1>Search Box Demo</h1>
        <br/>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <SearchBox content={this.state.data} />         
            </div>
          </div>
        </div>        
      </div>
    );
  }
}

export default App;
