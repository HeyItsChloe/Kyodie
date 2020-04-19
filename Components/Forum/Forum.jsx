import React, {Component} from 'react';
import Header from '../Header.jsx';
import Footer from '../Footer.jsx';
import forumStyles from './forumStyles.scss';

class Forum extends Component {
    constructor(props){
        super(props) 
        this.state = {
            both: [],
            replyButtonClicked: false,
            box: null
        }
        this.getComments = this.getComments.bind(this)
        this.postText = this.postText.bind(this)
        this.postReply = this.postReply.bind(this)
        this.replyClicked = this.replyClicked.bind(this)
        this.deleteComment = this.deleteComment.bind(this)
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
                both.push({0:res[i].title, 1:res[i].comment, 2:res[i]._id})
            }
            console.log('botha', both)
            this.setState({
                both: both
            })
        })
    }

    /* Send POST request to BD and append comment to document (invoke getComments) */
    postText () {
        let newText = document.getElementById('inputText').value
        let newTitle = document.getElementById('inputTitle').value
        fetch('/api/forum/:id', {
            method: 'POST', 
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({
                title: newTitle, 
                comment: newText,
                userName: this.props.location.state.userName,
                password: this.props.location.state.password
            })
        })
        .then(() => this.getComments())
    }

    deleteComment () {
        let commentId = document.getElementById('delete').value
        fetch(`/api/forum/${commentId}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'Application-Json'},
        })
        .then(() => this.getComments())
    }

    /* Send POST request to BD and append comment to document (invoke getComments) */
    postReply () {
        let replyText = document.getElementById('replyText').value
        let replyTitle = document.getElementById('replyTitle').value
        //let repliedID = document.getElementById('index').value

        fetch('/api/forum/:id', {
            method: 'POST',
            headers: {'Content-Type': 'applcation/json'},
            body: JSON.stringify({
                title: replyTitle,
                comment: replyText,

                //'repliedID': repliedID
            })
        })
        .then(() => this.getComments())
    }

    render () {
        let both = this.state.both
        let replyBClicked = this.state.replyButtonClicked
        return (
            <div>
                <Header/>
                <div className='container-fluid'>
                    <div className='row'>
                        <div id='comments' className='col-sm'>
                            <h3>Post A Comment With The KYODIE Community</h3>
                            <div className='commentsByName'>
                                {both.map((both, index) => 
                                <div id='eachPost' className='eachPost' key={index}>
                                    {[both[0], ' ', both[1]]} <br></br>
                                    <button key={index} id='delete' value={both[2]} onClick={this.deleteComment}>Delete</button>
                                    <button id='button' onClick={this.replyClicked}>Reply</button>
                                </div>
                                )}
                            </div>

                            {replyBClicked === true ?
                                <div>
                                    <input id='replyText' placeholder='replyText'></input> 
                                    <input id='replyTitle' placeholder='replyTitle'></input>
                                    <button onClick={this.postReply}>Submit</button>
                                </div> : null
                            }

                            <input id='inputTitle' placeholder='title of post'></input>
                            <textarea id='inputText' placeholder='enter message here'></textarea>
                            <button onClick={this.postText}>Submit</button>
                        </div>
                        <div id='sidebar' className='col-sm'>
                            <img className='forumPic'
                            src={require('/Users/c.aribo/Desktop/kyodie-backend/assets/images/forum.jpg')}>
                            </img>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Forum;