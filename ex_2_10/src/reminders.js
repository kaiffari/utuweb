import React from 'react';

class ShowReminders extends React.Component {
  constructor(props) {
    super(props);
  };

  render () {
    if (this.props.reminders.length > 0) {
    return (
        <div>  
          <h2>Reminders</h2>
          <ul>
           {this.props.reminders.map(
              reminder =>
              <li key={reminder.name}>{reminder.timestamp} {reminder.name}</li>
              )
            }
          </ul>
        </div>
      )
    } else {
      return (<div><h2>Reminders</h2></div>)
    }
  }
}

export default ShowReminders