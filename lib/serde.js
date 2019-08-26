'use strict';

const stringify = JSON.stringify;

// Deserialize a string into a JavaScript value and return it.
//   data - a string or Buffer to parse
//
const parse = (data) => {
  if (Buffer.isBuffer(data)) {
    data = data.toString();
  }

  return JSON.parse(data);
};

// Parse a buffer of network messages.
//   data - buffer contents
//   messages - target array
//   Returns the part of the message that has not been received yet
//
const parseNetworkMessages = (data, messages) => {
  const chunks = data.split('\u0000');
  const readyMessagesCount = chunks.length - 1;

  for (let i = 0; i < readyMessagesCount; i++) {
    messages.push(JSON.parse(chunks[i]));
  }

  return chunks[readyMessagesCount];
};

module.exports = {
  stringify,
  parse,
  parseNetworkMessages,
};
