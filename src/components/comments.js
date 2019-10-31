import React, {useContext} from 'react';
import CommentContext from '../context/comment-context';

const Comments = () => {

    const {message, setMessage} = useContext(CommentContext);

    const changeMessage = (msg) => {
        setMessage(() => msg);
    }

    return(
        <div>
            <p onClick={() => changeMessage("How are you doing?")}>{message}</p>
        </div>
    )
}

export default Comments