import Navbar from '../Navbar'
import SideBar from '../SideBar'
import ThemeContext from '../../themeContext/ThemeContext'
import {
  MainContainer,
  SidebarAndContentContainer,
  Content,
  FailureContainer,
} from './style'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <MainContainer theme={isDarkTheme}>
          <Navbar />
          <SidebarAndContentContainer>
            <SideBar />
            <Content>
              <FailureContainer theme={isDarkTheme}>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
                  alt="not found"
                  className="failureImg"
                />
                <h1 className="failureHeading">Page Not Found</h1>
                <p className="failurePara">
                  we are sorry, the page you requested could not be found.
                </p>
              </FailureContainer>
            </Content>
          </SidebarAndContentContainer>
        </MainContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
