import AbstractView from "./AbstractView.js";
import { countries } from "../index.js"; 

const getFlag = function(country) {
    let name = "";
    let flag = "";
    for (let i = 0 ; i <  countries.length ; i++) {
        if (countries[i].cca3.toLowerCase() ===  country.toLowerCase() ){
            name = countries[i].name.common;
            flag = countries[i].flags.png;
        }
    }
    return flag;
  };
  console.log(getFlag("bra"));

export default class extends AbstractView{
    constructor(params) {
        super(params);
        this.setTitle("Homepage");
    };

    async getHTML() {
        return `<!-- MAINBANNER -->
        <div class="container-fluid" id="mainBanner">
            <div class="row align-items-center">
                <div class="col-xs-12 col-md-6 boxContent">
                    <h1>Countries<br><span>Informations</span></h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores, nobis eius fugit dignissimos, accusamus deleniti quis corporis quam excepturi optio, explicabo quos est harum vitae ducimus aut perspiciatis assumenda. Odit?</p>
                  
                </div>
            </div>
        </div>
        <!-- TEAM -->
        <div class="container-fluid" id="team">
            <h2>Our Team</h2>
            <div class="row justify-content-center flags">            
                <div class="col-12 col-md-3">
                    <a href="/countries/bra">
                        <img class="img-fluid" src="${getFlag("bra")}" alt="Brazil">
                    </a><br>
                    <span>From Brazil: <br>
                        Clelia | Vinicius</span>
                </div>
                <div class="col-12 col-md-3">
                     <a href="/countries/bra">
                      <img class="img-fluid" src="${getFlag("jpn")}" alt="">
                    </a><br>
                    <span>From Japan:<br> 
                        Atsuya</span>
                </div>
            </div>
            <div class="row bgColors">
                <div class="col-6 redBg"></div>
                <div class="col-6 greemBg"></div>
            </div>
        </div>
        `
        ;
    }
}

