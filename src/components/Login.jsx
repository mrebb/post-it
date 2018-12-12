import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { login,logout } from '../store/actions/auth-action';
import configuredUsers from '../data/users';

class Login extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      username: '',
      password: '',
      redirect: false,
    };
    this.state = { ...this.initialState };
  }
  componentDidMount(){
    if(this.props.auth.isLoggedIn){
      this.props.logout();
    }
  }
  onChange = event => {
    const changedBit = {
      [event.target.name]: event.target.value,
    };
    this.setState(changedBit);
  };

  onSubmit = event => {
    event.preventDefault();
    if (this.validateUser(this.state.username)) {
      this.props.login(this.state.username);
      this.setState({ redirect: true });
    } else {
      alert('invalid user account');
      this.setState({ ...this.initialState });
    }
  };

  validateUser = currentUser => {
    return configuredUsers.filter(user => user.username === currentUser)
      .length > 0
      ? true
      : false;
  };
  render() {
    return (
      <Fragment>
        <form
          onSubmit={this.onSubmit}
          autoComplete="off"
        >
          <TextField
            required
            label="Username"
            placeholder="johndoe"
            value={this.state.username}
            margin="normal"
            name="username"
            onChange={this.onChange}
          />
          <br />
          <TextField
            label="Password"
            placeholder="@wesome"
            value={this.state.password}
            margin="normal"
            name="password"
            onChange={this.onChange}
          />
          <br />
          <Button
            label="Submit"
            style={{
              margin: 15,
            }}
            type="submit"
            variant="contained"
            color="primary"
          >
            Login
          </Button>
        </form>
        {this.state.redirect && <Redirect to="/dashboard" />}
      </Fragment>
    );
  }
}
const mapStateToProps = ({ authState }) => ({ auth: authState });
const mapDispatchToProps = { login, logout };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
