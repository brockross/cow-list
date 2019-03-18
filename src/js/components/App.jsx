import React, {Component} from 'react';
import sampleData from '../../../server/sampleData.js';
import MainDisplay from './MainDisplay.jsx';
import CowSubmit from './CowSubmit.jsx';
import List from './List.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allCows: sampleData.sampleCowData,
      mainCow: sampleData.sampleCowData[0],
    }
  }

  componentDidMount() {
    //get cow list from server, update allCows state
    this.getCows();
  }

  handleCowClick(cow) {
    //update mainCow in state depending which list item was clicked
    this.setState({
      mainCow: cow
    })
  }

  getCows() {
    // send a GET request to the server
    this.props.AccessServer.getAllCows({}, (data) => {
      this.setState({
        allCows: data,
        mainCow: data[0]
      })
    })
    // set state of allCows to the returned result of the GET request
  }

  postCow(e, name, desc) {

    // this.props.AccessServer.postNewCow({
    //   name: name,
    //   description: desc
    // }, (data) => {
    //   this.getCows();
    // })

    this.props.AccessServer.postData({
      name: name,
      description: desc
    })
      .then((responseData) => {
        console.log(`response data from POST:`, responseData);
        this.getCows();
      })
      .catch((err) => {
        console.log(`error during POST: `, err);
      })

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