import './custom_bootstrap.scss';

import ReactDOM from 'react-dom';
import React from 'react';

ReactDOM.render(

  <div className="row">
    <div className="col-md-6">test</div>
    <div className="col-md-6 hidden-sm-down">test</div>
  </div>,

  document.querySelector('body')

);
