import React, { useState, useMemo } from 'react';
import './App.css';

import Comments from './components/comments';
import Comment from './components/comment';
import CommentContext from './context/comment-context';

function App() {

  const [message, setMessage] = useState("Hello world!");
  const messageMemo = useMemo(() => ({message, setMessage}), [message, setMessage]);
  return(
    <CommentContext.Provider value={messageMemo}>
      <Comments />
      <Comment />
    </CommentContext.Provider>
  )
}

export default App;
