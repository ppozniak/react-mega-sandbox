import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const MenuItem = ({name, to, exact = false}) => (
  <Menu.Item
    name={name}
    as={NavLink}
    activeClassName="active blue"
    exact={exact}
    to={to} />
);

const Menubar = () => (
  <Menu pointing secondary>
    <MenuItem name="dashboard" to="/" exact={true} />
    <MenuItem name="todos" to="/todo" />
    <MenuItem name="bitcoin miner" to="/bitcoin-miner" />
    <MenuItem name="image fetcher" to="/image" />
    <MenuItem name="higher order function" to="/hocs" />
  </Menu>
);

export default Menubar;