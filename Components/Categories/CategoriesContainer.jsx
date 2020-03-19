import React, { Component } from 'react';
import Categories from '../Categories/Categories.jsx'

class CategoriesContainer extends Component {
    //functionality to filter through top category data here
    render () {
        return (
            <div>
                <div className='header'>
                    <h3>browse top categories</h3>
                </div>
                <div>
                    <Categories/>
                </div>
            </div>
        )
    }
}

export default CategoriesContainer;