import React, {useContext} from 'react';
import CommentContext from '../context/comment-context';

const Comment = () => {

    const {message} = useContext(CommentContext);

    return(
        <div>
            <p>{message}</p>
        </div>
    )
}

export default Comment