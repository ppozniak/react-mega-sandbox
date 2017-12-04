import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeFilter } from '../actions';
import { Button } from 'semantic-ui-react';

function FilterLink({ children, filter, currentFilter, changeFilter }) {
  return (
    <Button disabled={ currentFilter === filter }
            secondary={currentFilter === filter}
            onClick={() => changeFilter(filter)}>
      {children}
    </Button>
  );
}

FilterLink.propTypes = {
  children: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => ({
  currentFilter: state.todos.visibilityFilter
});

export default connect(
  mapStateToProps,
  { changeFilter }
)(FilterLink);