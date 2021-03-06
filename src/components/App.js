import React, { Component } from 'react';
import { Button } from 'carbon-components-react';
import DotcomMasthead from './DotcomMasthead/DotcomMasthead';
import LocaleModal from './LocaleModal/LocaleModal';

class App extends Component {
  constructor(props) {
    super(props);

    this.openLocaleModal = this.openLocaleModal.bind(this);
    this.closeLocaleModal = this.closeLocaleModal.bind(this);

    this.state = {
      isLocaleModalOpen: false,
    };
  }

  openLocaleModal() {
    this.setState({ isLocaleModalOpen: true });
  }

  closeLocaleModal() {
    this.setState({ isLocaleModalOpen: false });
  }

  render() {
    const {
      isLocaleModalOpen,
    } = this.state;

    return (
      <div className="App">
        <DotcomMasthead />
        <Button
          onClick={this.openLocaleModal}
        >
          Show modal
        </Button>
        <LocaleModal
          isOpen={isLocaleModalOpen}
          closeModal={this.closeLocaleModal}
        />
      </div>
    );
  }
}

export default App;

