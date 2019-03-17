import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor() {
    super();

    this.state = {
      title: ''
    }
  }

  render() {
    return (
      <form id="main-form">
      </form>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

export default App;