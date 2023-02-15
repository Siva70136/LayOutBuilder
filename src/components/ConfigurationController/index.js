// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onLeftNavBarChange = () => {
        onToggleShowLeftNavbar()
      }
      const onRightNavBarChange = () => {
        onToggleShowRightNavbar()
      }
      const onContentChange = () => {
        onToggleShowContent()
      }

      return (
        <div className="app-container">
          <h1>LayOut</h1>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="content"
              checked={showContent}
              className="box"
              onClick={onContentChange}
            />
            <label htmlFor="content">Content</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="left-navBar"
              checked={showLeftNavbar}
              className="box"
              onClick={onLeftNavBarChange}
            />
            <label htmlFor="left-navBar">Left NavBar</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="right-nav"
              checked={showRightNavbar}
              className="box"
              onClick={onRightNavBarChange}
            />
            <label htmlFor="right-nav">Right NavBar</label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
