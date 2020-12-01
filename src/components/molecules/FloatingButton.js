import { Navbar, FabBackdrop, Fab, Icon, FabButtons, FabButton, Block, Page } from 'framework7-react';

import React from 'react'

const FloatingButton = () => {
    return (
        <Page>
        <Navbar title="FAB Backdrop" />
    
        {/* FAB Backdrop */}
        <FabBackdrop slot="fixed" />
    
        {/* FAB Right Bottom */}
        <Fab position="right-bottom" slot="fixed">
          <Icon ios="f7:plus" aurora="f7:plus" md="material:add"></Icon>
          <Icon ios="f7:xmark" aurora="f7:xmark" md="material:close"></Icon>
          <FabButtons position="top">
            <FabButton label="Action 1">1</FabButton>
            <FabButton label="Action 2">2</FabButton>
          </FabButtons>
        </Fab>
    
        <Block>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, quo rem beatae, delectus eligendi est saepe molestias ... voluptatibus eligendi.</p>
        </Block>
      </Page>
    )
}

export default FloatingButton
