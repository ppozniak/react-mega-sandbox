import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Divider } from 'semantic-ui-react';
import { mineBitcoins } from './reducer';
import BuyBitcoinsForm from './FormCustom';

class BitcoinMiner extends Component {
  render() {
    const { mineBitcoins } = this.props;

    return (
      <div>
        <h2>Bitcoin miner simulator</h2>

        <Button
          content="MINE"
          icon="bitcoin"
          label={{ as: 'a', basic: true, content: this.props.bitcoins }}
          labelPosition="right"
          onClick={mineBitcoins}
        />
        <span className="tiny">Per click: {this.props.bitcoinsPerMine}</span>

        <Divider hidden />
        <BuyBitcoinsForm />
      </div>
    );
  }
}

const mapStateToProps = ({ bitcoins }) => ({
  bitcoins: bitcoins.amount,
  bitcoinsPerMine: bitcoins.perMine,
});

export default connect(
  mapStateToProps,
  { mineBitcoins }
)(BitcoinMiner);
