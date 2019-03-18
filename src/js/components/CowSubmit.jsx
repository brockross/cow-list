import React, {Component} from 'react';

class CowSubmit extends Component {
  constructor (props) {
    super(props)

    this.state = {
      nameFieldText: '',
      descFieldText: ''
    }
  }

  handleNameChange(e) {
    e.preventDefault();
    this.setState({
      nameFieldText: e.target.value
    })
  }

  handleDescChange(e) {
    e.preventDefault();
    this.setState({
      descFieldText: e.target.value
    })
  }



  render() {
    return(
    <div className="cowSubmit">
      <h4>Submit a new cow to CowHub.</h4>
      <form>
        <p>Cow Name:</p>
        <input type="text" name="cowName" onChange={this.handleNameChange.bind(this)}></input>
        <p>Cow Description:</p>
        <input type="text" name="cowDesc" onChange={this.handleDescChange.bind(this)}></input>
        <input type="submit" name="sendCow" onClick={
          (e) => {
            e.preventDefault();
            this.props.postCow(e, this.state.nameFieldText, this.state.descFieldText)
          }
          }></input>
      </form>
      <p>----------------------------------</p>
    </div>
    )
  }
}

export default CowSubmit;