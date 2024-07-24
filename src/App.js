import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import ThemeContext from './themeContext/ThemeContext'
import Home from './components/Home'
import VideoItemDetails from './components/VideoItemDetails'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import Login from './components/Login'
import SavedVideos from './components/SavedVideos'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'

import './App.css'

class App extends Component {
  state = {
    isDarkTheme: false,
    isPopup: false,
    isHome: true,
    isTrending: false,
    isGaming: false,
    isSavedVideos: false,
    savedVideos: [],
  }

  onClickToHomeSection = () => {
    this.setState({
      isHome: true,
      isTrending: false,
      isGaming: false,
      isSavedVideos: false,
    })
  }

  onClickToTrendingSection = () => {
    this.setState({
      isHome: false,
      isTrending: true,
      isGaming: false,
      isSavedVideos: false,
    })
  }

  onClickToGamingSection = () => {
    this.setState({
      isHome: false,
      isTrending: false,
      isGaming: true,
      isSavedVideos: false,
    })
  }

  onClickToSavedSection = () => {
    this.setState({
      isHome: false,
      isTrending: false,
      isGaming: false,
      isSavedVideos: true,
    })
  }

  onBlurAdd = () => {
    this.setState({isPopup: true})
  }

  onRemoveBlur = () => {
    this.setState({isPopup: false})
  }

  onToggleTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  onAddSavedList = data => {
    const {savedVideos} = this.state
    if (savedVideos.some(eachObj => eachObj.id === data.id)) {
      this.setState({savedVideos})
    } else {
      this.setState(prevState => ({
        savedVideos: [...prevState.savedVideos, data],
      }))
    }
  }

  render() {
    const {
      isDarkTheme,
      savedVideos,
      isPopup,
      isHome,
      isGaming,
      isSavedVideos,
      isTrending,
    } = this.state
    return (
      <ThemeContext.Provider
        value={{
          isDarkTheme,
          savedVideos,
          isHome,
          isGaming,
          isTrending,
          isSavedVideos,
          isPopup,
          onBlurAdd: this.onBlurAdd,
          onRemoveBlur: this.onRemoveBlur,
          onToggleTheme: this.onToggleTheme,
          onAddSavedList: this.onAddSavedList,
          onClickToGamingSection: this.onClickToGamingSection,
          onClickToHomeSection: this.onClickToHomeSection,
          onClickToSavedSection: this.onClickToSavedSection,
          onClickToTrendingSection: this.onClickToTrendingSection,
        }}
      >
        <div className={`app-container ${isPopup ? 'blurred' : ''}`}>
          <Switch>
            <Route exact path="/login" component={Login} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/trending" component={Trending} />
            <ProtectedRoute exact path="/gaming" component={Gaming} />
            <ProtectedRoute
              exact
              path="/saved-videos"
              component={SavedVideos}
            />
            <ProtectedRoute
              exact
              path="/videos/:id"
              component={VideoItemDetails}
            />
            <Route component={NotFound} />
          </Switch>
        </div>
      </ThemeContext.Provider>
    )
  }
}

export default App
