import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchImage } from '../actions';
import { Header, Button, Input, Segment, Loader, Dimmer, Message } from 'semantic-ui-react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

class FetchAndBase extends Component {
  state = {
    inputVal: '',
    exampleVal: 'https://source.unsplash.com/random/500x500',
    copied: "Copy",
  }

  handleFAE = (e) => {
    e.preventDefault();
    this.props.fetchImage(this.state.inputVal);
  }

  handleExampleSource = (e) => {
    e.preventDefault();
    this.setState({ inputVal: this.exampleVal });
  }

  handleCopy = (text, success) => {
    const message = success ? "Copied!" : "Error";
    this.setState({ copied: message });
    const wtf = parseInt((this.props.base64).replace(/=/g, "").length * 0.75, 10);
    console.log(wtf);
  }

  handleChange = (e) => {
    this.setState({ inputVal: e.target.value });
  }

  render() {
    const error = this.props.error ? <Message negative attached header="Error" content={this.props.error} /> : null;
    const receivedAt = this.props.receivedAt ? (<p>Received at: {this.props.receivedAt}</p>) : null;
    const image = this.props.base64 && !this.props.error ? (<img src={this.props.base64} alt="" />) : null;
    // const disableExampleButton = this.inputVal === this.exampleVal ? 'disabled' : '';

    const output = this.props.base64 || this.props.error ? (
      <div>
        {error}
        <Segment>9
          {receivedAt}
          {image}
          {this.props.base64 && !this.props.error ? (
            <Message className="break-all" size="tiny" disabled>
              {this.props.base64.slice(0, 190) + '...'}
              <CopyToClipboard text={this.props.base64} onCopy={this.handleCopy}>
                <Button attached="right" primary icon="copy" label={this.state.copied} />
              </CopyToClipboard>
            </Message>
          ) : null}
        </Segment>
      </div>
    ) : null;

    return (
      <div>
        <Header as="h2">
          Fetch and base64
        </Header>
        {output}
        <Segment>
          <Dimmer inverted active={this.props.fetching}>
            <Loader />
          </Dimmer>

          <form onSubmit={this.handleFAE}>
            <Input fluid
              action={{
                content: 'Fetch and encode',
                color: 'teal',
              }}
              onChange={this.handleChange}
              value={this.state.inputVal}
            />
          </form>
          <Button secondary disabled="false" onClick={this.handleExampleSource} >Get example unsplash source</Button>
        </Segment>
      </div>
    );
  }
}

const mapStateToProps = ({ image }) => ({
  fetching: image.fetching,
  receivedAt: image.receivedAt,
  base64: image.base64,
  error: image.error,
});

export default connect(
  mapStateToProps,
  { fetchImage }
)(FetchAndBase);