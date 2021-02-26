import React from 'react';
import axios from 'axios';

class ShowReminders extends React.Component {
  constructor(props) {
    super(props);
  };

  removeReminder = (e) => {
    if (window.confirm('Haluatko todella poistaa?')) {
        /*axios
        .delete('http://localhost:3001/reminders/', {params: {id: e.target.id}})
        .then(response => {
          console.log('delete promise fulfilled')
        })*/
        axios({
          method: 'DELETE',
          url: 'http://localhost:3001/reminders/' + e.target.id
        });
        console.log('delete promise fulfilled for id: ', e.target.id)

        /* clear parent state and update rendering */
        this.props.deleteReminder(e.target.id);
    }
  }

  render () {
    if (this.props.reminders.length > 0) {
    return (
        <div>  
          <h2>Reminders</h2>
          <table><tbody>
           {this.props.reminders.map(
              reminder =>
              <tr key={reminder.id}> 
                <td>{reminder.timestamp}</td>
                <td>{reminder.name}</td>
                <td><button id={reminder.id} onClick={this.removeReminder}>Poista</button></td>
              </tr>
              )
            }
          </tbody></table>
        </div>
      )
    } else {
      return (<div><h2>Reminders</h2></div>)
    }
  }
}

export default ShowReminders
