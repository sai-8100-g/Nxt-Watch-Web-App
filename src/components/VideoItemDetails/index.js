import {Component} from 'react'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import ReactPlayer from 'react-player'
import Loader from 'react-loader-spinner'
import {AiOutlineLike, AiTwotoneDislike} from 'react-icons/ai'
import {MdPlaylistAdd} from 'react-icons/md'
import {BsDot} from 'react-icons/bs'
import SideBar from '../SideBar'
import ThemeContext from '../../themeContext/ThemeContext'
import Navbar from '../Navbar'
import {
  VideoContainer,
  RowContainer,
  Content,
  SidebarAndContentContainer,
  Hr,
  ChannelContainer,
  SmallText,
  Button,
  MainContainer,
  ProgressContainer,
  FailureContainer,
  FailureBtn,
} from './style'

const status = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  progress: 'PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    renderStatus: 'INITIAL',
    videoData: [],
    isLike: false,
    isDislike: false,
    isSaved: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({renderStatus: status.progress})
    const token = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params

    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok) {
      const details = data.video_details
      const updatedData = {
        id: details.id,
        title: details.title,
        videoUrl: details.video_url,
        thumbnailUrl: details.thumbnail_url,
        channel: details.channel,
        viewCount: details.view_count,
        publishedAt: details.published_at,
        description: details.description,
      }
      this.setState({videoData: updatedData, renderStatus: status.success})
    } else {
      this.setState({renderStatus: status.failure})
    }
  }

  onClicktoLike = () => {
    const {isLike, isDislike} = this.state
    if (isDislike === true && isLike === false) {
      this.setState({isDislike: false, isLike: true})
    } else if (isDislike === false && isLike === false) {
      this.setState({isLike: true})
    }
  }

  onClicktoDislike = () => {
    const {isDislike, isLike} = this.state
    if (isDislike === false && isLike === true) {
      this.setState({isDislike: true, isLike: false})
    } else if (isDislike === false && isLike === false) {
      this.setState({isDislike: true})
    }
  }

  onClickToSaveVideo = () => {
    const {onAddSavedList, onRemoveSavedList} = this.context
    const {isSaved, videoData} = this.state
    if (isSaved === false) {
      this.setState({isSaved: true}, () => {
        onAddSavedList(videoData)
      })
    } else {
      this.setState({isSaved: false}, () => {
        onRemoveSavedList(videoData)
      })
    }
  }

  renderSuccess = () => {
    const {videoData, isDislike, isLike, isSaved} = this.state

    const text = isSaved ? 'Saved' : 'Save'
    const {
      videoUrl,
      channel,

      description,
      title,
      viewCount,
      publishedAt,
    } = videoData
    const date = formatDistanceToNow(new Date(publishedAt)).split(' ')[1]
    return (
      <>
        <VideoContainer>
          <ReactPlayer url={videoUrl} width="100%" height="100%" />
        </VideoContainer>
        <p className="title">{title}</p>
        <RowContainer>
          <div className="firstContainer">
            <p className="text">{viewCount} views</p>
            <BsDot className="icon" />
            <p className="text">{date} years ago</p>
          </div>
          <div className="secondContainer">
            <Button like={isLike} type="button" onClick={this.onClicktoLike}>
              <AiOutlineLike className="icon" /> Like
            </Button>

            <Button
              like={isDislike}
              type="button"
              onClick={this.onClicktoDislike}
            >
              <AiTwotoneDislike className="icon" />
              Dislike
            </Button>

            <Button type="button" onClick={this.onClickToSaveVideo}>
              <MdPlaylistAdd className="icon" /> {text}
            </Button>
          </div>
        </RowContainer>
        <Hr />
        <ChannelContainer>
          <img
            className="profileImg"
            src={channel.profile_image_url}
            alt="channel logo"
          />
          <div>
            <p>{channel.name}</p>
            <p>{channel.subscriber_count} subscribers</p>
            <p className="mediumText">{description}</p>
          </div>
        </ChannelContainer>
        <SmallText as="p">{description}</SmallText>
      </>
    )
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

  getFetchedVideoDetails = () => {
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
      <MainContainer data-testid="videoItemDetails" theme={isDarkTheme}>
        <Navbar />
        <SidebarAndContentContainer>
          <SideBar />
          <Content theme={isDarkTheme}>{this.getFetchedVideoDetails()}</Content>
        </SidebarAndContentContainer>
      </MainContainer>
    )
  }
}

VideoItemDetails.contextType = ThemeContext

export default VideoItemDetails
