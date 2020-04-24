import React, { Component } from 'react';
import ForumPosts from './ForumPosts.jsx';

class ForumContainer extends Component {
    render () {
        let everything = this.props.props
        console.log('every in fc', everything)

        let postArray = []
        for (let i=0; i<everything.length; i++) {
            postArray.push(
                <ForumPosts eachPost={everything[i]} key={i} />
                )
        }
        // everything.map((everything, index) => 
        // postArray.push(
        //     <ForumPosts eachPost={everything[index]} key={index} />
        //     )
        // )

        return (
            <div className='commentsByName'>

                {postArray}
            </div>
        )
    }
}

export default ForumContainer;