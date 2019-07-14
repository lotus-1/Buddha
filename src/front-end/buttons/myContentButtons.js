import React from 'react'
import Button from 'react-bootstrap/Button'
import './myContentButtons.css';
class Buttons extends React.Component {
render() {
  const {
    name,
    variant
  } = this.props;
  return (
    <div>
      <Button id="btn" className={variant}>{name}</Button>
    </div>
  );
}
}
export default Buttons;
