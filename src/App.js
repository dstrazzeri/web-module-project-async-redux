import React, {useState, useEffect} from 'react';
import './App.css';
import ActivityList from './components/ActivityList';
import {connect} from "react-redux";
import {getActivity} from "./actions";
import Header from "./components/Header";

function App(props) {

    useEffect(() => {
       props.getActivity()
    },[])

    return (
    <div className="App">
        <Header/>
        <ActivityList/>
    </div>
  );
};

export default  connect(null, {  getActivity })(App);