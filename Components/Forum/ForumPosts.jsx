import React, { Component } from 'react';

class ForumPosts extends Component {
    deleteComment () {
        let commentId = document.getElementById('delete').value
        console.log('id in delete comment', commentId)

        // fetch(`/api/forum/${commentId}`, {
        //     method: 'DELETE',
        //     headers: {'Content-Type': 'Application-Json'},
        // })
        //.then(() => this.getComments())
    }

    /* Send POST request to BD and append comment to document (invoke getComments) */
    // postReply () {
    //     let replyText = document.getElementById('replyText').value
    //     let replyTitle = document.getElementById('replyTitle').value
    //     //let repliedID = document.getElementById('index').value

    //     fetch('/api/forum/:id', {
    //         method: 'POST',
    //         headers: {'Content-Type': 'applcation/json'},
    //         body: JSON.stringify({
    //             title: replyTitle,
    //             comment: replyText,

    //             //'repliedID': repliedID
    //         })
    //     })
    //     .then(() => this.getComments())
    // }

    render () {
        let eachPost = this.props.eachPost
        console.log('props in fp', eachPost)
        return (
            <div>
                <div> 
                    <p>Title: {eachPost.title}</p>
                    <p>Comment: {eachPost.comment}</p>
                    <button id='delete' value={eachPost.commentId} onClick={this.deleteComment} >Delete</button> 
                    <button id='button' onClick={this.replyClicked} >Reply</button>
                </div>

                {/* {replyBClicked === true ?
                    <div>
                        <input id='replyText' placeholder='replyText'></input> 
                        <input id='replyTitle' placeholder='replyTitle'></input>
                        <button onClick={this.postReply}>Submit</button>
                    </div> : null
                } */}
            </div>
        )
    }
}
export default ForumPosts;