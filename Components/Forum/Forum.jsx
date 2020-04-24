import React, {Component} from 'react';
import Header from '../Header.jsx';
import Footer from '../Footer.jsx';
import forumStyles from './forumStyles.scss';
import ForumPage from './ForumPage.jsx';

class Forum extends Component {
    constructor (props){
        super(props)
        this.postText = this.postText.bind(this)
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
    }

    render () {
        return (
            <div>
                <Header/>
                <div className='container-fluid'>
                    <div className='row'>
                        <div id='comments' className='col-sm'>
                            <div>
                                <h3>Post A Comment With The KYODIE Community</h3>
                                <ForumPage/>
                            </div>
                            <div>
                                <input id='inputTitle' placeholder='title of post'></input>
                                <textarea id='inputText' placeholder='enter message here'></textarea>
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