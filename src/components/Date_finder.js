import React, { Component } from 'react'
import axios from 'axios'


export default class Date_finder extends Component {
            
            state = {
                users: [],
                date: ''
              }
            
              async componentDidMount(){
            //      const res = await axios.get(`http://localhost:8080/servicios/salones?fecha=${this.state.date}`);
            //      this.setState({ users: res.data});
                  console.log(this.state.users)
                }
            
              onChangeDate=(e)=>{
                console.log(e.target.value)
                
                this.setState({
                  date: e.target.value
                })
              }
            
              onSubmit = async e => {
                  e.preventDefault();
                  const res =await axios.get(`http://localhost:8080/servicios/${this.props.children}?fecha=${this.state.date}`);
                  this.setState({users : res.data});
                  console.log(res)
                }
              render() {
               
                return (
                  <div className='row'>
                    <div className='col-md-4'> 
                        <div className='card card-body'>
                            <h3>Ingresa la fecha</h3>  
                            <form onSubmit={this.onSubmit}>
                                <div className='form-group'>
                                    <input 
                                        type="text" 
                                        className='form-control' 
                                        onChange={this.onChangeDate}
                                    />
                                </div>
                                <button type="submit" className='btn btn-primary'>
                                    Consultar
                                </button>
                            </form>
                        </div>
                    </div>
            
                    <div className='col-md-8'>
                        <ul className='list-group'>
                            {
                              this.state.users.map(user => 
                                  (<li className='list-group-item list-group-action' key={user._id}>
                                    evento: {user.evento} _ salon: {user.salon} _ usuario: {user.nombreusuario} _ característica: {user.caracteristica}
                                  </li>)
                              )
                            }
                        </ul>
                    </div>
            
                  </div>
                )
              }
        
    }
