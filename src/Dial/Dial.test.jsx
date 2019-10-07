import React from 'react';
import ReactDOM from 'react-dom';
import Dial from './Dial';
import { mount } from 'enzyme';

describe('Dial', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Dial />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('matches the snapshot with name of "Coarse"', () => {
    const wrapper = mount(<Dial name="Coarse"/>);
    expect(wrapper).toMatchSnapshot();
  })

  it('matches the snapshot with name of "Fine"', () => {
    const wrapper = mount(<Dial name="Fine" />);
    expect(wrapper).toMatchSnapshot();
  })

  it('calls onDialChange with a value of 100 when name is "Coarse" and the up button is clicked', () => {
    const mockOnDialChange = jest.fn();
    const wrapper = mount(<Dial name="Coarse" onDialChange={mockOnDialChange} />);
    
    wrapper.find('.fa-caret-up').simulate('click');

    expect(mockOnDialChange).toHaveBeenCalledWith(100);
  })

  it('calls onDialChange with a value of -100 when name is "Coarse" and the down button is clicked', () => {
    const mockOnDialChange = jest.fn();
    const wrapper = mount(<Dial name="Coarse" onDialChange={mockOnDialChange} />);

    wrapper.find('.fa-caret-down').simulate('click');

    expect(mockOnDialChange).toHaveBeenCalledWith(-100);
  })

  it('calls onDialChange with a value of 1 when name is "Fine" and the up button is clicked', () => {
    const mockOnDialChange = jest.fn();
    const wrapper = mount(<Dial name="Fine" onDialChange={mockOnDialChange} />);

    wrapper.find('.fa-caret-up').simulate('click');

    expect(mockOnDialChange).toHaveBeenCalledWith(1);
  })

  it('calls onDialChange with a value of -1 when name is "Fine" and the down button is clicked', () => {
    const mockOnDialChange = jest.fn();
    const wrapper = mount(<Dial name="Fine" onDialChange={mockOnDialChange} />);

    wrapper.find('.fa-caret-down').simulate('click');

    expect(mockOnDialChange).toHaveBeenCalledWith(-1);
  })

});