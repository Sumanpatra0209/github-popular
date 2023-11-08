// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {repositoryDetails} = props
  const {
    name,
    imageUrl,
    starsCount,
    forksCount,
    issuesCount,
  } = repositoryDetails

  return (
    <li className="repositoryItem">
      <img className="repositoryImage" src={imageUrl} alt={name} />
      <h1 className="repositoryName">{name}</h1>

      <div className="statsContainer">
        <img
          className="statsIcon"
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
        />
        <p className="statsText">{starsCount} stars</p>
      </div>

      <div className="statsContainer">
        <img
          className="statsIcon"
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
        />
        <p className="statsText">{forksCount} forks</p>
      </div>

      <div className="statsContainer">
        <img
          className="statsIcon"
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
        />
        <p className="statsText">{issuesCount} open issues</p>
      </div>
    </li>
  )
}

export default RepositoryItem
