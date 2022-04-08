import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import AddActivitiesPage from './Pages/AddActivities';
import ActivitiesHistoryPage from './Pages/ActivitiesHistory';

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddActivitiesPage />} />
        <Route path="history" element={<ActivitiesHistoryPage />} />
      </Routes>
   </BrowserRouter>
  );
}

export default App;
