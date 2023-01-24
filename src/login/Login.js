import React, { Component } from 'react';
import { HttpStatusCode } from "axios";
class Login extends Component {
  state = {
    username: '',
    password: '',
    errormsg: ''
  };
  handleSubmit = event => {
    event.preventDefault();

    const url = 'https://fakestoreapi.com/auth/login '
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    };
    fetch(url, requestOptions)
      .then(response => {
        console.log('Submitted successfully')
        if (response.status === HttpStatusCode.Ok) {
          window.location = "/productlist"
        }
        if (response.status === HttpStatusCode.Unauthorized) {
          this.setState({
            errormsg: 'Invalid Username or Password'
          });
        }
      })
      .catch(error => console.log('Form submit error', error))
  };

  handleUsername = event => {
    console.log(event.target.value);
    this.setState({
      username: event.target.value
    });

  }
  handlePassword = event => {
    console.log(event.target.value);
    this.setState({
      password: event.target.value
    });

  }
  render() {
    return (
      <center>
        <div class="row">
          <div class="span12">
            <form class="form-horizontal" onSubmit={this.handleSubmit} >
              <fieldset>
                <div id="legend">
                  <legend class="">Login</legend>
                </div>
                <div class="control-group">
                  <label class="control-label" for="username">Username</label>
                  <div class="controls">
                    <input type="text" name="username" placeholder="Enter username" class="input-xlarge" onChange={this.handleUsername} />
                  </div>
                </div>
                <div class="control-group">
                  <label class="control-label" for="password">Password</label>
                  <div class="controls">
                    <input type="password" name="password" placeholder="Enter password " class="input-xlarge" onChange={this.handlePassword} />
                  </div>
                </div>

                <div class="control-group">

                  <div class="controls">
                    {'\n'}
                    <button class="btn btn-success" type="submit" >Login</button>
                  </div>
                </div>
                {this.state.errormsg ? <h5>{this.state.errormsg}</h5> : null}
              </fieldset>
            </form>
          </div>
        </div>
      </center>

    );
  }
}
export default Login;