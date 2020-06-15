import React from 'react';

const TestPage = (props) => {
  console.log(props);
  return (
    <div>testPage</div>
  )
}

export default (props) => {
  return (
    <TestPage {...props} />
  )
}