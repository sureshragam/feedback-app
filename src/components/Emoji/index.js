import './index.css'
import {Component} from 'react'

class Emoji extends Component {
  render() {
    const {name, imgUrl, showMessage} = this.props
    const onClickEmoji = () => {
      showMessage()
    }
    return (
      <li onClick={onClickEmoji}>
        <img src={imgUrl} alt={name} />
        <p>{name}</p>
      </li>
    )
  }
}
export default Emoji
