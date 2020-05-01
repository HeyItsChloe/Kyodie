import React, { Component } from 'react';

class ForumPosts extends Component {
    constructor(props){
        super(props) 
    };

    deleteComment (event) {
        let commentId = event.target.value;
        fetch(`/api/forum/${commentId}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'Application-Json'},
        })
        .then(() => this.props.getComments())
    };

    render () {
        let eachPost = this.props.eachPost;
        return (
            <div>
                <div className='eachPost'> 
                    <p><b>Title:</b> {eachPost.title}</p>
                    <p><b>Comment:</b> {eachPost.comment}</p>
                    <button id='button' value={eachPost.commentId} onClick={(event) => this.deleteComment(event)} >Delete</button> 
                </div>
            </div>
        )
    }
}
export default ForumPosts;