import React from 'react'
import MainHeader from '../components/MainHeader'
import Masonry from 'react-masonry-css'
import tile1 from '../images/unsw1.png'
import tile2 from '../images/csehoodie.png'
import tile3 from '../images/csezip.png'
import tile4 from '../images/boop.jpeg'
import tile5 from '../images/mahi.png'
import tile6 from  '../images/businessone.png' 
import tile7 from  '../images/nswhealth.png'
import tile8 from '../images/unswengo.png'
import tile9 from  '../images/murder.png' 
import tile10 from  '../images/unswtee.png'

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
        <a target="popup" href="https://www.linkedin.com/posts/unsw_australia-activity-6953206774967529472-lamv?utm_source=linkedin_share&utm_medium=ios_app"><img className="tile" src={tile1} alt="tile" /> </a>
        <a target="popup" href="https://www.facebook.com/211029215596725/posts/pfbid02U2oPcKojRjfkv4Zs2yhifzdbiHmzjZQg5KqB7NLFERjXKJ9RnnEtntfs7BsBZ8Sal/?d=n"><img className="tile" src={tile2} alt="tile" /> </a>
        <a target="popup" href="https://www.facebook.com/211029215596725/posts/pfbid03247uJokQ7Ne3pibkPKjUPffws1y8FnEhYrtKByTph7d1R2iCxCd1qja8zuQDSWLl/?d=n"><img className="tile" src={tile3} alt="tile" /> </a>         
        <img className="tile" src={tile4} alt="tile" />
        <img className="tile" src={tile5} alt="tile" />
        <img className="tile" src={tile6} alt="tile" />
        <img className="tile" src={tile7} alt="tile" />
        <img className="tile" src={tile8} alt="tile" />
        <img className="tile" src={tile9} alt="tile" />
        <img className="tile" src={tile10} alt="tile" />
      </Masonry>
    </div>
  )
}

export default Main