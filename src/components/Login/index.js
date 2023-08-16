// Write your code here
import './index.css'

const Login = i => {
  const {onClick} = i
  return (
    <button className="button" onClick={onClick}>
      Login
    </button>
  )
}

export default Login
