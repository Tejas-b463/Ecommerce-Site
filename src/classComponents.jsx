import React from "react";

class classComponents extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
        count : 0,
    }
  }
 
  render() {
    const{name} = this.props
    const{count} = this.state
    return (
      <div style={{ marginTop: "100px", marginBottom: "100px" }}>
        <h1>Class Components</h1>

        <p>Name : {name}</p>
        <p>Location : {this.props.location}</p>
        <p>Contact : {this.props.contact}</p>

        <h1>Counter : {count}</h1>
        <button onClick={()=>{
            this.setState({
                count : this.state.count + 1,
            })
        }}>Increment</button>
        <button onClick={()=>{
            this.setState({
                count : this.state.count - 1,
            })
        }}>Decrement</button>
      </div>
    );
  }
}
export default classComponents;
