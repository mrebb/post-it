// Actions for Article reducer
export const ADD = 'ADD';
export const UPDATE = 'UPDATE';
export const DELETE = 'DELETE';
export const FETCH = 'FETCH';
export const FETCH_ALL = 'FETCH_ALL';
export const POST_COMMENT = 'POST_COMMENT';
export const VOTE_ARTICLE = 'VOTE_ARTICLE';

//Action creators for Article reducer
export const addArticle=(article)=>{
  return {
    type:ADD,
    payload: article,
  };
};
export const updateArticle=(article)=>{
  return {
    type:UPDATE,
    payload: article,
  };
};
export const postArticleComment=(data)=>{
  return {
    type:POST_COMMENT,
    payload: data,
  };
};
export const voteArticle=(data)=>{
  return {
    type:VOTE_ARTICLE,
    payload: data,
  };
};
export const deleteArticle=(article)=>{
  return {
    type:DELETE,
    payload: article,
  };
};
export const fetchArticle=(article)=>{
  return {
    type:FETCH,
    payload: article,
  };
};
export const fetchAllArticles=()=>{
  return {
    type:FETCH_ALL,
  };
};