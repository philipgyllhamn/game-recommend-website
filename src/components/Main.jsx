import React from 'react';
import ContentDisplay from './ContentDisplay'
import FilterBox from './FilterBox'

export default class Main extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            g2alink: "//www.g2a.com/r/user-5e467b3174ae5",
            recommendedGame: {'title': 'RecommendNinja', 'rating': 99.00,'realeseDate': 2020, 'gameCoverID': 'gumbvhenqeupfyt9pci0', 'summary': 'Navigate on the right(or below on mobile). Choose preferences that fit your style of gaming. If we are not able to generate a perfect recommendation for your preferences, we will recommend you a random game. Try to be as specific as possible to get a more accurate recommendation, but being to specific can also lead to not finding a game matching your preferences, in that case we will return a random game.', 'websites': [{'url': 'www.philipgyllhamn.com'}]}
        }
    }

    setContentData = (responseData) => {
        this.setState({recommendedGame: responseData })
    }

  
    render(){
        return(
        <div class="container">
            <div class="row">
                <ContentDisplay  
                title={this.state.recommendedGame.title} 
                rating={this.state.recommendedGame.rating}
                realeseDate={this.state.recommendedGame.realeseDate} 
                summary={this.state.recommendedGame.summary} 
                websites={this.state.recommendedGame.websites}
                gameCoverID={this.state.recommendedGame.gameCoverID}
                g2aLink={this.state.g2alink}/>
                <FilterBox setData={this.setContentData} setOpen={this.setOpen} />
            </div>
        </div>
        );
    }
}