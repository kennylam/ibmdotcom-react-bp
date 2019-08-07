import React from 'react';
import {
  Search20,
  UserProfile20
} from '@carbon/icons-react';
import { ReactComponent as Logo } from '../Icons/svg/ibm-logo.svg';
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenu,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction
} from 'carbon-components-react/lib/components/UIShell';
import mastheadLinks from './DotcomMastheadL0';

const DotcomMasthead = () => (
  <div className="container">
    <Header aria-label="IBM">
      <Logo />
      <HeaderNavigation aria-label="IBM">

        {mastheadLinks.map(item => {
          if (item.subnav) {
            return (
              <HeaderMenu aria-label={item.name} menuLinkName={item.name}>
                {item.subnav.map(subnav => {
                  return (
                    <HeaderMenuItem href={subnav.path}>{subnav.name}</HeaderMenuItem>                    
                  );
                })
                }
              </HeaderMenu>
            );
          } else {
            return <HeaderMenuItem href={item.path}>{item.name}</HeaderMenuItem>
          }
          }
        )}
      </HeaderNavigation>
      <HeaderGlobalBar>
        <HeaderGlobalAction
          aria-label="Search"
        >
          <Search20 />
        </HeaderGlobalAction>
        <HeaderGlobalAction
          aria-label="User profile"
        >
          <UserProfile20 />
        </HeaderGlobalAction>
      </HeaderGlobalBar>
    </Header>
  </div>
);

export default DotcomMasthead;
