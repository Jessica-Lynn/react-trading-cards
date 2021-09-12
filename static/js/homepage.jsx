"use strict";

function Homepage() {
  return (
    <React.Fragment>
        <p>Hello!</p>
        <a href="/cards">Click here to view the trading cards.</a>
        <img src="/static/img/balloonicorn.jpg" />
    </React.Fragment>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
