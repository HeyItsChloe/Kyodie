import React, { Component } from 'react';
import styles from '../../assets/css/styles.scss'

class Results extends Component {
    //render the boxes here

    render () {
        let data = this.props.business

        return (
            
            <div>
                <div>{console.log('data in results', this.props.business)}</div>
                <div className="resultBoxes">
                    <div>
                        {data.map((x,y) => <div key={y}>{x}</div>)}
                    </div>
                </div>

            </div>
        )
    }
}

export default Results