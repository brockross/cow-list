import React, {Component} from 'react';
import sampleData from '../../../server/sampleData.js';
import MainDisplay from './MainDisplay.jsx';
import CowSubmit from './CowSubmit.jsx';
import List from './List.jsx';

class App extends Component {
  constructor() {
    super();

    this.state = {
      allCows: sampleData.sampleCowData,
      mainCow: sampleData.sampleCowData[0],
    }
  }

  componentDidMount() {
    //get cow list from server, update allCows state
  }

  handleCowClick(cow) {
    //update mainCow in state depending which list item was clicked
    this.setState({
      mainCow: cow
    })
    //pass down on props of List component
  }

  getCows() {
    // send a GET request to the server
    // set state of allCows to the returned result of the GET request
  }

  postCow(e, name, desc) {
    // send POST request to the server with new cow info
    // don't forget to igore default behavior (page reload)
    console.log(`postCow has been called. e, name, desc look like: `, e, name, desc);

    let currCows = this.state.allCows;
    currCows.push({
      name: name,
      description: desc
    })

    this.setState({
      allCows: currCows
    })
    // GET all cows from server and re-render list

  }

  render() {
    return (
     <div>
       <h2>CowHub</h2>
       <MainDisplay mainCow={this.state.mainCow}/>
       <CowSubmit postCow={this.postCow.bind(this)}/>
       <List cowList={this.state.allCows} handleCowClick={this.handleCowClick.bind(this)}/>
     </div>
    );
  }
}

export default App;