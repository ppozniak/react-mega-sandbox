import React from 'react';
import PropTypes from 'prop-types';

AccountDetails.propTypes = {
  username: PropTypes.string.isRequired,
};

function AccountDetails({ username }) {
  return (
    <div>
      Hello {username}
    </div>
  );
};


export default AccountDetails;