import React, {Component} from 'react';

class Forum extends Component {
    constructor(props){
        super(props) 
        this.state = {
            commentsByName: [],
            replyButtonClicked: false,
            box: null
        }
        this.getComments = this.getComments.bind(this)
        this.postText = this.postText.bind(this)
        this.postReply = this.postReply.bind(this)
        this.replyClicked = this.replyClicked.bind(this)
        //this.deleteComment = this.deleteComment.bind(this)
    }

    componentDidMount() {
        this.getComments()
    }

    replyClicked () {            
        this.setState({
           replyButtonClicked: true
        })
    }

    /* GET all comments from DB and diplay them */
    getComments () {
        fetch('/api/forum/:id', {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        .then(res => res.json())
        .then(res => {
            let both= []
            for (let i=0; i<res.length; i++){
                both.push([res[i].name, ' ', res[i].comment])
            }
            this.setState({
                commentsByName: both
            })
        })
    }

    /* Send POST request to BD and append comment to document (invoke getComments) */
    postText () {
        let newText = document.getElementById('inputText').value
        let newName = document.getElementById('inputName').value

        fetch('/api/forum/:id', {
            method: 'POST', 
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({'name': newName, 'comment': newText})
        })
        .then(() => this.getComments())
    }

    /* Send POST request to BD and append comment to document (invoke getComments) */
    postReply () {
        let replyText = document.getElementById('replyText').value
        let replyName = document.getElementById('replyName').value
        //let repliedID = document.getElementById('index').value

        fetch('/api/forum/:id', {
            method: 'POST',
            headers: {'Content-Type': 'applcation/json'},
            body: JSON.stringify({
                'name': replyName,
                'comment': replyText,
                //'repliedID': repliedID
            })
        })
        .then(() => this.getComments())
    }

    render () {
        let commentsAndNames = this.state.commentsByName
        let replyBClicked = this.state.replyButtonClicked

        return (
            <div>
                <h1>Post In The Forum Here</h1>
                <div className='commentsByName'>
                    {commentsAndNames.map((both, index) => 
                    <div value={both} id={index}>
                        {both}
                        <button onClick={this.deleteComment}>Delete</button>
                        <button id='button' key={index} onClick={this.replyClicked}>Reply</button>

            
                    </div>
                    )}
                </div>

                    {replyBClicked === true ?
                        <div>
                            <input id='replyText' placeholder='replyText'></input> 
                            <input id='replyName' placeholder='replyName'></input>
                            <button onClick={this.postReply}>Submit</button>
                        </div> : null
                    }

                <input id='inputName' placeholder='enter name here'></input>
                <input id='inputText' placeholder='enter message here'></input>
                <button onClick={this.postText}>Submit</button>
            </div>
        )
    }
}

export default Forum;