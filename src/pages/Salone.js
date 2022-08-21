import React, { Component } from 'react'
import Date_finder from '../components/Date_finder'
import { Request } from '../components/Request';
import 'bootstrap/dist/css/bootstrap.min.css';


export class Salone extends Component {
  render() {
    return (
      <div>
      <Date_finder>salones</Date_finder>  
      <Request>salones</Request>
      </div>
    )
  }
}
