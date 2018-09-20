import React from 'react'
import { 
  Button,
  Icon,
  Card,
  Image,
} from 'semantic-ui-react'

const Cat = ({ avatar, name, breed, registry, id, upVote, downVote }) => (
  <Card>
    <Image src={avatar} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Description>{breed}</Card.Description>
      <Card.Meta>{registry}</Card.Meta>
    </Card.Content>
    { upVote &&
        <Card.Content extra>
          <Button basic onClick={() => downVote(id)}>
            <Icon name="thumbs down" />
          </Button>
          <Button basic onClick={() => upVote(id)}>
            <Icon name="thumbs up" />
          </Button>
        </Card.Content>
    }
  </Card>
)

export default Cat
