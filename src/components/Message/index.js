import './index.css'

function Message(props) {
  const {loveEmojiUrl} = props
  return (
    <div className="message-card">
      <img src={loveEmojiUrl} alt="love emoji" />
      <h1>Thank You!</h1>
      <p>
        We will use your feedback to improve our customer supporrt Performance
      </p>
    </div>
  )
}

export default Message
