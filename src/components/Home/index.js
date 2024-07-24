import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {IoMdClose} from 'react-icons/io'
import {FaSearch} from 'react-icons/fa'
import Cookies from 'js-cookie'
import SideBar from '../SideBar'
import Navbar from '../Navbar'
import VideosCard from '../VideosCard'
import ThemeContext from '../../themeContext/ThemeContext'
import {
  MainContainer,
  SidebarAndContentContainer,
  Content,
  BannerContainer,
  Banner,
  Img,
  Para,
  Button,
  VideoUl,
  FailureContainer,
  FailureBtn,
  SearchBtn,
  Input,
  VideosUl,
  ProgressContainer,
} from './style'

const status = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  progress: 'PROGRESS',
  noVideos: 'NO VIDEOS',
}

class Home extends Component {
  state = {
    renderStatus: 'INITIAL',
    videosData: [],
    isShowBanner: true,
    input: '',
    searchInput: '',
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({renderStatus: status.progress})
    const {searchInput} = this.state
    const token = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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
      if (updatedData.length === 0) {
        this.setState({renderStatus: status.noVideos})
      } else {
        this.setState({renderStatus: status.success, videosData: updatedData})
      }
    } else {
      this.setState({renderStatus: status.failure})
    }
  }

  renderProgress = () => (
    <ProgressContainer className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#DAF7A6" height="50" width="50" />
    </ProgressContainer>
  )

  onClickToRetryFetch = () => {
    this.getVideoDetails()
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

  renderSuccess = () => {
    const {videosData} = this.state
    return (
      <VideosUl>
        {videosData.map(eachObj => (
          <VideosCard data={eachObj} key={eachObj.id} />
        ))}
      </VideosUl>
    )
  }

  noVideosRender = () => {
    const {isDarkTheme} = this.context
    return (
      <FailureContainer theme={isDarkTheme}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
          alt="no videos"
          className="failureImg"
        />
        <h1>No Search Results Found</h1>
        <p className="failurePara">
          Try different key words or remove search filter
        </p>
        <FailureBtn type="button" onClick={this.onClickToRetryFetch}>
          Retry
        </FailureBtn>
      </FailureContainer>
    )
  }

  onToggleBanner = () => {
    this.setState({isShowBanner: false})
  }

  onChangeSearchInput = event => {
    this.setState({input: event.target.value})
  }

  onClickToSearchInput = () => {
    const {input} = this.state
    this.setState({searchInput: input}, this.getVideoDetails)
  }

  getFetchedVideoDetails = () => {
    const {renderStatus} = this.state
    switch (renderStatus) {
      case status.success:
        return this.renderSuccess()
      case status.failure:
        return this.renderFailure()
      case status.progress:
        return this.renderProgress()
      case status.noVideos:
        return this.noVideosRender()
      default:
        return null
    }
  }

  render() {
    const {isShowBanner, input} = this.state
    const {isDarkTheme, isPopup} = this.context
    const bgColor = isDarkTheme ? ' #0f0f0f' : '#ffffff'
    return (
      <MainContainer data-testid="home" theme={isDarkTheme} popup={isPopup}>
        <Navbar />
        <SidebarAndContentContainer>
          <SideBar />
          <Content theme={isDarkTheme}>
            {isShowBanner && (
              <BannerContainer data-testid="banner">
                <Button
                  type="button"
                  data-testid="close"
                  close
                  onClick={this.onToggleBanner}
                >
                  <IoMdClose />
                </Button>
                <Banner data-testid="banner">
                  <Img
                    Banner
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    alt="nxt watch logo"
                  />
                  <Para>Buy Nxt Watch premium prepain plans with UPI</Para>
                  <Button type="button">GET IT NOW</Button>
                </Banner>
              </BannerContainer>
            )}
            <div
              style={{
                backgroundColor: bgColor,
                padding: '1%',
                marginTop: '1%',
              }}
            >
              <div style={{marginTop: '2%', display: 'flex'}}>
                <Input
                  theme={isDarkTheme}
                  type="search"
                  value={input}
                  placeholder="Search"
                  onChange={this.onChangeSearchInput}
                />
                <SearchBtn
                  theme={isDarkTheme}
                  type="button"
                  data-testid="searchButton"
                  Input
                  onClick={this.onClickToSearchInput}
                >
                  <FaSearch />
                </SearchBtn>
              </div>
              <VideoUl>{this.getFetchedVideoDetails()}</VideoUl>
            </div>
          </Content>
        </SidebarAndContentContainer>
      </MainContainer>
    )
  }
}

Home.contextType = ThemeContext

export default Home
