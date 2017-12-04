import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter, NavLink } from 'react-router-dom';
import { Container, Header, Icon, Divider } from 'semantic-ui-react';
import MenuBar from '../components/MenuBar';

import ImagesGetter from '../components/ImagesGetter';
import { TodosContainer } from '../../todos';
import { BitcoinMiner } from '../../bitcoin-miner';
import { FetchAndBase } from '../../fetch-and-base';
import { Account } from '../../account';

class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <Divider hidden/>
          <Header as={NavLink} to="/" size="huge">
            <Icon name="settings" />
            <Header.Content>
              React mega sandbox
              <Header.Subheader>
                Everything and nothing
              </Header.Subheader>
            </Header.Content>
          </Header>
          <Divider hidden/>
          <MenuBar />
          <Divider hidden/>

          <Route path="/bitcoin-miner" component={BitcoinMiner} />
          <Route path="/todo/:filter?" component={TodosContainer} />
          <Route path="/hocs" component={ImagesGetter} />
          <Route path="/image" component={FetchAndBase} />
          <Route path="/account" component={Account} />
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  image: state.image
});

export default withRouter(connect(
  mapStateToProps
)(App));
