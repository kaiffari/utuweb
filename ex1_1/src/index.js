import React from 'react'
import ReactDOM from 'react-dom'

class PalauteNappi extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
      <button onClick={this.props.onClick}> {this.props.text} </button>
      </>
      );
  }
}

class Statistiikka extends React.Component {
  constructor() {
    super();
  }
  render () {
    return (
      <tr>
        <td>{this.props.nimi}</td>
        <td>{this.props.arvo} {this.props.yksikko}</td>
      </tr>
    )
  }
}

class Statistiikat extends React.Component {
  constructor() {
    super();
  }
  render () {
    var yhteensa = this.props.hyvat + this.props.neutraalit + this.props.huonot
    var keskiarvo = (this.props.hyvat - this.props.huonot) / yhteensa
    var hyvaosuus = this.props.hyvat / yhteensa * 100
    console.log (yhteensa, keskiarvo)
    if (yhteensa == 0) {
      return (
        <p>ei yhtään palautetta annettu</p>
      )
    } else {
      return (
        <table>
          <tbody>
            <Statistiikka nimi = "hyvä" arvo = {this.props.hyvat}/>
            <Statistiikka nimi = "neutraali" arvo = {this.props.neutraalit}/>
            <Statistiikka nimi = "huono" arvo = {this.props.huonot}/>
            <Statistiikka nimi = "keskiarvo" arvo = {keskiarvo.toFixed(2)}/>
            <Statistiikka nimi = "positiivisia" arvo = {hyvaosuus.toFixed(1)} yksikko = "%"/>
          </tbody>
        </table>
      )
    }
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hyvat : 0, neutraalit : 0, huonot : 0 };
  }

  hyvaClick(e) {
    this.setState({ hyvat: this.state.hyvat + 1 });
  }

  neutraaliClick(e) {
    this.setState({ neutraalit: this.state.neutraalit + 1 });
  }

  huonoClick(e) {
    this.setState({ huonot: this.state.huonot + 1 });
  }

  render() {
    return (
      <div className="App">
        <Header text = "anna palautetta"
        />
        <PalauteNappi
          text = "hyvä"
          onClick={this.hyvaClick.bind(this)}
        />
        <PalauteNappi
          text = "neutraali"
          onClick={this.neutraaliClick.bind(this)}
        />
        <PalauteNappi
          text = "huono"
          onClick={this.huonoClick.bind(this)}
        />
        <Header text = "statistiikka"
        />
        <Statistiikat 
          hyvat = {this.state.hyvat} 
          neutraalit = {this.state.neutraalit} 
          huonot = {this.state.huonot} 
        />
      </div>
    );
  }
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.text}</h1>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
