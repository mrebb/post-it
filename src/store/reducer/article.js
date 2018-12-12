import {ADD,UPDATE,DELETE,FETCH,FETCH_ALL,POST_COMMENT, VOTE_ARTICLE} from '../actions/article-action.js';
import articlesJSON from '../../data/articles.json';

!window.localStorage.getItem('articles') &&
  window.localStorage.setItem('articles', JSON.stringify(articlesJSON));

let initialState = JSON.parse(window.localStorage.getItem('articles'));

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
  case ADD:{
    let articlesLocal = [...state, payload];
    window.localStorage.setItem(
      'articles',
      JSON.stringify(articlesLocal)
    );
    return [...articlesLocal];
  }
  case UPDATE: {
    const updatedState = state.filter(article => article.id !== payload.id);
    let articlesLocal = [...updatedState, payload];
    window.localStorage.setItem(
      'articles',
      JSON.stringify(articlesLocal)
    );
    return [...articlesLocal];
  }
  case POST_COMMENT: {
    let articlesLocal = [...state];
    articlesLocal.map(e=>{
      if(e.id === payload.article.id){
        e.comments.push(payload.comment);
        e.num_comments = e.num_comments + 1;
      }
      return null;
    });
    window.localStorage.setItem(
      'articles',
      JSON.stringify(articlesLocal)
    );
    return [...articlesLocal];
  }
  case VOTE_ARTICLE: {
    console.log('updated set',payload);
    let articlesLocal = [...state];
    articlesLocal.map(e=>{
      if(e.id === payload.id){
        e.num_votes = e.num_votes + 1;
      }
      return null;
    });
    window.localStorage.setItem(
      'articles',
      JSON.stringify(articlesLocal)
    );
    return [...articlesLocal];
  }
  case DELETE: {
    const newState = state.filter(article => article.id !== payload.id);
    return [...newState];
  }

  case FETCH: {
    const fetchState = state.filter(article => article.id === payload.id);
    return [...fetchState];
  }
  case FETCH_ALL:
    return [...state];

  default:
    return state;
  }
};
