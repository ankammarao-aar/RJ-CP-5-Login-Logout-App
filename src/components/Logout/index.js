// Write your code here
import './index.css'

const Logout = i => {
  const {onClick} = i
  return (
    <button className="button" onClick={onClick}>
      Logout
    </button>
  )
}

export default Logout
