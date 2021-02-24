import React from 'react';
import ShowReminders from './reminders.js';
import AddReminders from './addReminders.js';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reminders: [
        /*{
          name: 'Buy some eggs',
          timestamp: "2018-11-10T13:00:00.141Z"
        }*/
      ]
    }
    this.setReminder = this.setReminder.bind(this)
  }

  setReminder(reminders) {
    console.log('setReminder...', {reminders})
    this.setState(
      {reminders: reminders}
    )
  }

  render() {
    return (
      <div>
        <h2>Add Reminder</h2>
        <AddReminders
          reminders={this.state.reminders} 
          setReminder={this.setReminder}/>
        <ShowReminders reminders={this.state.reminders}/>
      </div>
    
    )
  }
}

export default App
