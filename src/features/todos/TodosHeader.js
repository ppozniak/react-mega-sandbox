import React from 'react';
import PropTypes from 'prop-types';
import { Header, Icon } from 'semantic-ui-react';

export default function TodosHeader({ currentFilter }) {
  return (
    <Header as="h2">
      <Icon name="list" />
      <Header.Content>Needs to be done: {currentFilter}</Header.Content>
    </Header>
  );
}

TodosHeader.propTypes = {
  currentFilter: PropTypes.string,
};
