import React ,{Component} from "react";
import Header from './Header'
import Team from './Team'
class App extends Component{
 
  render(){
    console.log("hahahha")
    return(
      <div className = "container bg-dark" >
        
        <Header />
        <Team /> 

      </div>
    );
  }
}

 
export default App;
