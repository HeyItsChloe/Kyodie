import React, {Component} from 'react';
import Header from '../Header.jsx';
import Footer from '../Footer.jsx';
import ForumContainer from './ForumContainer.jsx';
import forumStyles from '../Forum/forumStyles.scss';
import { withStyles, Typography, CardContent, Card, TextField, Button } from '@material-ui/core';

const styles = (theme) => ({
    comments: {
      height: 425,
      backgroundColor: 'transparent',
      overflow: "auto",
      color: 'rgb(27, 20, 100)',
      //boxShadow: "7px 7px 7px black",
    },
    form: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
          width: '40ch',
        },
        backgroundColor: 'transparent',
        color: 'rgb(27, 20, 100)',
        //boxShadow: "7px 7px black",
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
        this.handleCommentChange = this.handleCommentChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
    };

    componentDidMount () {
        this.getComments();
    };

    handleCommentChange (event) {
        this.setState({
            comment: event.target.value
        });
    };

    handleTitleChange () {
        this.setState({
            title: event.target.value
        });
    };

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
        let newText = this.state.comment;
        let newTitle = this.state.title;
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
    };


    render () {
        let returnVal = [];
        this.state.all.length > 0 ? returnVal.push(<ForumContainer props={this.state.all} func={this.getComments} />) : null;
        let { classes } = this.props;
        let title = this.state.title;
        let comment = this.state.comment;
        return (
            <div className='forumPage'>
                <Header/>
                <div className='commentCard'>
                    <div className='commentCardTitle'>
                        <Typography variant='h6'>Post A Comment With The KYODIE Community :)</Typography>
                    </div>
                    <Card className={classes.comments}>
                        <CardContent >
                            {returnVal}
                        </CardContent>

                    </Card>
                    <Card className={classes.form}>
                        <CardContent> 
                            <div>
                                <form>
                                    <TextField 
                                        id='outlined-basic' 
                                        value={title} 
                                        required
                                        label='Title Of Post'
                                        className='title'
                                        variant='outlined'
                                        color='inherit'
                                        onChange={this.handleTitleChange} />
                                    <TextField
                                        id="outlined-multiline-static"
                                        value={comment}
                                        required
                                        color='inherit'
                                        label='Comment'
                                        className='comment'
                                        variant='outlined'
                                        onChange={this.handleCommentChange} />
                                    <Button 
                                        size='medium'
                                        p={0}
                                        variant="outlined" 
                                        color="inherit" 
                                        onClick={this.postText} >
                                            Submit
                                    </Button>
                                </form>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <Footer/>
            </div>
        );
    };
};
export default withStyles(styles)(Forum);