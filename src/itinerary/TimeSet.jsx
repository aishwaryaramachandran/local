import React, { Component } from 'react';

class TimeSet extends Component {
  render() {
    const timeArray = this.props.time;
    console.log(this.props.time)
    return (
      <div className="has-text-centered">
         {
          timeArray.map((time) => {
            return <div className="time">
               <h6 className="title is-6">{`${time} : 00`}</h6>
            </div>;
          })
        } 
        </div>
    );
  }
}

export default TimeSet;

