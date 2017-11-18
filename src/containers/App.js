import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementBy, fetchImage } from '../actions';
import TodoList from './TodoList';
import MessageContainer from '../components/MessageContainer';
import ImagesGetter from '../components/ImagesGetter';
import MenuBar from '../components/MenuBar';
import { Route, withRouter } from 'react-router-dom';


class App extends Component {
  render() {
    const spinnerXD = !this.props.image.fetching ? 'not busy' : 'OH YE LOADING';
    const receivedAt = this.props.image.receivedAt ? (<p>Received at: { this.props.image.receivedAt }</p>) : null;
    const image = this.props.image.data ? (<img src={this.props.image.data} alt="" />) : null;
    const error = this.props.image.error ? <p className="error">{this.props.image.error}</p> : null;
    return (
      <div>
        <MenuBar />
        <h1>React sandbox</h1>
        
        <Route path="/counter" render={() => (
          <div>
            <h2>Counter</h2>
            {this.props.counter}
            <button onClick={() => this.props.incrementBy(3)}>
              INKRIS!!!
            </button>
          </div>
        )} />
        <Route path="/todo/:filter?" component={TodoList} />
        <Route path="/hocs" component={ImagesGetter} />
        <Route path="/message" render={ () => (
          <MessageContainer>
            Test
          </MessageContainer>
        ) } />
        <Route path="/image" render={ () => (
          <div>
            <h2>Image redux</h2>
            {spinnerXD}
            {error}
            {receivedAt}
            {image}
            <input type="text" ref={input => this.inputRef = input} defaultValue="https://source.unsplash.com/random/100x100" />
            <button onClick={() => this.props.fetchImage(this.inputRef.value)}>Get image</button>
            <button onClick={() => this.inputRef.value = 'https://source.unsplash.com/random/100x100'}>Get standard unsplash source</button>
          </div>
        ) } />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  counter: state.counter,
  image: state.image
});

export default withRouter(connect(
  mapStateToProps,
  { incrementBy, fetchImage }
)(App));
