import React from 'react';

import Card from './Card';

export default {
  title: 'Card'
};

const CustomContent = ({ title }) => (
  <div style={{textAlign: 'center'}}>
    <span>{title}</span>
  </div>
);

export const defaultCard = () => (
  <Card>
    Default Card
  </Card>
);

export const cardWithHeaderAndFooter = () => (
  <Card
    headerContent={
      <CustomContent title={'Card Header/Title'} />
    }
    footerContent={
      <CustomContent title={'Card Footer/Title'} />
    }
  >
    Card with a Header and Footer
  </Card>
);
