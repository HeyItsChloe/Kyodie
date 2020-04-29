import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


export default function Profile() {
  return (
    <Paper >
      <Tabs
        value={0}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
    </Paper>
  );
}


// import React, { Component } from 'react';
// import Header from '../Header.jsx';
// import Footer from '../Footer.jsx';
// import { Link } from 'react-router-dom';

// class Profile extends Component {
//     constructor (props) {
//         super (props) 
//         this.handleLogin = this.handleLogin.bind(this);
//         this.createUser = this.createUser.bind(this);
//     }; 

//     componentDidMount () {
//         if (this.props.location.state.loggingIn === true){
//             this.handleLogin();
//         };
//         if (this.props.location.state.signingUp === true) {
//             this.createUser();
//         };
//     };

//     handleLogin () {
//         const userNameLogin = this.props.location.state.userNameLogin;
//         const passwordLogin = this.props.location.state.passwordLogin;
//         fetch('/api/user/login', {
//             method: 'POST',
//             headers: {'Content-Type' : 'application/json'},
//             body: JSON.stringify({userName: userNameLogin, password: passwordLogin})
//         })
//         .catch(() => { 
//             if (err) {console.log('err in signup createUser post')}
//         })
//     };

//     createUser () {
//         const userNameSignup = this.props.location.state.userNameSignup;
//         const passwordSignup = this.props.location.state.passwordSignup;
//         fetch('/api/user/signup', {
//             method: 'POST',
//             headers: {'Content-Type' : 'application/json'},
//             body: JSON.stringify({userName: userNameSignup, password: passwordSignup})
//         })
//         .catch((err) => {
//             if (err) {console.log('err in signup createUser post')}
//         })
//     };

//     render () {
//         let userName = this.props.location.state.userName;
//         let password = this.props.location.state.password;
//         return (
//             <div>
//                 <div>
//                     <Header/>
//                     <div className='container'>
//                         <div className='row'>
//                             <div className='col-sm'>
//                                 <h3>The Profile Page</h3>
//                                 <Link to={{
//                                     pathname:'/api/forum/:id', 
//                                     state: {userName: userName, password: password}
//                                     }}> <button>Go To Forum</button> </Link>
//                                 <button>See All Favs</button>
//                             </div>
//                         </div>
//                     </div>
//                     <Footer/>
//                 </div>
//             </div>
//         )
//     }
// }
// export default Profile;