import React, { Component } from 'react'
import Date_finder from '../components/Date_finder'
import { Request } from '../components/Request'
export  class Comida extends Component {
  render() {
    return (
      <div>
      <Date_finder>comida</Date_finder>
      <Request>comida</Request>  
      </div>
    )
  }
}
