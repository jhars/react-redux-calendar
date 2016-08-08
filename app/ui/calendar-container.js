import React from 'react';
import Calendar from './calendar';

export default React.createClass({

     getInitialState: function() {
         return {
             widgetData: ['one', 'two', 'three']
         }
     },

    render: function() {
        return (
            <Calendar calendarData={this.state.widgetData} />
        )
    }
});
