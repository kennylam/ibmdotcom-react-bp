import React from 'react';
import PropTypes from 'prop-types';
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenu,
  HeaderMenuItem
} from 'carbon-components-react/lib/components/UIShell';

const DotcomMasthead = () => (
  <div className="container">

    <Header aria-label="IBM">
      <HeaderName href="#" prefix="IBM"></HeaderName>
      <HeaderNavigation aria-label="IBM">
        <HeaderMenuItem href="#">Link 1</HeaderMenuItem>
        <HeaderMenuItem href="#">Link 2</HeaderMenuItem>
        <HeaderMenuItem href="#">Link 3</HeaderMenuItem>
        <HeaderMenu aria-label="Link 4" menuLinkName="Link 4">
          <HeaderMenuItem href="#">Sublink 1</HeaderMenuItem>
          <HeaderMenuItem href="#">Sublink 2</HeaderMenuItem>
          <HeaderMenuItem href="#">Sublink 3</HeaderMenuItem>
        </HeaderMenu>
      </HeaderNavigation>
    </Header>
  </div>
);

export default DotcomMasthead;

