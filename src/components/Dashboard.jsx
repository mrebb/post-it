import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Article from './Articles';
import ArticleForm from './ArticleForm';
import Button from '@material-ui/core/Button';
import { logout } from '../store/actions/auth-action';
import {addArticle} from '../store/actions/article-action';
import SideMenu from './SideMenuBar';
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      reload: false,
    };
  }

  onClick = event => {
    this.props.logout();
    this.setState({ redirect: true });
    window.location.reload();
  };

  postArticle = article => {
    this.props.addArticle(article);
  };

  render() {
    return this.props.auth.isLoggedIn ? (
      <Fragment>
        <SideMenu signout={this.onClick}/>
        <Button
          label="Submit"
          style={{
            margin: 15,
          }}
          onClick={this.onClick}
          type="submit"
          variant="contained"
          color="primary"
        >
          Logout
        </Button>
        <section id="home">
          <h1>Welcome to POST-IT</h1>
          <ArticleForm onComplete={this.postArticle} buttonText="CREATE POST" />
          {this.props.articles.length > 0 ? (
            <ul>
              {this.props.articles
                .sort((a, b) => b.num_votes - a.num_votes)
                .map((article, i) => {
                  return <Article key={article.id || i} article={article} />;
                })}
            </ul>
          ) : (
            <h2>No Articles :(</h2>
          )}
        </section>
        {this.state.redirect && <Redirect to="/" />}
      </Fragment>
    ) : (
      <Redirect to="/" />
    );
  }
}
const mapStateToProps = state => ({
  auth: state.authState,
  articles: state.articleState,
});
const mapDispatchToProps = { addArticle,logout };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
