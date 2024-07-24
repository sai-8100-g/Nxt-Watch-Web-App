import {Link} from 'react-router-dom'
import ThemeContext from '../../themeContext/ThemeContext'
import {Li, Img, Para, LowerLiContainer} from './style'

const GamingVideoItems = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const {data} = props
      const {title, id, thumbnailUrl, viewCount} = data
      return (
        <>
          <Li theme={isDarkTheme}>
            <Link className="videosLink" to={`/videos/${id}`}>
              <Img src={thumbnailUrl} alt="video thumbnail" />
              <LowerLiContainer theme={isDarkTheme}>
                <Para theme={isDarkTheme}>{title}</Para>
                <p className="views">{viewCount} watching world wide</p>
              </LowerLiContainer>
            </Link>
          </Li>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default GamingVideoItems
