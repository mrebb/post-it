import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './styles/ArticleForm.scss';

class ArticleForm extends Component {
  constructor(props) {
    super(props);
    this.defaultState = {
      title: '',
      link: '',
      thumbnail: '',
      id: '',
      isPosted:false,
    };

    const initialState = this.defaultState;

    this.state = { ...initialState };
  }
  id = () => {
    return (
      '_' +
      Math.random()
        .toString(36)
        .substr(2, 9)
    );
  };
  onSubmit = event => {
    event.preventDefault();
    const obj = {};
    obj.id = this.id();
    obj.title = this.state.title;
    obj.link = this.state.link;
    obj.thumbnail = this.state.thumbnail;
    obj.comments = [];
    obj.num_comments = 0;
    obj.num_votes = 0;
    this.props.onComplete(obj);
    this.setState({ ...this.defaultState,isPosted:true });
  };

  onChange = event => {
    const changedBit = {
      [event.target.name]: event.target.value,
    };
    this.setState(changedBit);
  };

  render() {
    return (
      <div className = "article-form-container">
        <form onSubmit={this.onSubmit} autoComplete="off">
          <TextField
            required
            label="Title"
            placeholder="Title.."
            value={this.state.title}
            margin="normal"
            name="title"
            onChange={this.onChange}
          />
          <br />
          <TextField
            required
            label="Link"
            placeholder="URL.."
            value={this.state.link}
            margin="normal"
            name="link"
            onChange={this.onChange}
          />
          <br />
          <TextField
            label="Thumbnail"
            placeholder="Thumbnail URL.."
            value={this.state.thumbnail}
            margin="normal"
            name="thumbnail"
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
            {this.props.buttonText}
          </Button>
        </form>
        {this.state.isPosted && <p style={{color:'green'}}>Successfully posted!!</p>}
      </div>
    );
  }
}

ArticleForm.propTypes = {
  onComplete: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  article: PropTypes.object,
};

export default ArticleForm;
