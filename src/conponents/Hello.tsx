import * as React from 'react'

interface HelloProps {
  name: string
  age: number
}

interface HelloState {
  age:number
}

export default class Hello extends React.Component<HelloProps, HelloState> {

  constructor(props:HelloProps) {
    super(props)
    this.state = {
      age: props.age
    }
  }

  render() {
    return <h1>Hello, {this.props.name}! You're {this.state.age}!</h1>
  }

}
