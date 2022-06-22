import React from 'react';

import Spinner from './Spinner';

const RedactedDisplay = ({ isLoading, text }) => {
  return (
    <div style={{ marginTop: '2em' }}>
      {isLoading ? <Spinner /> : <pre>{text}</pre>}
    </div>
  );
};

export default RedactedDisplay;
