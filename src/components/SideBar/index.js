import {Link} from 'react-router-dom'
import ThemeContext from '../../themeContext/ThemeContext'
import {
  Sidebar,
  NavigatingSectionLinks,
  Li,
  FaFireIcon,
  FaHomeIcon,
  Para,
  SiYoutubegamingIcon,
  MdPlaylistAddIcon,
  Heading,
  IconsList,
  Img,
} from './style'

const SideBar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {
        isDarkTheme,
        isGaming,
        isHome,
        isSavedVideos,
        isTrending,
        onClickToGamingSection,
        onClickToHomeSection,
        onClickToSavedSection,
        onClickToTrendingSection,
      } = value
      const onClickToSwitchGaming = () => {
        onClickToGamingSection()
      }
      const onClickToSwitchHome = () => {
        onClickToHomeSection()
      }
      const onClickToSwitchSaved = () => {
        onClickToSavedSection()
      }
      const onClickToSwitchTrending = () => {
        onClickToTrendingSection()
      }
      return (
        <Sidebar theme={isDarkTheme}>
          <NavigatingSectionLinks>
            <Link className="navLinks" onClick={onClickToSwitchHome} to="/">
              <Li value={isHome} theme={isDarkTheme}>
                <FaHomeIcon theme={isDarkTheme} className="icon" />{' '}
                <Para theme={isDarkTheme} className="text" link>
                  Home
                </Para>
              </Li>
            </Link>
            <Link
              className="navLinks"
              onClick={onClickToSwitchTrending}
              to="/trending"
            >
              <Li value={isTrending} theme={isDarkTheme}>
                <FaFireIcon theme={isDarkTheme} className="icon" />{' '}
                <Para theme={isDarkTheme} className="text" link>
                  Trending
                </Para>
              </Li>
            </Link>
            <Link
              className="navLinks"
              onClick={onClickToSwitchGaming}
              to="/gaming"
            >
              <Li value={isGaming} theme={isDarkTheme}>
                <SiYoutubegamingIcon theme={isDarkTheme} className="icon" />{' '}
                <Para theme={isDarkTheme} className="text" link>
                  Gaming
                </Para>
              </Li>
            </Link>
            <Link
              className="navLinks"
              onClick={onClickToSwitchSaved}
              to="/saved-videos"
            >
              <Li value={isSavedVideos} theme={isDarkTheme}>
                <MdPlaylistAddIcon theme={isDarkTheme} className="icon" />{' '}
                <Para theme={isDarkTheme} className="text" link>
                  Saved Videos
                </Para>
              </Li>
            </Link>
          </NavigatingSectionLinks>
          <div>
            <Heading as="p" theme={isDarkTheme}>
              CONTACT US
            </Heading>
            <IconsList>
              <Li media>
                <Img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
              </Li>
              <Li media>
                <Img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
              </Li>
              <Li media>
                <Img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </Li>
            </IconsList>
            <Para as="p" theme={isDarkTheme}>
              Enjoy! Now to see your channels and recommendations!
            </Para>
          </div>
        </Sidebar>
      )
    }}
  </ThemeContext.Consumer>
)

export default SideBar
