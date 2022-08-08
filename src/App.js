import React, { Component } from 'react'

export default class App extends Component {
  state = {
    corpoVnw: [
      {
        name: 'Luan'
        age: 22
      },
      {
        name: 'Mariana'
        age: 18
      },
      {
        name: 'Dandara'
        age: 25
      },
      {
        name: 'Joy'
        age: 20
      },
      {
        name: 'Aline'
        age: 23
      },
      
      {
        name: 'Cris dos Prazeres'
        age: 30
      }
    ]
  }
}
render() {
  return(
    <div>
        {this.state.corpoVnw.map((item) => (
        <div>
           <h2> Name: {item.name} </h2>
           <h2> Age: {item.age} </h2>
        </div>
    </div>
      ))}
  )
}
