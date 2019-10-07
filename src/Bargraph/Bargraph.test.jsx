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

  it('matches the snapshot with power of 0', () => {
    const wrapper = mount(<Bargraph power={0} />);
    expect(wrapper).toMatchSnapshot();
  })

  it('matches the snapshot with power of 1', () => {
    const wrapper = mount(<Bargraph power={1} />);
    expect(wrapper).toMatchSnapshot();
  })

  it('matches the snapshot with power of 2', () => {
    const wrapper = mount(<Bargraph power={2} />);
    expect(wrapper).toMatchSnapshot();
  })

  it('matches the snapshot with power of 3', () => {
    const wrapper = mount(<Bargraph power={3} />);
    expect(wrapper).toMatchSnapshot();
  })

  it('matches the snapshot with power of 4', () => {
    const wrapper = mount(<Bargraph power={4} />);
    expect(wrapper).toMatchSnapshot();
  })

  it('matches the snapshot with power of 5', () => {
    const wrapper = mount(<Bargraph power={5} />);
    expect(wrapper).toMatchSnapshot();
  })

  it('has only the expected class with power of 0', () => {
    const wrapper = mount(<Bargraph power={0} />);
    expect(wrapper.childAt(0).hasClass('power-0')).toBe(true);
    expect(wrapper.childAt(0).hasClass('power-1')).toBe(false);
    expect(wrapper.childAt(0).hasClass('power-2')).toBe(false);
    expect(wrapper.childAt(0).hasClass('power-3')).toBe(false);
    expect(wrapper.childAt(0).hasClass('power-4')).toBe(false);
    expect(wrapper.childAt(0).hasClass('power-5')).toBe(false);
  })

  it('has only the expected class with power of 1', () => {
    const wrapper = mount(<Bargraph power={1} />);
    expect(wrapper.childAt(0).hasClass('power-1')).toBe(true);
    expect(wrapper.childAt(0).hasClass('power-2')).toBe(false);
    expect(wrapper.childAt(0).hasClass('power-3')).toBe(false);
    expect(wrapper.childAt(0).hasClass('power-4')).toBe(false);
    expect(wrapper.childAt(0).hasClass('power-5')).toBe(false);
    expect(wrapper.childAt(0).hasClass('power-0')).toBe(false);
  })

  it('has only the expected class with power of 2', () => {
    const wrapper = mount(<Bargraph power={2} />);
    expect(wrapper.childAt(0).hasClass('power-2')).toBe(true);
    expect(wrapper.childAt(0).hasClass('power-1')).toBe(false);
    expect(wrapper.childAt(0).hasClass('power-3')).toBe(false);
    expect(wrapper.childAt(0).hasClass('power-4')).toBe(false);
    expect(wrapper.childAt(0).hasClass('power-5')).toBe(false);
    expect(wrapper.childAt(0).hasClass('power-0')).toBe(false);
  })

  it('has only the expected class with power of 3', () => {
    const wrapper = mount(<Bargraph power={3} />);
    expect(wrapper.childAt(0).hasClass('power-3')).toBe(true);
    expect(wrapper.childAt(0).hasClass('power-1')).toBe(false);
    expect(wrapper.childAt(0).hasClass('power-2')).toBe(false);
    expect(wrapper.childAt(0).hasClass('power-4')).toBe(false);
    expect(wrapper.childAt(0).hasClass('power-5')).toBe(false);
    expect(wrapper.childAt(0).hasClass('power-0')).toBe(false);
  })

  it('has only the expected class with power of 4', () => {
    const wrapper = mount(<Bargraph power={4} />);
    expect(wrapper.childAt(0).hasClass('power-4')).toBe(true);
    expect(wrapper.childAt(0).hasClass('power-1')).toBe(false);
    expect(wrapper.childAt(0).hasClass('power-2')).toBe(false);
    expect(wrapper.childAt(0).hasClass('power-3')).toBe(false);
    expect(wrapper.childAt(0).hasClass('power-5')).toBe(false);
    expect(wrapper.childAt(0).hasClass('power-0')).toBe(false);
  })

  it('has only the expected class with power of 5', () => {
    const wrapper = mount(<Bargraph power={5} />);
    expect(wrapper.childAt(0).hasClass('power-5')).toBe(true);
    expect(wrapper.childAt(0).hasClass('power-1')).toBe(false);
    expect(wrapper.childAt(0).hasClass('power-2')).toBe(false);
    expect(wrapper.childAt(0).hasClass('power-3')).toBe(false);
    expect(wrapper.childAt(0).hasClass('power-4')).toBe(false);
  })
});