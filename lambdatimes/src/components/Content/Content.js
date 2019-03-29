import React, { Component } from 'react';
import Tabs from './Tabs';
import Cards from './Cards';
import { tabData, cardData } from '../../data';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all',
      tabs: [],
      cards: []
    };
  }

  componentDidMount() {
    this.setState({
      tabs: tabData,
      cards: cardData,
    })
  }

  selectedTab = (e) => {
    if(e === this.state.selected){
      return "tab active-tab"
    } else {
      return "tab"
    }
  }

  selectedTabHandler = (e) => {
    console.log(e);
    this.setState({
      selected: e,
   })
   this.changeSelected(e);
  }

  changeSelected = (e) => {
    if(e !== "all"){
      this.setState({
        cards: cardData.filter(i => i.tab === e)
      })
    } else {
      this.setState({
        cards: cardData,
      })
    }
  };

  filterCards = () => {

    return this.state.cards;
  };

  render() {
    return (
      <div className="content-container">
        <Tabs 
          selectedTab ={this.selectedTab}
          selectedTabHandler = {this.selectedTabHandler}
          tabs={this.state.tabs} 
        />

        <Cards 
          cards={this.filterCards()}
        />
      </div>
    );
  }
}
