import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DragDropChart from './DragDropChart';
import './orgchart.css';

const OrgChart = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={DragDropChart} />
      </Switch>
    </Router>
  );
};

export default OrgChart;
