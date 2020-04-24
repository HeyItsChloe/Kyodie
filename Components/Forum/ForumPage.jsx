import React, { Component } from 'react';
import ForumContainer from './ForumContainer.jsx';

class ForumPage extends Component {
    constructor(props){
        super(props) 
        this.state = {
            all: []
        }
        this.getComments = this.getComments.bind(this)
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

    render () {
        console.log('state in fpage', this.state)
        let returnVal = []
        this.state.all.length > 0 ? returnVal.push(<ForumContainer props={this.state.all} />) : null
        return (
            <div >
                {returnVal}
            </div>
        )
    }
}

export default ForumPage;