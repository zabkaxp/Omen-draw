let data = ["joy", "luck", "happiness", "sadness"];

class App extends React.Component {
  state = {
    chosenOmen: "",
    inputVal: ""
  };

  seeOmen = data => {
    const number = Math.floor(Math.random() * data.length);
    this.setState({
      chosenOmen: data[number]
    });
  };

  changeInputVal = e => {
    this.setState({
      inputVal: e.target.value
    });
    console.log(e.target.value);
  };

  addOmen = e => {
    e.preventDefault();
    data.push(this.state.inputVal);
    alert(`twoje wrozby to ${data}`);
  };

  render() {
    return (
      <div>
        <button onClick={() => this.seeOmen(data)}>See the Omen</button>
        <form>
          <input
            value={this.state.inputVal}
            onChange={this.changeInputVal}
            type="text"
          />
          <button onClick={this.addOmen}>Add Omen</button>
        </form>
        {this.state.chosenOmen && <p>{this.state.chosenOmen}</p>}
      </div>
    );
  }
}

ReactDOM.render(<App data={data} />, document.getElementById("root"));
