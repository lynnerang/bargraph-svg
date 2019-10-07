import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createMount } from '@material-ui/core/test-utils';
import Slider from "@material-ui/core/Slider";

describe('App', () => {
  let mount;

  beforeEach(() => {
    mount = createMount();
  });

  afterEach(() => {
    mount.cleanUp();
  });


  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('matches the snapshot', () => {
    const wrapper = mount(<App />);
    expect(wrapper).toMatchSnapshot();
  })

  it('displays an initial volt count of zero', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('.volts-screen').text()).toEqual('0.000');
  })

  it('updates the volts displayed when the slider value changes', () => {
    const wrapper = mount(<App />);
    wrapper.find(Slider).at(0).simulate('change', { target: { value: 500 } });
    setTimeout(() => expect(wrapper.find('.volts-screen').text()).toEqual('0.500'), 0);
  })

});