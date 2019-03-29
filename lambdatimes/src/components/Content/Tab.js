import React from 'react';
import "../../CSS/index.css"

const Tab = props => {
  
  return (

    <div
      className={props.selectedTab(props.tab)}
      onClick={() => {
        props.selectedTabHandler(props.tab); 
      }}
    >
     
      {props.tab.toUpperCase()}

    </div>
  );
};

// Make sure you include PropTypes on your props.

export default Tab;
