import main from '../../img/main__img.jpeg'

import "./header.css"


const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">BLOG</span>
      </div>
      <img
        className="headerImg"
        src={main}
        alt=""
      />
    </div>
  )
}

export default Header