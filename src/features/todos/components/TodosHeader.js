import React from 'react'
import PropTypes from 'prop-types'
import { Header, Icon } from 'semantic-ui-react';

TodosHeader.propTypes = {
  currentFilter: PropTypes.string.isRequired,
}

export default function TodosHeader() {
  return (
    <Header as="h2">
      <Icon name="list" />
      <Header.Content>
        Needs to be done:
      </Header.Content>
    </Header>
  );
}