import React from 'react';
import avatar from '../data/assets/avatar.png';
import '../components/styles/Comments.scss';

const comments = props => {
  return (
    <ul>
      {props.comments.map((e, i) => {
        return (
          <div key={i} className="comments-container">
            <li key={i * 2 * i}>
              <br />
              <span className="person">
                <img className="avatar" alt="avatar" src={avatar} />
                {e.commentedBy}
              </span>
              <br />
              <span className="comment">{e.comment}</span>
            </li>
          </div>
        );
      })}
    </ul>
  );
};

export default comments;
