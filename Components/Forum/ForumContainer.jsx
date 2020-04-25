import React, { Component } from 'react';
import ForumPosts from './ForumPosts.jsx';

class ForumContainer extends Component {
    render () {
        let everything = this.props.props;
        let postArray = [];
        for (let i=0; i<everything.length; i++) {
            postArray.push(
                <ForumPosts eachPost={everything[i]} key={i} getComments={this.props.func} />
            )
        };
        return (
            <div className='commentsByName'>
                {postArray}
            </div>
        )
    }
}
export default ForumContainer;