import React from 'react';
import ClassesList from './ClassesList';
import { Route } from 'react-router-dom';
import UserSavedClasses from './UserSavedClasses';
import ClassDetails from './ClassDetails';
import { connect } from 'react-redux';
import { getClasses } from '../actions';

const User = ({ getClasses, isLoading, allClasses }) => {
  return (
    <div>
      <Route path='/user'>
        <UserSavedClasses />
      </Route>
      <Route path='/user/class/:classid'>
        <ClassDetails />
      </Route>
      <Route exact path='/user'>
        <ClassesList />
      </Route>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.classes.isLoading,
    allClasses: state.classes.classes,
  };
};

export default connect(mapStateToProps, { getClasses })(User);
