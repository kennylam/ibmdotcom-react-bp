import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'carbon-components-react';

const LocaleModal = ({
  isOpen,
  closeModal,
}) => (
  <Modal
    id="locale-modal"
    className="locale-modal"
    handleSubmit={null}
    passiveModal={false}
    danger={false}
    buttonTriggerText="click me"
    renderTriggerButtonIcon={false}
    modalLabel="label"
    modalHeading="select region"
    shouldCloseAfterSubmit
    onRequestClose={closeModal}
    onBlur={closeModal}
    open={isOpen}
  >
    <p>this is the modal content</p>
  </Modal>
);

LocaleModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default LocaleModal;

