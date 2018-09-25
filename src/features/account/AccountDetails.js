import React from 'react';
import PropTypes from 'prop-types';

function AccountDetails({ username, logout }) {
  return (
    <div>
      Hello {username}.
      <button type="button" onClick={logout}>
        Logout
      </button>
    </div>
  );
}

AccountDetails.propTypes = {
  username: PropTypes.string,
  logout: PropTypes.func.isRequired,
};

export default AccountDetails;
