import React,{Fragment,Component} from 'react';
import {Link} from 'react-router-dom';
import { bubble as MenuBar } from 'react-burger-menu';
import Button from '@material-ui/core/Button';
import './styles/SideMenuBar.scss';

export default class SideMenuBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
    };
  }

  onClick = event => {
    this.handleClose();
    this.props.signout();
  }
  
  handleStateChange = state => {
    this.setState({ isMenuOpen: state.isOpen });
  };

  handleClose = () => {
    this.setState({ isMenuOpen: false });
  };

  render() {
    return (
      <MenuBar
        isOpen={this.state.isMenuOpen}
        onStateChange={state => this.handleStateChange(state.isOpen)}
        id={'sidebar'}
        className={'my-menu'}
        
        width={'55%'}
      >
        <Fragment>
          <Button
            label="Submit"
            style={{
              margin: 15,
            }}
            type="submit"
            variant="contained"
            color="primary"
            onClick = {this.onClick}
          >
            Logout
          </Button>
        </Fragment>
        <Link onClick={() => this.handleClose()} to="/dashboard">
          Home
        </Link>
      </MenuBar>
    );
  }
}
