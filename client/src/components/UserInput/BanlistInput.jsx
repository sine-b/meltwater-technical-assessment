import React, { useContext } from 'react';

import { UserInputContext } from './UserInput';

import './ban-list-input.css';

const BanlistInput = () => {
  const { banString, setBanString } = useContext(UserInputContext);

  return (
    <div className="ban-list-container">
      <label htmlFor="ban-string-input">
        Type in a list of words/phrases to redact:
      </label>
      <textarea
        id="ban-string-input"
        className="ban-list-textarea"
        name="ban-string-input"
        value={banString}
        onChange={(e) => {
          setBanString(e.target.value);
        }}
      />
    </div>
  );
};

export default BanlistInput;
