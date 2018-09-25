import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { changeFilter } from './reducer';

function FilterLink({ children, filter, currentFilter, changeFilter }) {
  return (
    <Button
      disabled={currentFilter === filter}
      secondary={currentFilter === filter}
      onClick={() => changeFilter(filter)}
    >
      {children}
    </Button>
  );
}

FilterLink.propTypes = {
  children: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired,
  currentFilter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  currentFilter: state.todos.visibilityFilter,
});

export default connect(
  mapStateToProps,
  { changeFilter }
)(FilterLink);
