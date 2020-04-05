import React, { Component } from 'react';

class Footer extends Component {
    render () {
        return (
            <div className='pageFooter'>
                <p className='text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br></br><br></br>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat.             
                </p>
                <div>
                    <ul className='socialMedia'>
                        <li>Instagram</li>
                        <li>Facebook</li>
                        <li>Twitter</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer