import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementBy } from '../actions';
import TodoList from './TodoList';
import MessageContainer from '../components/MessageContainer';
import ImagesGetter from '../components/ImagesGetter';


class App extends Component {
  render() {
    return (
      <div>
        <h1>Yey</h1>
        <TodoList />

        <MessageContainer>
          Test
        </MessageContainer>
        <hr />
        <ImagesGetter />

        <h4>REDUX SECTION :D</h4>
        {this.props.counter}
        <button onClick={ () => this.props.incrementBy(3) }>
          INKRIS!!!
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  counter: state.counter
});

export default connect(
  mapStateToProps,
  { incrementBy }
)(App);
