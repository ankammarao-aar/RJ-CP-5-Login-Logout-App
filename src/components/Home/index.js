// Write your code here
import {Component} from 'react'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'
import './index.css'

class Home extends Component {
  state = {isLogin: true}

  onLogin = () => {
    this.setState(prevState => ({isLogin: !prevState.isLogin}))
  }

  render() {
    const {isLogin} = this.state
    return (
      <div className="bg-container">
        {isLogin && <Message text="Please Login" />}
        {!isLogin && <Message text="Welcome User" />}
        {isLogin ? (
          <Login onClick={this.onLogin} />
        ) : (
          <Logout onClick={this.onLogin} />
        )}
      </div>
    )
  }
}

export default Home
