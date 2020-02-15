import React from 'react';
import axios from 'axios';

import spin from '../assets/img/icons/spin-icon.png'

let checkedGenres = new Array();
let checkedThemes = new Array();
let checkedSys = new Array();

export default class FilterBox extends React.Component {
  constructor(props) {
		super(props)
    this.state = {
      genre: [],
      theme: [],
      recommendedGame: []
    };

    this.recommendGame = this.recommendGame.bind(this);
  }

  componentDidMount(){
    const config = axios({
      headers: {
        'Acces-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Headers': '*',
        'Accept': 'application/json'
      }
    })

      axios.get('http://192.168.10.189:8080/api/genres', config)
      .then(response => this.setState({genre: response.data}))
      .catch(err => console.log(err))


      axios.get('http://192.168.10.189:8080/api/themes', config)
      .then(response => this.setState({theme: response.data}))
      .catch(err => console.log(err))
    }
    
  render(){
        return(
            <div class="col-md-4 shadow" style={{height: "100%",marginTop: "50px",marginBottom: "10px"}}>
            <form>
            <div class="accordion" id="accordionExample">
                <div class="card sideCard">
                  <div class="card-header" id="headingOne">
                    <h2 class="mb-0">
                      <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Genre
                      </button>
                    </h2>
                </div>
              
                  <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                    <div class="card-body">
                        <div>
                          {
                            this.state.genre.map( genre =>
                              <label class="form-check">
                                <input class="form-check-input" id={'genre' + genre.id} key={genre} type="checkbox" onChange={() => this.addCheckboxToArray(genre.id,'genre')} value={genre.name}/>
                                <span class="form-check-label">
                                  {genre.name}
                                </span>
                              </label>
                              )
                          }
                        </div>
                    </div>
                  </div>
                </div>
                <div class="card sideCard">
                  <div class="card-header" id="headingTwo">
                    <h2 class="mb-0">
                      <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Year
                      </button>
                    </h2>
                  </div>
                  <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                    <div class="card-body">
                        <div class="form-group col-md-6">
                                <label>From</label>
                                <input type="number" required class="form-control" id="inputYearFrom" placeholder="2010" value="2000"/>
                                </div>
                                <div class="form-group col-md-6">
                                <label>To</label>
                                <input type="number" required class="form-control" id="inputYearTo" placeholder="2019" value="2020"/>
                                </div>
                        </div>
                    </div>
                  </div>
                </div>
                <div class="card sideCard">
                  <div class="card-header" id="headingThree">
                    <h2 class="mb-0">
                      <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Game System
                      </button>
                    </h2>
                  </div>
                  <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                    <div class="card-body">
                      <label class="form-check">
                          <input class="form-check-input" id="syspc" type="checkbox" onChange={() => this.addCheckboxToArray(6, 'system')} value=""/>
                          <span id="pctext" class="form-check-label">
                          PC
                          </span>
                      </label> 
                      <label class="form-check">
                          <input class="form-check-input" id="sysps4" type="checkbox" onChange={() => this.addCheckboxToArray(48, 'system')} value=""/>
                          <span id="ps4text" class="form-check-label">
                          PS4
                          </span>
                      </label>  
                      <label class="form-check">
                          <input class="form-check-input" id="sysxone" type="checkbox" onChange={() => this.addCheckboxToArray(49, 'system')} value=""/>
                          <span id="xonetext" class="form-check-label">
                          XBOX ONE
                          </span>
                      </label>  
                      <label class="form-check">
                          <input class="form-check-input" id="sysswitch" type="checkbox" onChange={() => this.addCheckboxToArray(130, 'system')} value=""/>
                          <span id="switchtext" class="form-check-label">
                          Switch
                          </span>
                      </label>  
                      <label class="form-check">
                          <input class="form-check-input" id="sysmac" type="checkbox" onChange={() => this.addCheckboxToArray(14, 'system')} value=""/>
                          <span id="mactext" class="form-check-label">
                          Mac
                          </span>
                      </label>  
                      <label class="form-check">
                          <input class="form-check-input" id="syssmart" type="checkbox" onChange={() => this.addCheckboxToArray('39,34', 'system')} value=""/>
                          <span id="smarttext" class="form-check-label">
                          Smartphone
                          </span>
                      </label>  
                    </div>
                  </div>
                </div>
                <div class="card sideCard">
                    <div class="card-header" id="headingFour">
                      <h2 class="mb-0">
                        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" tooltip="Check genres in this category if you are open to trying these genres, but usually dont like them" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                          Themes
                        </button>
                      </h2>
                    </div>
                    <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                      <div class="card-body">
                        <div>{this.state.theme.map(theme =>
                          <label class="form-check">
                                <input class="form-check-input" id={'theme' + theme.id}type="checkbox" onChange={() => this.addCheckboxToArray(theme.id,'theme')} value={theme.name}/>
                                <span class="form-check-label">
                                    {theme.name}
                                </span>
                            </label>
                            )
                            }
                        </div>
                      </div>
                    </div>
                  </div>
                  <input type="button" onClick={this.recommendGame} class="btn btn-dark subbtn" value="Recommend me a game!"/>
                  <div id="warningText" hidden>You have to check atleast one game system and/or one genre/theme</div>
                  <div >
                        <img id="spinningLogo" hidden class="loadLogo" src={spin} alt="spinning logo"/>
                  </div>
            </form>
          </div>
        )
    }

    addCheckboxToArray(id, option) {

      if (option === "theme") {
        var index = checkedThemes.indexOf(id)

        if ( checkedThemes[index] === id) {
          checkedThemes.splice(index,1)
        } else {
            checkedThemes.push(id);
          }

      } else if (option === "genre") {
        var index = checkedGenres.indexOf(id)

        if (checkedGenres[index] === id) {
            checkedGenres.splice(index,1)
        } else {
            checkedGenres.push(id);
          }

      } else if(option === "system"){
        var index = checkedSys.indexOf(id)

        if (checkedSys[index] === id) {
          checkedSys.splice(index,2)
        } else {
          checkedSys.push(id);
        }
      }

      console.log(checkedSys)
    }

    async recommendGame(){
      var yearFrom = document.getElementById('inputYearFrom').value;
      var yearTo = document.getElementById('inputYearTo').value;

      const data = {
        'YearFrom' : yearFrom,
        'YearTo' : yearTo,
        'Genres' : checkedGenres.toString(),
        'Themes' : checkedThemes.toString(),
        'GamingSystems' : checkedSys.toString()
      }

      console.log(data);
      var themeOrGenre = false;

      if (checkedThemes.length > 0 || checkedGenres.length > 0) {
        themeOrGenre = true;
      }

      if (yearFrom == null || yearFrom == null || checkedSys.length == 0 || !themeOrGenre){
        setTimeout(function(){
          document.getElementById('warningText').hidden = true;
        },5000)

          document.getElementById('warningText').hidden = false;

      } else {
        document.getElementById('spinningLogo').hidden = false;

        await axios({
           method: 'post',
           url: 'http://192.168.10.189:8080/api/recommend',
           data: data,
           headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json',
             'Acces-Control-Allow-Origin' : '*',
             'Access-Control-Allow-Methods': '*',
             'Access-Control-Allow-Headers': '*'
           }
           
   
         }).then(res =>{
           this.props.setData(res.data);
          document.getElementById('spinningLogo').hidden = true;

         });
      }

    }
}
