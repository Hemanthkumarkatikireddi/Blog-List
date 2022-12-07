// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {details} = props
  const {title, description, publishedDate} = details
  return (
    <div className="item-container">
      <div className="title-container">
        <h1 className="title">{title}</h1>
        <p className="publish">{publishedDate}</p>
      </div>
      <div className="title-describe">
        <p className="description">{description}</p>
      </div>
      <hr color="#9aa5b1" />
    </div>
  )
}

export default BlogItem
