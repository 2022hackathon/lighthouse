import React from 'react'
import MainHeader from '../components/MainHeader'
import Masonry from 'react-masonry-css'
import tile1 from '../images/nswhospital.png'
import tile2 from '../images/9news1.png'
import tile3 from '../images/9news2.png'
import tile4 from '../images/unsw1.png'
import tile7 from '../images/csehoodie.png'
import tile8 from '../images/tile2.png'
import tile9 from '../images/covid.jpeg'
import tile10 from '../images/olli.png'
import tile5 from '../images/unswfmaa.png'
import tile6 from '../images/linkedinfriend.png'


const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1
};

const Main = () => {
  return (
    <div>
      <MainHeader />
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        <a target="popup" href="https://www.facebook.com/NewSouthWalesHealth/photos/a.232420926957256/1916447548554577/?type=3"><img className="tile" src={tile1} alt="tile" /> </a>
        <a target="popup" href="https://www.instagram.com/p/CgDk_-nIm3b/?igshid=YmMyMTA2M2Y="><img className="tile" src={tile2} alt="tile" /> </a>
        <a target="popup" href="https://www.instagram.com/p/CgBNMCMosQ9/?igshid=YmMyMTA2M2Y="><img className="tile" src={tile3} alt="tile" /> </a>
        <a target="popup" href="https://www.linkedin.com/posts/unsw_australia-activity-6953206774967529472-lamv?utm_source=linkedin_share&utm_medium=ios_app"><img className="tile" src={tile4} alt="tile" /> </a>        
        

      </Masonry>
    </div>
  )
}

export default Main