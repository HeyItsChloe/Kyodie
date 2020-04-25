import React, {Component} from 'react';
import Header from '../Header.jsx';
import Footer from '../Footer.jsx';
import forumStyles from './forumStyles.scss';
import ForumContainer from './ForumContainer.jsx';

class Forum extends Component {
    constructor (props){
        super(props)
        this.state = {
            title: '',
            comment: '',
            all: []
        }
        this.getComments = this.getComments.bind(this)
        this.postText = this.postText.bind(this)
    }

    componentDidMount () {
        this.getComments()
    }

    /* GET all comments from DB and pass them as props to the ForumContainer.jsx */
    getComments () {
        fetch('/api/forum/:id', {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        .then(res => res.json())
        .then(res => {
            console.log("res in get this.getComments", res)
            let alls = []
            for (let i=0; i<res.length; i++){
                alls.push({title:res[i].title, comment:res[i].comment, commentId:res[i]._id, userId:res[i].user_id})
            }
            this.setState({
                all: alls,
            }, () => {console.log('post a comment')})
        })
        .catch(err => console.log(err))
    }

    /* Send POST request to BD and append comment to document (invoke getComments) */
    postText () {
        let newText = document.getElementById('inputTitle').value
        let newTitle = document.getElementById('inputText').value
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


    render () {
        let returnVal = []
        this.state.all.length > 0 ? returnVal.push(<ForumContainer props={this.state.all} func={this.getComments} />) : null
        
        return (
            <div>
                <Header/>
                <div className='container-fluid'>
                    <div className='row'>
                        <div id='comments' className='col-sm'>
                            <div>
                                <h3>Post A Comment With The KYODIE Community</h3>
                                {returnVal}
                            </div>
                            <div>
                                <input id='inputTitle' placeholder='title of post' onChange={this.handleChange}></input>
                                <textarea id='inputText' placeholder='enter message here' onChange={this.handleChange}></textarea>
                                <button onClick={this.postText}>Submit</button>
                            </div>
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