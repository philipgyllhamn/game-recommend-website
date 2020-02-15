import React from 'react';

import fb from '../assets/img/icons/facebook.png'
import tw from '../assets/img/icons/twitter.png'
import steam from '../assets/img/icons/steam.png'
import web from '../assets/img/icons/website.png'
import wikia from '../assets/img/icons/wikia.png'
import wikip from '../assets/img/icons/wikipedia-logo.png'
import insta from '../assets/img/icons/instagram.png'
import yt from '../assets/img/icons/youtube.png'
import twitch from '../assets/img/icons/twitch.png'
import reddit from '../assets/img/icons/reddit.png'
import epic from '../assets/img/icons/epic.png'
import itch from '../assets/img/icons/itch.png'
import gog from '../assets/img/icons/gog.png'
import home from '../assets/img/icons/home.png'
import g2a from '../assets/img/icons/g2a.png'
import play from '../assets/img/icons/google-play.png'
import itunes from '../assets/img/icons/itunes.png'


var linkArray = [];

export default class ContentDisplay extends React.Component {

    constructor(props){
        super(props)
        
        this.createImagesWithLink = this.createImagesWithLink.bind(this);
    }

    createImagesWithLink(){
        linkArray = [];
        console.log('works')
        this.props.websites.map(val => {
            val.url = val.url.replace('https://','');

            if (val.url.includes('http://')) {
                val.url = val.url.replace('http://','');
            }


            if (val.url.includes('steam')) {
                linkArray.push({'url': val.url, 'avatar': steam})
            }else if (val.url.includes('facebook')) {
                linkArray.push({'url': val.url, 'avatar': fb})
            }else if (val.url.includes('wikia') || val.url.includes('gamepedia') || val.url.includes('fandom')){
                linkArray.push({'url': val.url, 'avatar': wikia})
            }else if (val.url.includes('wikipedia')) {
                linkArray.push({'url': val.url, 'avatar': wikip})
            }else if (val.url.includes('twitter')) {
                linkArray.push({'url': val.url, 'avatar': tw})
            }else if (val.url.includes('instagram')) {
                linkArray.push({'url': val.url, 'avatar': insta})
            }else if (val.url.includes('youtube')) {
                linkArray.push({'url': val.url, 'avatar': yt})
            }else if (val.url.includes('reddit')) {
                linkArray.push({'url': val.url, 'avatar': reddit})
            }else if (val.url.includes('twitch')) {
                linkArray.push({'url': val.url, 'avatar': twitch})
            }else if (val.url.includes('epicgames')) {
                linkArray.push({'url': val.url, 'avatar': epic})
            }else if (val.url.includes('itch')) {
                linkArray.push({'url': val.url, 'avatar': itch})
            }else if (val.url.includes('gog')) {
                linkArray.push({'url': val.url, 'avatar': gog})
            }else if (val.url.includes('itunes')) {
                linkArray.push({'url': val.url, 'avatar': itunes})
            }else if (val.url.includes('play.google')) {
                linkArray.push({'url': val.url, 'avatar': play})
            }else{
                linkArray.push({'url': val.url, 'avatar': web})
            }
        })

        console.log(linkArray)
    }

    render(){
        var logo = "https://images.igdb.com/igdb/image/upload/t_cover_big/" + this.props.gameCoverID + ".jpg";
        let rating = this.props.rating;
        if (rating) {
            rating = rating.toString().substring(0, rating.toString().indexOf('.'))
        }
        this.createImagesWithLink();

        return(
            <div class="col-md-8 ContentDisplayCard">
                    <div class="card mb-3" style={{maxWidth: "540px"}} >
                        <div class="row no-gutters shadow">
                            <div class="col-md-4">
                            <img src={logo} class="card-img" width="200px" alt="coverart"/>
                            </div>
                            <div class="col-md-8">
                            <div class="card-body textMain">
                            <h5 class="card-title">{this.props.title}</h5>
                                <p class="card-text"><span class="boxTitle">Realese Year: </span><span class="realese">{this.props.realeseDate}</span></p>
                                <p class="card-text"><span class="boxTitle">Rating: </span><div class="rating" >{rating}</div></p>
                                <p class="card-text summary"><span class="boxTitle">Summary </span>{this.props.summary}</p>
                                <div>
                                    {linkArray.map(website => {
                                        //return <a class="card-text" href={website.url}>{website.url}</a>
                                        return <a target="blank" href={"//" + website.url}><img class="icons" src={website.avatar} alt={website.url}/></a>
                                    })}
                                </div>
                                <div class="affiliateLink" >
                                    <a target="blank" href={this.props.g2aLink}><img class="g2a" src={g2a} alt="link to g2a.com"/></a>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}