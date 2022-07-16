import React from 'react'
import MainHeader from '../components/MainHeader'
import Masonry from 'react-masonry-css'
import tile2 from '../images/tile2.png'
import tile3 from '../images/covid.jpeg'
import tile4 from '../images/olli.png'
import tile5 from '../images/cseUNSWFMAA.png'
import tile6 from '../images/linkedinfriend.png'
import tile7 from '../images/nswcovid.png'
import scientia from '../images/scientia.png'
import unsw from '../images/unsw.png'

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
        <img className="tile" src={tile3} alt="tile" />
        <a data-pin-do="embedBoard" data-pin-board-width="400" data-pin-scale-height="240" data-pin-scale-width="80" href="https://www.pinterest.com/pinterest/official-news/"></a>
        <img className="tile" src={tile2} alt="tile" />
        <iframe height="200px" src="https://www.youtube.com/embed/HeldH4AvkRg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <img className="tile" src={scientia} alt="tile" />
        <a target="popup" href="https://www.instagram.com/p/CfvuJkzra3S/?igshid=YmMyMTA2M2Y="><img className="tile" src={tile4} alt="tile" /></a>
        <img className="tile" src={tile4} alt="tile" />
        <img className="tile" src={unsw} alt="tile" />
        <a target="popup" href="https://www.instagram.com/p/CfvuJkzra3S/?igshid=YmMyMTA2M2Y="><img className="tile" src={tile5} alt="tile" /> </a>
        <a target="popup" href="https://www.instagram.com/p/CfvuJkzra3S/?igshid=YmMyMTA2M2Y="><img className="tile" src={tile6} alt="tile" /> </a>
        <a target="popup" href="https://www.instagram.com/p/CfvuJkzra3S/?igshid=YmMyMTA2M2Y="><img className="tile" src={tile7} alt="tile" /> </a>
      </Masonry>
    </div>
  )
}

export default Main