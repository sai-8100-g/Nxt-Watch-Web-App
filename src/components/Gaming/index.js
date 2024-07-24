import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'
import ThemeContext from '../../themeContext/ThemeContext'
import GamingVideoItems from '../GamingVideoItems'
import Navbar from '../Navbar'
import SideBar from '../SideBar'
import {
  VideosUl,
  SidebarAndContentContainer,
  Content,
  TrendingLogoContainer,
  TrendingIcon,
  MainContainer,
  FailureContainer,
  FailureBtn,
  ProgressContainer,
} from './style'

const status = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  progress: 'PROGRESS',
}

class Gaming extends Component {
  state = {
    gameData: [],
    renderStatus: 'INITIAL',
  }

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({renderStatus: status.progress})
    const token = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }

    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      const updatedData = data.videos.map(eachObj => ({
        id: eachObj.id,
        title: eachObj.title,
        thumbnailUrl: eachObj.thumbnail_url,
        viewCount: eachObj.view_count,
      }))

      this.setState({gameData: updatedData, renderStatus: status.success})
    } else {
      this.setState({renderStatus: status.failure})
    }
  }

  renderProgress = () => (
    <ProgressContainer className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#DAF7A6" height="50" width="50" />
    </ProgressContainer>
  )

  renderSuccess = () => {
    const {gameData} = this.state
    const {isDarkTheme} = this.context
    return (
      <>
        <TrendingLogoContainer theme={isDarkTheme}>
          <TrendingIcon>
            <SiYoutubegaming />
          </TrendingIcon>
          <h1>Gaming</h1>
        </TrendingLogoContainer>
        <VideosUl>
          {gameData.map(eachObj => (
            <GamingVideoItems data={eachObj} key={eachObj.id} />
          ))}
        </VideosUl>
      </>
    )
  }

  onClickToRetryFetch = () => {
    this.getGamingVideos()
  }

  renderFailure = () => {
    const {isDarkTheme} = this.context
    return (
      <FailureContainer theme={isDarkTheme}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
          alt="failure view"
          className="failureImg"
        />
        <h1 className="failureHeading">Oops! Something Went Wrong</h1>
        <p className="failurePara">
          We are having some trouble to complete your request. <br /> Please try
          again.
        </p>
        <FailureBtn
          className="failureBtn"
          type="button"
          onClick={this.onClickToRetryFetch}
        >
          Retry
        </FailureBtn>
      </FailureContainer>
    )
  }

  getGameFetchedResult = () => {
    const {renderStatus} = this.state
    switch (renderStatus) {
      case status.failure:
        return this.renderFailure()
      case status.success:
        return this.renderSuccess()
      case status.progress:
        return this.renderProgress()
      default:
        return null
    }
  }

  render() {
    const {isDarkTheme} = this.context
    return (
      <MainContainer data-testid="gaming" theme={isDarkTheme}>
        <Navbar />
        <SidebarAndContentContainer>
          <SideBar />
          <Content>{this.getGameFetchedResult()}</Content>
        </SidebarAndContentContainer>
      </MainContainer>
    )
  }
}

Gaming.contextType = ThemeContext

export default Gaming
