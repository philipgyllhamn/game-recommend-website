import React from 'react';
import ContentDisplay from './ContentDisplay'
import FilterBox from './FilterBox'

export default class Main extends React.Component {


    render(){
        return(
        <div class="container">
            <div class="row">
                <ContentDisplay/>
                <FilterBox/>
                </div>
            </div>
        );
    }
}