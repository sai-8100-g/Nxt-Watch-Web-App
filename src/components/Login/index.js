import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import ThemeContext from '../../themeContext/ThemeContext'
import {
  LoginContainer,
  FormContainer,
  HoldingContainer,
  Img,
  Input,
  Label,
  Button,
  Para,
} from './style'

const msg = 'Required'

class Login extends Component {
  state = {
    nameError: '',
    codeError: '',
    username: '',
    password: '',
    fetchError: '',
    showPassword: false,
  }

  onSuccessfullLogin = token => {
    const {history} = this.props
    Cookies.set('jwt_token', token, {expires: 3})
    history.replace('/')
  }

  onFailureLogin = errorMsg => {
    this.setState({fetchError: errorMsg})
  }

  onSubmitUserDetails = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      this.onSuccessfullLogin(data.jwt_token)
    } else {
      this.onFailureLogin(data.error_msg)
    }
  }

  onBlurUserName = event => {
    if (event.target.value === '') {
      this.setState({nameError: msg})
    } else {
      this.setState({nameError: ''})
    }
  }

  onBlurPassword = event => {
    if (event.target.value === '') {
      this.setState({codeError: msg})
    } else {
      this.setState({codeError: ''})
    }
  }

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeShowPassword = event => {
    this.setState({showPassword: event.target.checked})
  }

  renderImg = () => {
    const {isDarkTheme} = this.context
    return isDarkTheme ? (
      <Img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
        alt="website logo"
      />
    ) : (
      <Img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
        alt="website logo"
      />
    )
  }

  renderUserName = () => {
    const {nameError, username} = this.state
    const {isDarkTheme} = this.context
    console.log(isDarkTheme)
    return (
      <>
        <Label htmlFor="username" theme={isDarkTheme}>
          USERNAME
        </Label>
        <Input
          id="username"
          theme={isDarkTheme}
          value={username}
          onBlur={this.onBlurUserName}
          onChange={this.onChangeUserName}
          type="text"
          placeholder="USERNAME"
        />
        {nameError && <Para>{nameError}*</Para>}
      </>
    )
  }

  renderPassword = () => {
    const {codeError, password, showPassword} = this.state
    const {isDarkTheme} = this.context
    const type = showPassword ? 'text' : 'password'
    return (
      <>
        <Label htmlFor="password" theme={isDarkTheme}>
          PASSWORD
        </Label>
        <Input
          id="password"
          theme={isDarkTheme}
          value={password}
          onBlur={this.onBlurPassword}
          onChange={this.onChangePassword}
          type={type}
          placeholder="PASSWORD"
        />
        {codeError && <Para>{codeError}*</Para>}
        <div>
          <input
            type="checkbox"
            id="checkbox"
            onChange={this.onChangeShowPassword}
          />
          <Label htmlFor="checkbox" theme={isDarkTheme}>
            Show Password
          </Label>
        </div>
      </>
    )
  }

  renderButton = () => {
    const {fetchError} = this.state
    return (
      <>
        <Button type="submit">Login</Button>
        {fetchError && <Para>*{fetchError}</Para>}
      </>
    )
  }

  render() {
    const {isDarkTheme} = this.context
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <LoginContainer theme={isDarkTheme}>
        <FormContainer onSubmit={this.onSubmitUserDetails} theme={isDarkTheme}>
          <div>{this.renderImg()}</div>
          <HoldingContainer>{this.renderUserName()}</HoldingContainer>
          <HoldingContainer>{this.renderPassword()}</HoldingContainer>
          <HoldingContainer>{this.renderButton()}</HoldingContainer>
        </FormContainer>
      </LoginContainer>
    )
  }
}

Login.contextType = ThemeContext

export default Login
