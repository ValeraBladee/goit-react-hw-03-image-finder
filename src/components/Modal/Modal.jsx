import css from './Modal.module.css';
import React, { Component } from 'react';

class Modals extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  closeModal = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { url } = this.props;
    return (
      <div className={css.Overlay} onClick={this.closeModal}>
        <div className={css.Modal}>
          <img src={url} alt="" />
        </div>
      </div>
    );
  }
}

export default Modals;
