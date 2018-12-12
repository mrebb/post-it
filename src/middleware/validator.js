const validator = store=>next=>action=> {
  if(action.type==='LOGIN'){
    if(action.payload.name===''){
      alert('Error: user name should not be left blank');
    }
    else{
      let result = next(action);
      return result;
    }
  }
  else if(action.type==='POST_COMMENT'){
    if(action.payload.comment.comment === ''){
      alert('Error: comment field should not be left blank');
    }
    else{
      let result = next(action);
      return result;
    }
  }
  else if(action.type==='VOTE_ARTICLE'){
    if(!action.payload.id){
      alert('Error: article id should not be null');
    }
    else{
      let result = next(action);
      return result;
    }
  }
  else{
    let result = next(action);
    return result;
  }
};
 
export default validator;
