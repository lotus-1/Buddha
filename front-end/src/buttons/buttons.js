import React from 'react'
import Button from 'react-bootstrap/Button'
import './buttons.css';
class ButtonItem extends React.Component {
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
export default ButtonItem
