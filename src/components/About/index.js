// Write your code here
import Header from '../Header'
import './index.css'

const About = () => (
  <div className="about-con">
    <Header />
    <div className="about-img-con">
      <img
        className="about-sm-img"
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        alt="about"
      />

      <img
        className="about-lg-img"
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        alt="about"
      />
    </div>
  </div>
)
export default About
