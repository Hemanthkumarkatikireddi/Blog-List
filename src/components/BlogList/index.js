// Write your JS code here

import './index.css'

import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogList} = props
  return (
    <div className="home-con">
      <div className="profile-container">
        <img
          className="img"
          src="https://assets.ccbp.in/frontend/react-js/profile-img.png "
          alt="profile"
        />
        <h1 className="heading">Wade Warren</h1>
        <p className="description">Software developer at Uk</p>
      </div>

      {blogList.map(each => (
        <BlogItem key={each.id} details={each} />
      ))}
    </div>
  )
}

export default BlogList
