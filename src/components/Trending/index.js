import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {FaFire} from 'react-icons/fa'
import ThemeContext from '../../themeContext/ThemeContext'
import Navbar from '../Navbar'
import SideBar from '../SideBar'
import TrendingVideoItems from '../TrendingVideosCard'
import {
  MainContainer,
  VideosUl,
  SidebarAndContentContainer,
  Content,
  TrendingIcon,
  TrendingLogoContainer,
  ProgressContainer,
  FailureContainer,
  FailureBtn,
} from './style'

const status = {
  progress: 'PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
  noData: 'NO DATA',
}

class Trending extends Component {
  state = {
    trendingVideoData: [],
    renderStatus: 'INITIAL',
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({renderStatus: status.progress})
    const token = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
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
        channel: eachObj.channel,
        viewCount: eachObj.view_count,
        publishedAt: eachObj.published_at,
      }))

      this.setState({
        trendingVideoData: updatedData,
        renderStatus: status.success,
      })
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
    const {trendingVideoData} = this.state
    const {isDarkTheme} = this.context
    return (
      <>
        <TrendingLogoContainer theme={isDarkTheme}>
          <TrendingIcon>
            <FaFire />
          </TrendingIcon>
          <h1>Trending</h1>
        </TrendingLogoContainer>
        <VideosUl>
          {trendingVideoData.map(eachObj => (
            <TrendingVideoItems data={eachObj} key={eachObj.id} />
          ))}
        </VideosUl>
      </>
    )
  }

  onClickToRetryFetch = () => {
    this.getTrendingVideos()
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

  getFetchedVideos = () => {
    const {renderStatus} = this.state
    switch (renderStatus) {
      case status.success:
        return this.renderSuccess()
      case status.failure:
        return this.renderFailure()
      case status.progress:
        return this.renderProgress()
      default:
        return null
    }
  }

  render() {
    const {isDarkTheme} = this.context
    return (
      <MainContainer data-testid="trending" theme={isDarkTheme}>
        <Navbar />
        <SidebarAndContentContainer>
          <SideBar />
          <Content>{this.getFetchedVideos()}</Content>
        </SidebarAndContentContainer>
      </MainContainer>
    )
  }
}

Trending.contextType = ThemeContext

export default Trending
