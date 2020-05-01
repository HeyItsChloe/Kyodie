import React, { Component } from 'react';
import { Button } from '@material-ui/core';

class ForumPosts extends Component {
    constructor(props){
        super(props) 
    };

    deleteComment (event, index) {
        let commentId = event.target.value;
        console.log('deleting', event.target, event.target.value)
        fetch(`/api/forum/${commentId}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'Application-Json'},
        })
        .then(() => this.props.getComments())
    };

    render () {
        let eachPostTitle = this.props.eachPost.title;
        let eachPostComment = this.props.eachPost.comment;
        let eachPostId = this.props.eachPost.commentId;
        return (
            <div>
                <div className='eachPost'> 
                    <p><b>Title:</b> {eachPostTitle}</p>
                    <p><b>Comment:</b> {eachPostComment}</p>
                    <button id='button' value={eachPostId} onClick={(event) => this.deleteComment(event)} >Delete</button> 
                </div>
            </div>
        )
    }
}
export default ForumPosts;