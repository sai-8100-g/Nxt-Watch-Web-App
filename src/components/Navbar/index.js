import {withRouter, Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {VscColorMode} from 'react-icons/vsc'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoIosLogOut} from 'react-icons/io'
import {IoClose} from 'react-icons/io5'

import ThemeContext from '../../themeContext/ThemeContext'
import {
  Nav,
  LogoImg,
  NavRightSideContainer,
  ProfileImg,
  NavButton,
  NavButtonIcon,
  DisplayContainer,
  ModalContainer,
  ModalButton,
  ModalPara,
  IconButton,
  ModalMenuContainer,
  NavigatingSectionLinks,
  Li,
  Para,
  FaFireIcon,
  SiYoutubegamingIcon,
  FaHomeIcon,
  MdPlaylistAddIcon,
  ModalMenuCloseBtn,
} from './style'

const Navbar = props => (
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
        onToggleTheme,
        onBlurAdd,
        onRemoveBlur,
      } = value

      const onClickToLogout = () => {
        const {history} = props
        onRemoveBlur()
        Cookies.remove('jwt_token')
        history.replace('/login')
      }
      const onClickToSwitchMode = () => {
        onToggleTheme()
      }

      const onClickToAddBlur = () => {
        onBlurAdd()
      }

      const onClickToRemoveBlur = () => {
        onRemoveBlur()
      }

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
        <Nav theme={isDarkTheme}>
          {isDarkTheme ? (
            <Link className="imgLink" to="/">
              <LogoImg
                theme={isDarkTheme}
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                alt="website logo"
              />
            </Link>
          ) : (
            <Link className="imgLink" to="/">
              <LogoImg
                theme={isDarkTheme}
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                alt="website logo"
              />
            </Link>
          )}

          <NavRightSideContainer>
            <NavButtonIcon
              theme={isDarkTheme}
              type="button"
              data-testid="theme"
              onClick={onClickToSwitchMode}
            >
              <VscColorMode />
            </NavButtonIcon>
            <ProfileImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt=" profile"
            />
            <DisplayContainer theme={isDarkTheme}>
              <Popup
                trigger={
                  <IconButton
                    theme={isDarkTheme}
                    type="button"
                    aria-label="Hamburgar Menu"
                  >
                    <GiHamburgerMenu />
                  </IconButton>
                }
                modal
              >
                {close => (
                  <ModalMenuContainer theme={isDarkTheme}>
                    <ModalMenuCloseBtn
                      theme={isDarkTheme}
                      className="close"
                      onClick={close}
                    >
                      <IoClose />
                    </ModalMenuCloseBtn>
                    <NavigatingSectionLinks>
                      <Link
                        className="navLinks"
                        onClick={onClickToSwitchHome}
                        to="/"
                      >
                        <Li value={isHome} theme={isDarkTheme}>
                          <FaHomeIcon className="icon" />{' '}
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
                          <FaFireIcon className="icon" />{' '}
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
                          <SiYoutubegamingIcon className="icon" />{' '}
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
                          <MdPlaylistAddIcon className="icon" />{' '}
                          <Para theme={isDarkTheme} className="text" link>
                            Saved Videos
                          </Para>
                        </Li>
                      </Link>
                    </NavigatingSectionLinks>
                  </ModalMenuContainer>
                )}
              </Popup>
            </DisplayContainer>
            <DisplayContainer theme={isDarkTheme}>
              <Popup
                trigger={
                  <IconButton
                    theme={isDarkTheme}
                    aria-label="trigger button"
                    type="button"
                  >
                    <IoIosLogOut />
                  </IconButton>
                }
                modal
                onOpen={onClickToAddBlur}
                onClose={onClickToRemoveBlur}
              >
                {close => (
                  <ModalContainer theme={isDarkTheme}>
                    <ModalPara theme={isDarkTheme}>
                      Are you sure, you want to logout
                    </ModalPara>
                    <div className="buttonsContainer">
                      <ModalButton
                        theme={isDarkTheme}
                        className="close"
                        type="button"
                        onClick={close}
                      >
                        Cancel
                      </ModalButton>
                      <ModalButton
                        bgcolor
                        type="button"
                        onClick={onClickToLogout}
                      >
                        Confirm
                      </ModalButton>
                    </div>
                  </ModalContainer>
                )}
              </Popup>
            </DisplayContainer>
            <Popup
              trigger={
                <NavButton aria-label="trigger button" type="button">
                  Logout
                </NavButton>
              }
              modal
              onOpen={onClickToAddBlur}
              onClose={onClickToRemoveBlur}
            >
              {close => (
                <ModalContainer theme={isDarkTheme}>
                  <ModalPara theme={isDarkTheme}>
                    Are you sure, you want to logout
                  </ModalPara>
                  <div className="buttonsContainer">
                    <ModalButton
                      theme={isDarkTheme}
                      className="close"
                      type="button"
                      onClick={close}
                    >
                      Cancel
                    </ModalButton>
                    <ModalButton
                      bgcolor
                      type="button"
                      onClick={onClickToLogout}
                    >
                      Confirm
                    </ModalButton>
                  </div>
                </ModalContainer>
              )}
            </Popup>
          </NavRightSideContainer>
        </Nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(Navbar)
