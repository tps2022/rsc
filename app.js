class Aside extends React.Component {
    render() {
      return (
        <aside>
          <nav>
            <a>Dashboard</a>
            <a> Widget</a>
            <a> Reviews</a>
            <a> Customers</a>
            <a> Online Analysis</a>
            <a> Setting</a>
          </nav>
        </aside>
      );
    }
  }
  
  class Reviews extends React.Component {
    render() {
      return (
        <section>
          <span>Reviews</span>
          <span class='num'>1,281</span>
        </section>
      );
    }
  }
  
  class AvgRating extends React.Component {
    render() {
      return (
        <section>
          <span>Average Rating</span>
          <span class='num'>4.6</span>
        </section>
      );
    }
  }
  
  class Sentiment extends React.Component {
    render() {
      return (
        <section>
          <span>Sentiment Analysis</span>
          <div class='inner'>
            <span class='num'>960</span>
            <span class='num'>122</span>
            <span class='num'>321</span>
          </div>
        </section>
      );
    }
  }
  
  class WebVisitors extends React.Component {
    render() {
      return (
        <section id='large'>
          <span>Website Visitors</span>
          <span class='num'>821</span>
          <div></div>
        </section>
      );
    }
  }
  
  class App extends React.Component {
    render() {
      return (
        <div id='app'>
          <Aside />
          <div id='container'>
            <div id='top'>
              <Reviews />
              <AvgRating />
              <Sentiment />
            </div>
            <WebVisitors />
          </div>
        </div>
      );
    }
  }
  
  ReactDOM.render(<App />, document.querySelector('main'));