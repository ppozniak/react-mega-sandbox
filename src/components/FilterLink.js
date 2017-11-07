import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeFilter } from '../actions';

const FilterLink = ({ children, filter, currentFilter, changeFilter }) => (
  <button disabled={ currentFilter === filter }
          onClick={() => changeFilter(filter)}
  >{children}</button>
);

FilterLink.propTypes = {
  children: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => ({
  currentFilter: state.visibilityFilter
});

export default connect(
  mapStateToProps,
  { changeFilter }
)(FilterLink);