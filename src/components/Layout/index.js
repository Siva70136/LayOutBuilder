// Write your code here
import Header from '../Header'
import Footer from '../Footer'
import Body from '../Body'
import './index.css'

const Layout = () => {
  console.log('hi')
  return (
    <div className="layout-container">
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

export default Layout
