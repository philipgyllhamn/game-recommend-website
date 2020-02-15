import React from 'react';

export default class InfoMain extends React.Component {


    render(){
        return(
        <div>
            <div class="highlight-phone">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 aboutSpacing">
                            <div class="intro">
                                <h2>About</h2>
                                <p>RecommendNinja is website designated to recommend games for you to play when you feel like you dont know what to play. The backend does
                                    an algorithm which sorts and gives you well liked and well rated games based on what types of games you like. If the algortihm doesnt
                                    find any games based on your specifications, we will return a random game across all genres. So be specific but dont be too specific aswell as it 
                                    will narrow down the list of similar games.
                                </p>
                                <br/>
                                <p>This website is created by <a href="//philipgyllhamn.com">Philip Gyllhamn</a> as a part of his thesis practice as a last project before graduating
                                    his education to becoma a Software Developer.
                                </p>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="d-none d-md-block iphone-mockup"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="highlight-phone">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 aboutSpacing">
                            <div class="intro">
                                <h2>Privacy</h2>
                                <h3>Third Party Software Used:</h3>
                                    <h4><a href="//www.igdb.com">IGDB.com</a></h4>
                                        <p>"One of the principles behind IGDB.com is accessibility of data. We wish to share the data with anyone who wants to build cool videogame oriented websites, apps and services. This means that the information you contribute to IGDB.com can be used by other projects as well.
                                            Thus, you are not only contributing to the value of this site but to hundreds of other projects as well. We are looking forward to see what exciting game related projects you come up with. Happy coding!
                                            Our video game database has loads of video game metadata. That includes release dates, descriptions, media, etc." - IGDB.com
                                        </p>
                                        <h6>RecommendNinja is using IGDB to retrieve game information</h6>
                                        <h3>Art</h3>
                                        <div>Icons made by <a href="https://www.flaticon.com/authors/flat-icons" title="Flat Icons">Flat Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                                        <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="d-none d-md-block iphone-mockup"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}