import React from 'react';
import HeroBanner from './HeroBanner';

export default {
  title: 'Components/HeroBanner',
  component: HeroBanner,
};

const Template = (args) => <HeroBanner {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Welcome to Our Website',
  subtitle: 'Discover amazing products and services.',
  buttonText: 'Get Started',
};
