// Write your React code here.
import './index.css'
import {Component} from 'react'
import Emoji from '../Emoji'
import Message from '../Message'

class Feedback extends Component {
  state = {emojiClicked: false}

  showMessage = () => {
    this.setState({emojiClicked: true})
  }

  render() {
    const {emojiClicked} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    return (
      <div className="main-container">
        {emojiClicked ? (
          <Message loveEmojiUrl={loveEmojiUrl} />
        ) : (
          <div className="card">
            <h1>How satisfied are you with our customer support performance</h1>
            <ul className="emoji-tab">
              {emojis.map(eachEmoji => {
                const {name, imageUrl, id} = eachEmoji
                return (
                  <Emoji
                    name={name}
                    imgUrl={imageUrl}
                    key={id}
                    showMessage={this.showMessage}
                  />
                )
              })}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
