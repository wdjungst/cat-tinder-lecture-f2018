import React from 'react'
import { Card } from 'semantic-ui-react'
import axios from 'axios'
import Cat from './Cat'

class MyCats extends React.Component {
  state = { cats: [] }

  componentDidMount() {
    axios.get('/api/my_cats')
      .then( res => this.setState({ cats: res.data }) )
  }

  render() {
    const { cats } = this.state
    return (
      <Card.Group itemsPerRow={4} stackable>
        { cats.map( cat => <Cat key={cat.id} {...cat} /> ) }
      </Card.Group>
    )
  }
}

export default MyCats



