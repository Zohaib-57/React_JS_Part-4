import React from 'react';

function ChildComponent(paretnAdoptedName) {
  return (
    <div>
      <h3>Child Component</h3>
      <p>Received Data: {paretnAdoptedName.userName}</p>
    </div>
  );
}

export default ChildComponent;
