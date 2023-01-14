import React,{Component} from "react";
import Weather from "./Weather";
import './index.css'

export default class App extends Component{
  render() {
    return(
      <>
        <h1 className="header">Hello from Your Weather App</h1>
        <Weather />
      </>
    )
  }
}
