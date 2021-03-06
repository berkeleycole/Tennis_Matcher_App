import React, {Component} from 'react';
// import Nav from 'pages/nav.js'
import PropTypes from 'prop-types';
import {Router, Route} from 'react-router';
import {Jumbotron, Button, Carousel, Item, Caption} from 'react-bootstrap'
import Card from 'components/cards/card.js'
import Card2 from 'components/cards/card2.js'
import Card3 from 'components/cards/card3.js'




export default class Home extends Component {

    render() {
        return (
            <div className="matches-body">
              <div className="jumbotron jumbotron-billboard">
                <div className="img"></div>
                  <div className="container">
                      <div className="row">
                          <div className="col-lg-12">
                            <br />

                            <h1 class="home-title-big"><strong>It starts with LOVE</strong></h1>
                              <p class="home-title"><strong>Find fellow tennis players in San Diego and set up a time and place to play!</strong></p>
                              <a href="users/sign_up" className="btn custom-btn">Let's Play! </a>

                          </div>
                      </div>
                  </div>
                </div>
              <div id="home-page-cards">
                <Card />
                <Card2 />
                <Card3 />
              </div>
            </div>
        )
    }
}
