import React from 'react';

let genre;
let theme;

export default class FilterBox extends React.Component {
    render(){
        return(
            <div class="col-md-4" style={{height: "100%",marginTop: "50px",marginBottom: "10px"}}>
            <form submit="RecommendGame" method="POST">
            <div class="accordion" id="accordionExample">
                <div class="card">
                  <div class="card-header" id="headingOne">
                    <h2 class="mb-0">
                      <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Genre
                      </button>
                    </h2>
                </div>
              
                  <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                    <div class="card-body">
                        <div v-for="genre in genres">
                          <label class="form-check">
                            <input class="form-check-input" id="selectedGenres" type="checkbox" v-model="checkedGenres" value="genre.name"/>
                            <span class="form-check-label">
                                { /*genre.name */}
                            </span>
                          </label>
                        </div>
                    </div>
                  </div>
                </div>
                <div class="card">
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
                                <input type="number" class="form-control" id="inputYearFrom" placeholder="2010"/>
                                </div>
                                <div class="form-group col-md-6">
                                <label>To</label>
                                <input type="number" class="form-control" id="inputYearTo" placeholder="2019"/>
                                </div>
                        </div>
                    </div>
                  </div>
                </div>
                <div class="card">
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
                          <input class="form-check-input" id="syspc" type="checkbox" value=""/>
                          <span id="pctext" class="form-check-label">
                          PC
                          </span>
                      </label> 
                      <label class="form-check">
                          <input class="form-check-input" id="sysps4" type="checkbox" value=""/>
                          <span id="ps4text" class="form-check-label">
                          PS4
                          </span>
                      </label>  
                      <label class="form-check">
                          <input class="form-check-input" id="sysxone" type="checkbox" value=""/>
                          <span id="xonetext" class="form-check-label">
                          XBOX ONE
                          </span>
                      </label>  
                      <label class="form-check">
                          <input class="form-check-input" id="sysswitch" type="checkbox" value=""/>
                          <span id="switchtext" class="form-check-label">
                          Switch
                          </span>
                      </label>  
                      <label class="form-check">
                          <input class="form-check-input" id="sysmac" type="checkbox" value=""/>
                          <span id="mactext" class="form-check-label">
                          Mac
                          </span>
                      </label>  
                      <label class="form-check">
                          <input class="form-check-input" id="syssmart" type="checkbox" value=""/>
                          <span id="smarttext" class="form-check-label">
                          Smartphone
                          </span>
                      </label>  
                    </div>
                  </div>
                </div>
                <div class="card">
                    <div class="card-header" id="headingFour">
                      <h2 class="mb-0">
                        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" tooltip="Check genres in this category if you are open to trying these genres, but usually dont like them" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                          Themes
                        </button>
                      </h2>
                    </div>
                    <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                      <div class="card-body">
                        <div v-for="theme in themes">
                            <label class="form-check">
                                <input class="form-check-input" id="selectedThemes" type="checkbox" v-model="checkedThemes" value="theme.name"/>
                                <span class="form-check-label">
                                    { /*theme.name*/ }
                                </span>
                            </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <input type="submit" class="btn btn-dark subbtn" value="Recommend me a game!"/>
                  <button type="button" class="btn btn-dark subbtn">Randomize Game</button>
            </form>
          </div>
        )
    }
}
