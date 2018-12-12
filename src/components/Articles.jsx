import React, { Fragment, Component } from 'react';
import './styles/Articles.scss';
import { connect } from 'react-redux';
import {
  postArticleComment,
  voteArticle,
} from '../store/actions/article-action';
import CommentForm from './CommentForm';
import Comments from './Comments';
import users from '../data/users';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp } from '@fortawesome/free-solid-svg-icons';

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadComments: false,
      fullName: '',
      articles: this.props.articles,
    };
  }

  componentDidMount() {
    const user = users.filter(
      user => user.username === this.props.auth.username
    );
    const fullName = user.length > 0 ? user[0].fullname : null;
    this.setState({ fullName });
  }

  showComments = () => {
    let current = this.state.loadComments;
    this.setState({ loadComments: !current });
  };

  onChange = event => {
    const changedBit = {
      [event.target.name]: event.target.value,
    };
    this.setState(changedBit);
  };

  insertComment = data => {
    const payload = {};
    payload.article = this.props.article;
    payload.comment = { comment: data, commentedBy: this.state.fullName };
    this.props.postArticleComment(payload);
  };

  vote = () => {
    const payload = this.props.article;
    this.props.voteArticle(payload);
  };

  id = () => {
    return (
      '_' +
      Math.random()
        .toString(36)
        .substr(2, 9)
    );
  };

  render() {
    return (
      <div className="article-container">
        <li>
          <i onClick={this.vote}>
            <FontAwesomeIcon
              size="2x"
              style={{ cursor: 'pointer', marginRight: '95%' }}
              className="font-awesome"
              icon={faSortUp}
            />
          </i>
          <p className="article-votes">{this.props.article.num_votes}</p>
          <div className="article-title" style={{ display: 'flex' }}>
            <h4 className="title">
              {this.props.article.title}
              <span>
                <a
                  id="article-link"
                  target="_blank"
                  style={{marginLeft:'8%',fontSize: '0.3em'}}
                  rel="noopener noreferrer"
                  href={this.props.article.link}
                >
                  {this.props.article.link}
                </a>
              </span>
            </h4>
            <p onClick={this.showComments} className="article-comments">
              {this.props.article.num_comments} comments
            </p>
          </div>
          {this.state.loadComments && this.props.article.comments.length > 0 && (
            <Fragment>
              <div className="article-comments-section">
                <Comments comments={this.props.article.comments} />
                <CommentForm onComplete={this.insertComment} />
              </div>
            </Fragment>
          )}
          {this.state.loadComments &&
            this.props.article.comments.length === 0 && (
            <CommentForm onComplete={this.insertComment} />
          )}
        </li>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.authState,
  articles: state.articleState,
});
const mapDispatchToProps = { postArticleComment, voteArticle };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Article);
