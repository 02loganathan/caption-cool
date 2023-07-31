import React,{Component} from "react";
class App extends Component{
  constructor(){
    super();
  this.state={
    data:[
        {"name":"Name1: ANAND"},
        {"name":"Name2: RAHUL"},
        {"name":"Name3: SALMAN"},
        {"name":"Name4: NAVEEN"},
        {"name":"Name5: THIRU"}

    ]};
}
  render(){
    return(
      <div>
        <center>
            <Buddy/>
            <ul>
        {this.state.data.map((item)=><List data={item}/>)}
        </ul></center>
      </div>
    );
  }
}
class Buddy extends React.Component{
    render(){
        return(
            <div>
                <h1> Welcome To Bddy Club</h1>
                <h2> This is my class info:</h2>
            </div>
            );

}
}
class List extends React.Component{
    render(){
        return(
        <ul>
            <li>{this.props.data.name}</li>
        </ul>
        );
    }
}
export default App;