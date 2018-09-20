import React, { Component, Fragment } from 'react';
import { Header } from 'semantic-ui-react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import Cat from './Cat'

class Home extends Component {
  state = { cats: [] }

  componentDidMount() {
    axios.get('/api/cats')
      .then( res => this.setState({ cats: res.data }) )
  }

  sample = () => {
    const { cats } = this.state
    if (cats.length) {
      const index = Math.floor(Math.random() * cats.length)
      return cats[index]
    } else {
      return null
    }
  }

  downVote = (id) => {
    const { cats } = this.state
    this.setState({ cats: cats.filter( c => c.id !== id ) })
  }

  upVote = (id) => {
    const { cats } = this.state
    axios.put(`/api/cats/${id}`)
    .then( () => this.setState({ cats: cats.filter( c => c.id !== id ) }) )
  }

  render() {
    const cat = this.sample()
    if (cat) {
      return (
        <Fragment>
          <Cat {...cat} downVote={this.downVote} upVote={this.upVote} />
          <Link to="/my_cats">My Cats</Link>
        </Fragment>
      )
    } else {
      return (
        <Header as='h1' textAlign='center'>No More Cats</Header>
      );
    }
  }
}

export default Home;
