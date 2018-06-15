import React from 'react';

class Componente extends React.Component {
  render () {
   const activeElements = this.props.objects
      .filter(obj => obj.status)
      .map(obj => (<p>{obj.value}</p>));
    return (<div>{activeElements}</div>);
  }
}

export default Componente;