import {Component} from 'react'
import {MdPlaylistAdd} from 'react-icons/md'
import Navbar from '../Navbar'
import SideBar from '../SideBar'
import ThemeContext from '../../themeContext/ThemeContext'
import TrendingVideoItems from '../TrendingVideosCard'
import {
  TrendingLogoContainer,
  Content,
  SidebarAndContentContainer,
  TrendingIcon,
  VideosUl,
  FailureContainer,
  MainContainer,
} from './style'

class SavedVideos extends Component {
  renderSavedVideos = () => {
    const {savedVideos, isDarkTheme} = this.context
    return (
      <>
        <TrendingLogoContainer theme={isDarkTheme}>
          <TrendingIcon>
            <MdPlaylistAdd />
          </TrendingIcon>
          <h1>Saved Videos</h1>
        </TrendingLogoContainer>
        <VideosUl>
          {savedVideos.map(eachObj => (
            <TrendingVideoItems data={eachObj} key={eachObj.id} />
          ))}
        </VideosUl>
      </>
    )
  }

  noSavedVideosrender = () => {
    const {isDarkTheme} = this.context
    return (
      <FailureContainer theme={isDarkTheme}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
          alt="no saved videos"
          className="failureImg"
        />
        <h1 className="failureHeading">No Saved Videos Found</h1>
        <p className="failurePara">
          You can save Your videos while watching them.
        </p>
      </FailureContainer>
    )
  }

  savedList = () => {
    const {savedVideos} = this.context
    if (savedVideos.length === 0) {
      return this.noSavedVideosrender()
    }
    return this.renderSavedVideos()
  }

  render() {
    const {isDarkTheme} = this.context
    return (
      <MainContainer data-testid="savedVideos" theme={isDarkTheme}>
        <Navbar />
        <SidebarAndContentContainer>
          <SideBar />
          <Content>{this.savedList()}</Content>
        </SidebarAndContentContainer>
      </MainContainer>
    )
  }
}

SavedVideos.contextType = ThemeContext

export default SavedVideos
