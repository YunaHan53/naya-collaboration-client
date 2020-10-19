import React from 'react'
import 'react-chatbox-component/dist/style.css'
import { ChatBox } from 'react-chatbox-component'

const messages = [
  {
    'text': 'Hello there',
    'id': '1',
    'sender': {
      'name': 'Ironman',
      'uid': 'user1',
      'avatar': 'https://data.cometchat.com/assets/images/avatars/ironman.png'
    }
  },
  {
    'text': 'Hi Mr. Stark',
    'id': '2',
    'sender': {
      'name': 'Spiderman',
      'uid': 'user2',
      'avatar': 'https://data.cometchat.com/assets/images/avatars/spiderman.png'
    }
  },
  {
    'text': 'Hello Spiderman, how are you today?',
    'id': '3',
    'sender': {
      'name': 'Ironman',
      'uid': 'user1',
      'avatar': 'https://data.cometchat.com/assets/images/avatars/ironman.png'
    }
  }
]

export class Chat extends React.Component {
  render () {
    return (
      <div className="container" style={{ maxWidth: '800px', paddingTop: '100px', paddingBottom: '50px' }}>
        <h5>Chat Box</h5>
        <ChatBox
          messages={messages}
        />
      </div>
    )
  }
}

export default Chat
