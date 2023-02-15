// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      const renderLeftNavBar = () => (
        <div className="left-nav-bar">
          <h1 className="">Left NavBar Menu</h1>
          <ul className="list">
            <li className="list-item">Item 1</li>
            <li className="list-item">Item 2</li>
            <li className="list-item">Item 3</li>
            <li className="list-item">Item 4</li>
          </ul>
        </div>
      )

      const renderRightNavBar = () => (
        <div className="right-nav-bar">
          <h1 className="">Right NavBar</h1>
          <div className="ad-1">
            <p className="">Ad 1</p>
          </div>
          <div className="ad-1">
            <p className="">Ad 2</p>
          </div>
        </div>
      )

      const renderContent = () => (
        <div className="content-container">
          <h1>Content</h1>
          <p className="content">
            Lorem ipsum hi how are you ? I am fine very hello ja
          </p>
        </div>
      )

      return (
        <div className="body-container">
          {showLeftNavbar && renderLeftNavBar()}
          {showContent && renderContent()}
          {showRightNavbar && renderRightNavBar()}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
