import React from 'react';

export default class Wait extends React.Component {

    constructor(props){
        super(props)

    }
    
    render(){

        if (this.props.isOpen == true) {
            return(
                <div class="waitBox">
                    <h3>Wait while we are figuring out what to recommend you...</h3>
                </div>
            );
        } else {
            return null;
        }

    }
}