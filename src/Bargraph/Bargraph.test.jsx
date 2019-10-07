import React from 'react';
import ReactDOM from 'react-dom';
import Bargraph from './Bargraph';
import { mount, render } from 'enzyme';

describe('Bargraph', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Bargraph />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('matches the snapshot with volts of 0', () => {
    const wrapper = mount(<Bargraph volts={0} />);
    expect(wrapper).toMatchSnapshot();
  })

  it('matches the snapshot with volts of 1', () => {
    const wrapper = mount(<Bargraph volts={1} />);
    expect(wrapper).toMatchSnapshot();
  })

  it('matches the snapshot with volts of 2', () => {
    const wrapper = mount(<Bargraph volts={2} />);
    expect(wrapper).toMatchSnapshot();
  })

  it('matches the snapshot with volts of 3', () => {
    const wrapper = mount(<Bargraph volts={3} />);
    expect(wrapper).toMatchSnapshot();
  })

  it('matches the snapshot with volts of 4', () => {
    const wrapper = mount(<Bargraph volts={4} />);
    expect(wrapper).toMatchSnapshot();
  })

  it('matches the snapshot with volts of 5', () => {
    const wrapper = mount(<Bargraph volts={5} />);
    expect(wrapper).toMatchSnapshot();
  })

  it('matches the snapshot when volts is not a whole integer', () => {
    const wrapper = mount(<Bargraph volts={4.532} />);
    expect(wrapper).toMatchSnapshot();
  })

  it('adds a class of "active" to lit diodes based on total volts received', () => {
    const wrapper = mount(<Bargraph volts={3} />);
    setTimeout(() => expect(wrapper.find('.active').length).toEqual(3), 0);
  })

  it('adds a class of "partial" to the next diode if between 0 to 1000 milliVolts are received', () => {
    const wrapper = mount(<Bargraph volts={3.678} />);
    setTimeout(() => expect(wrapper.find('.active').length).toEqual(3), 0);
    setTimeout(() => expect(wrapper.find('.partial').length).toEqual(1), 0);
  })

  it('does not add any class of "partial" if the volts received is a whole integer', () => {
    const wrapper = mount(<Bargraph volts={4} />);
    setTimeout(() => expect(wrapper.find('.active').length).toEqual(4), 0);
    setTimeout(() => expect(wrapper.find('.partial').length).toEqual(0), 0);
  })
});