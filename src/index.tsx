import * as React from 'react'
import * as ReactDom from 'react-dom'

import Hello from "./conponents/Hello"

const container = document.createElement('div')
document.body.appendChild(container)

const users:any = {
  Gates: 62,
  Jobs: 56
}

const conponents = []

for (let name in users) {
  let age = users[name] as number
  conponents.push(<Hello name={name} age={age} />)
}

let content = <div>{conponents}</div>

ReactDom.render(content, container)
