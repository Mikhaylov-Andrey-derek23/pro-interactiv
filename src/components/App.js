import React from 'react';
import { connect } from 'react-redux';

import Header from './Header'
import ModalWindow from './ModalWindow'
import PhotoBooths from './PhotoBooths'

import '../App.scss';


function App( {modalWindow} ) {
  return (
    <div className="container pt-2">
        <Header/>
        <PhotoBooths/>
        {modalWindow ? <ModalWindow/> : '' }
    </div>
  );
}

const mapStateProps = (state) => {
  return {
    modalWindow : state.modalWindow
  }
}

export default connect(mapStateProps)(App);
