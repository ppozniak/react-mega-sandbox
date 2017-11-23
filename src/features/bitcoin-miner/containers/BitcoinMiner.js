import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { mineBitcoins } from '../actions';

class BitcoinMiner extends Component {
  render() {
    const mineBitcoins = () => {
      this.props.mineBitcoins();
    }
    return (
      <div>
        <h2>Bitcoin miner simulator</h2>

        <Button
          content='MINE'
          icon='bitcoin'
          label={{ as: 'a', basic: true, content: this.props.bitcoins }}
          labelPosition='right'
          onClick={mineBitcoins}
        />
        <span className="tiny">Per click: {this.props.bitcoinsPerMine}</span>

        <Button
          content='Upgrade'
          icon='plus'
          label={{ as: 'a', basic: true, content: this.props.bitcoins }}
          labelPosition='right'
          onClick={mineBitcoins}
          disabled={this.props.bitcoins < 100}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ bitcoins }) => ({
  bitcoins: bitcoins.amount,
  bitcoinsPerMine: bitcoins.perMine
});

export default connect(
  mapStateToProps,
  { mineBitcoins }
)(BitcoinMiner);