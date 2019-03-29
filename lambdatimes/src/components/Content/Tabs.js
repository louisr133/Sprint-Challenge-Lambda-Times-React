import React from 'react';
import Tab from './Tab';
import tabData from "../../data"


class Tabs extends React.Component {
  render() {
  
    return (
      <div className="tabs">
        <div className="topics">
          <span className="title">TRENDING TOPICS: </span>
          {
            this.props.tabs.map((x,index) => (
            <Tab 
              selectedTab ={this.props.selectedTab}
              selectedTabHandler = {this.props.selectedTabHandler} 
              tab={x} 
              key={index}
            />
            ))
          }
            
        </div>
      </div>
    );
  };
  }
  

// Make sure to use PropTypes to validate your types!
export default Tabs;
