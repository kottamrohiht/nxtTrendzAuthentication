import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    errMsg: '',
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onsubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const url = 'https://apis.ccbp.in/login'
    const userObj = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userObj),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      this.onSubmitSuccess()
    } else {
      this.setState({
        errMsg: data.error_msg,
      })
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  renderPasswordInputFeild = () => {
    const {password} = this.state
    return (
      <>
        <label htmlFor="password" className="label-username">
          PASSWORD
        </label>
        <input
          type="password"
          value={password}
          id="password"
          onChange={this.onChangePassword}
          className="inputEl"
          placeholder="Enter Password"
        />
      </>
    )
  }

  renderUsernameInputFeild = () => {
    const {username} = this.state

    return (
      <>
        <label htmlFor="username" className="label-username">
          USERNAME
        </label>
        <input
          type="text"
          value={username}
          id="username"
          onChange={this.onChangeUsername}
          className="inputEl"
          placeholder="Enter Username"
        />
      </>
    )
  }

  renderLoginFeid = () => {
    const {errMsg} = this.state
    const showErrMsg = errMsg !== '' ? errMsg : ''

    const websiteLogo =
      'https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png'
    const websiteLogin =
      'https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png'

    return (
      <div className="login-feild-container">
        <img src={websiteLogin} alt="website login" className="websiteLogin" />

        <form
          id="formEl"
          autoComplete="on"
          className="form-container"
          onSubmit={this.onsubmitForm}
        >
          <div className="websiteLogo-container">
            <img
              src={websiteLogo}
              alt="website logo"
              className="input-websiteLogo"
            />
          </div>

          {this.renderUsernameInputFeild()}
          {this.renderPasswordInputFeild()}
          <button type="submit" className="submit-button">
            Login
          </button>
          <div className="showErrMsg-container">
            <p className="showErrMsg"> {showErrMsg} </p>
          </div>
        </form>
      </div>
    )
  }

  render() {
    return <div className="login-container">{this.renderLoginFeid()}</div>
  }
}

export default LoginForm
