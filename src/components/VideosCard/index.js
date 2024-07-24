import {Link} from 'react-router-dom'
import {BsDot} from 'react-icons/bs'
import {formatDistanceToNow} from 'date-fns'
import ThemeContext from '../../themeContext/ThemeContext'

import {Li, Img, ProfileImg, Para, ParasContainer} from './style'

const VideosCard = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const {data} = props
      const {title, id, thumbnailUrl, channel, viewCount, publishedAt} = data
      const date = formatDistanceToNow(new Date(publishedAt)).split(' ')
      const requiredDate = date[1]
      return (
        <Link className="videosLink" to={`/videos/${id}`}>
          <Li theme={isDarkTheme}>
            <Img src={thumbnailUrl} alt="video thumbnail" />
            <div style={{display: 'flex'}}>
              <ProfileImg src={channel.profile_image_url} alt="channel logo" />
              <div style={{padding: '0% 3%'}}>
                <Para theme={isDarkTheme}>{title}</Para>
                <ParasContainer theme={isDarkTheme}>
                  <p className="name">{channel.name}</p>
                  <BsDot className="firstDot" />
                  <div className="lowerParaContainer">
                    <p className="views">{viewCount} views</p>
                    <BsDot className="dotIcon" />
                    <p className="date">{requiredDate} years ago</p>
                  </div>
                </ParasContainer>
              </div>
            </div>
          </Li>
        </Link>
      )
    }}
  </ThemeContext.Consumer>
)

export default VideosCard
