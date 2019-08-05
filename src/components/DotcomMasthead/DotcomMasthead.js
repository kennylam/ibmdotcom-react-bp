import React from 'react';
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenu,
  HeaderMenuItem
} from 'carbon-components-react/lib/components/UIShell';
import Icon from '../components/Icon';
import mastheadLinks from './DotcomMastheadL0';

const DotcomMasthead = () => (
  <div className="container">
    <Header aria-label="IBM">
      <HeaderName href="#" prefix="IBM"></HeaderName>
      <HeaderNavigation aria-label="IBM">

        {mastheadLinks.map(item => {
          if (item.subnav) {
            return (
              <HeaderMenu aria-label={item.name} menuLinkName={item.name}>
                <HeaderMenuItem href={item.path}>{item.name}</HeaderMenuItem>
              </HeaderMenu>
            );
          } else {
            return <HeaderMenuItem href={item.path}>{item.name}</HeaderMenuItem>
          }
          }
        )}

      </HeaderNavigation>
    </Header>
  </div>
);

export default DotcomMasthead;

