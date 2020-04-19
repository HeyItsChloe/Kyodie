import React, { Component } from 'react';
import Header from '../Header.jsx';
import Footer from '../Footer.jsx';
import { Link } from 'react-router-dom';
import Forum from '../Forum/Forum.jsx';

class Profile extends Component {
    render () {
        let userName = this.props.location.state.userName
        let password = this.props.location.state.password
        return (
            <div>
                <div>
                    <Header/>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-sm'>
                                <h3>The Profile Page</h3>
                                <Link to={{
                                    pathname:'/api/forum/:id', 
                                    state: {userName: userName, password: password}
                                    }}> <button>Go To Forum</button> </Link>
                                <button>See All Favs</button>
                            </div>
                        </div>
                    </div>
                    <Footer/>
                </div>
            </div>
        )
    }
}

export default Profile