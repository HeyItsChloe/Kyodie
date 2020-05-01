import React, {Component} from 'react';
import Header from '../Header.jsx';
import Footer from '../Footer.jsx';
import forumStyles from './forumStyles.scss';
import ForumContainer from './ForumContainer.jsx';
import { withStyles, Typography, CardContent, Card, TextField, Button } from '@material-ui/core';

const styles = (theme) => ({
    root: {
      width: 900,
      height: 600,
      backgroundColor: 'transparent',
      boxShadow: "10px 10px 10px 10px grey"
    },
    form: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
          width: '19.2ch',
          backgroundColor: 'transparent',
        },
      },
  });

class Forum extends Component {
    constructor (props){
        super(props)
        this.state = {
            title: '',
            comment: '',
            all: []
        };
        this.getComments = this.getComments.bind(this);
        this.postText = this.postText.bind(this);
        this.handleCommentChange = this.handleCommentChange.bind(this)
        this.handleTitleChange = this.handleTitleChange.bind(this)
    };

    componentDidMount () {
        this.getComments();
    };

    handleCommentChange (event) {
        this.setState({
            comment: event.target.value
        })
    }

    handleTitleChange () {
        this.setState({
            title: event.target.value
        })
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
            let alls = [];
            for (let i=0; i<res.length; i++){
                alls.push({title:res[i].title, comment:res[i].comment, commentId:res[i]._id, userId:res[i].user_id})
            };
            this.setState({
                all: alls,
            }, () => {console.log('post a comment')})
        })
        .catch(err => console.log(err))
    };

    /* Send POST request to BD and append comment to document (invoke getComments) */
    postText () {
        console.log('hi in post text')
        let newText = this.state.comment//document.getElementById('inputTitle').value;
        let newTitle = this.state.title //document.getElementById('inputText').value;
        console.log('in post text', newText, newTitle)

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
        let returnVal = [];
        this.state.all.length > 0 ? returnVal.push(<ForumContainer props={this.state.all} func={this.getComments} />) : null;
        let { classes } = this.props
        let title = this.state.title
        let comment = this.state.comment
        return (
            <div className='forumPage'>
                <Header/>
                <div className='commentCard'>
                    <Card className={classes.root}>
                        <CardContent id='comments' >
                            <div className='commentCardTitle'>
                                <Typography variant='h6'>Post A Comment With The KYODIE Community</Typography>
                            </div>
                            <div >
                                {returnVal}
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div className={classes.form}>
                    <form>
                        <TextField 
                            id='outlined-basic' 
                            value={title} 
                            required
                            label='Title Of Post'
                            className='title'
                            variant='outlined'
                            onChange={this.handleTitleChange} /> <br></br>
                        <TextField
                            id="outlined-multiline-static"
                            value={comment}
                            required
                            label='Comment'
                            className='comment'
                            variant='outlined'
                            onChange={this.handleCommentChange} /> <br></br>
                        <Button 
                            size='medium'
                            p={5}
                            variant="outlined" 
                            color="inherit" 
                            onClick={this.postText} >
                                Submit
                        </Button>
                        {/* <button onClick={this.postText}>Submit</button> */}
                    </form>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default withStyles(styles)(Forum);