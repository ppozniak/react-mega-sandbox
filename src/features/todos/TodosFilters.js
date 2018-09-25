import React from 'react';
import { Button } from 'semantic-ui-react';
import FilterLink from './FilterLink';
import { SHOW_ALL, SHOW_DONE, SHOW_UNDONE } from './reducer';

export default function TodosFilters() {
  return (
    <Button.Group vertical fluid>
      <FilterLink filter={SHOW_ALL}>Show all</FilterLink>
      <FilterLink filter={SHOW_DONE}>Show done</FilterLink>
      <FilterLink filter={SHOW_UNDONE}>Show undone</FilterLink>
    </Button.Group>
  );
}
