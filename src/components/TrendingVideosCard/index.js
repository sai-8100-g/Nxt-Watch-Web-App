import {Link} from 'react-router-dom'
import {BsDot} from 'react-icons/bs'
import {formatDistanceToNow} from 'date-fns'
import ThemeContext from '../../themeContext/ThemeContext'

import {
  Li,
  Img,
  ProfileImg,
  Para,
  ParasContainer,
  LowerLiContainer,
} from './style'

const TrendingVideoItems = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const {data} = props
      const {title, id, thumbnailUrl, channel, viewCount, publishedAt} = data
      const date = formatDistanceToNow(new Date(publishedAt)).split(' ')
      const requiredDate = date[1]
      return (
        <>
          <Li theme={isDarkTheme}>
            <Link className="videosLink" to={`/videos/${id}`}>
              <Img src={thumbnailUrl} alt="video thumbnail" />
              <LowerLiContainer>
                <ProfileImg src={channel.profile_image_url} alt="img" />
                <div style={{padding: '0% 3%'}}>
                  <Para theme={isDarkTheme}>{title}</Para>
                  <ParasContainer>
                    <p className="name">{channel.name}</p>
                    <BsDot className="firstDot" />
                    <div className="lowerParaContainer">
                      <p className="views">{viewCount} views</p>
                      <BsDot className="dotIcon" />
                      <p className="date">{requiredDate} years ago</p>
                    </div>
                  </ParasContainer>
                </div>
              </LowerLiContainer>
            </Link>
          </Li>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default TrendingVideoItems
