// Write your code here.
import './index.css'

const UserProfile = props => {
  const {userDetails} = props
  const {headerText, description} = userDetails

  return (
    <li className="user-card-container">
      <div className="user-details-container">
        <h1 className="user-name">{headerText}</h1>
        <p className="user-designation">{description}</p>
      </div>
    </li>
  )
}

export default UserProfile
