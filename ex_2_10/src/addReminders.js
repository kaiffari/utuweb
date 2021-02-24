import React from 'react';
import ShowReminders from './reminders.js';

class AddReminders extends React.Component {
    constructor(props) {  /* voiko constructorin jättää pois, kokeile */
      super(props);
      this.state = {
        newReminder: '',
        newTime: new Date().toLocaleString()
      }
    }

  addReminder = (event) => {
  
    event.preventDefault()

    var pos = this.props.reminders.findIndex(o => o.name === this.state.newReminder)
    if (pos == -1) {

      const reminderObject = {
        name: this.state.newReminder,
        timestamp: this.state.newTime
        /*id: this.props.reminders.length + 1*/
      }
      console.log('new object: ',reminderObject)
    
      const reminders = this.props.reminders.concat(reminderObject)
      console.log('concatenated: ', reminders)

      this.props.setReminder(reminders)

      /* clear input field */
      this.state.newReminder = ''
    } else {
      alert('A duplicate reminder exists already!')
    }
  }

  handleReminderChange = (event) => {
    this.setState({ newReminder: event.target.value })
  }

  handleTimeChange = (event) => {
    this.setState({ newTime: event.target.value })
  }
  
  render () {

    return (
      <div>
        <form onSubmit={this.addReminder}>
            <div>
              Aihe: <input
                value={this.state.newReminder}
                onChange={this.handleReminderChange}
              />
            </div>
            <div>
              Aika: <input
                value={this.state.newTime}
                onChange={this.handleTimeChange}
              />
            </div>
            <div>
              <button type="submit">Add</button>
            </div>
        </form>
      </div>
    )
  }
}

export default AddReminders

/*      date: ,*/
