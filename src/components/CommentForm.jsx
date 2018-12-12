import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import '../components/styles/CommentForm.scss';

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
    };
  }
  onChange = event => {
    const changedBit = {
      [event.target.name]: event.target.value,
    };
    this.setState(changedBit);
  };
  onSubmit = event => {
    event.preventDefault();
    this.props.onComplete(this.state.comment);
    this.setState({ comment: '' });
  };
  render() {
    return (
      <form
        className="comment-form"
        onSubmit={this.onSubmit}
        autoComplete="off"
      >
        <textarea
          required
          name="comment"
          maxLength="160"
          value={this.state.comment}
          onChange={this.onChange}
          placeholder="write comment (160 characters max)..."
        />
        <Button
          label="Submit"
          id="sendBtn"
          type="submit"
          variant="contained"
          color="primary"
        >
          Send
        </Button>
      </form>
    );
  }
}

export default CommentForm;
