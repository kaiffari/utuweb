import React from 'react';

class ShowReminders extends React.Component {
    constructor(props) {
      super(props);
    }
    render () {
        console.log(this.props.reminders)
        return (
          <div>  <h2>Reminders</h2>
            <ul>
                {this.props.reminders.map(
                    reminder =>
                    <li key={reminder.name}>{reminder.timestamp} {reminder.name}</li>
                )}
            </ul>
          </div>
      )
    }
  }

export default ShowReminders
