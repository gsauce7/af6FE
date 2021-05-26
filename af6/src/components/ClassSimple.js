import React from 'react';
import { connect } from 'react-redux';
import { addUserToClass } from '../actions';
import { useHistory } from 'react-router-dom';

const Class = ({ item, addUserToClass, id, role }) => {
  const { push } = useHistory();

  const handleSave = (e) => {
    e.preventDefault();
    if (role === 'client') {
      push(`/user/class/${item.class_id}`);
    } else {
      push(`/instructor/class/${item.class_id}`);
    }
  };

  return (
    <div onClick={handleSave} className='class-card'>
      <div className='separate'>
        <h3>Course Name:</h3>
        <p>{item.name}</p>
      </div>

      <hr />

      <div className='separate'>
        <h3>Instructor Name:</h3>
        <p>{item.instructor_username}</p>
      </div>

      <hr />

      <div className='separate'>
        <h3>Duration:</h3>
        <p>{item.duration}</p>
      </div>

      <hr />

      <div className='separate'>
        <h3>Location:</h3>
        <p>{item.location}</p>
      </div>

      <hr />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    id: state.user.user.id,
    role: state.user.user.role,
  };
};

export default connect(mapStateToProps, { addUserToClass })(Class);
