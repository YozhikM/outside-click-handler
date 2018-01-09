/* @flow */

import React from 'react';
import { shallow } from 'enzyme';
import OutsideClickHandler from '../OutsideClickHandler';

const ChildrenComponent = () => <span>Children</span>;

describe('OutsideClickHandler', () => {
  it('render()', () => {
    const onOutsideClick = jest.fn();
    const wrapper = shallow(
      <OutsideClickHandler onOutsideClick={onOutsideClick}>
        <ChildrenComponent />
      </OutsideClickHandler>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('componentDidMount()', () => {
    const onOutsideClick = jest.fn();
    const wrapper = shallow(
      <OutsideClickHandler onOutsideClick={onOutsideClick}>
        <ChildrenComponent />
      </OutsideClickHandler>
    );
    // $FlowFixMe
    document.addEventListener = jest.fn();
    wrapper.instance().componentDidMount();

    expect(document.addEventListener).toBeCalledWith('click', wrapper.instance().onOutsideClick);
  });

  it('componentWillUnmount()', () => {
    const onOutsideClick = jest.fn();
    const wrapper = shallow(
      <OutsideClickHandler onOutsideClick={onOutsideClick}>
        <ChildrenComponent />
      </OutsideClickHandler>
    );
    // $FlowFixMe
    document.removeEventListener = jest.fn();
    wrapper.instance().componentWillUnmount();

    expect(document.removeEventListener).toBeCalledWith('click', wrapper.instance().onOutsideClick);
  });

  it('onOutsideClick()', () => {
    const e = jest.fn();
    const onOutsideClick = jest.fn();
    const wrapper = shallow(
      <OutsideClickHandler onOutsideClick={onOutsideClick}>
        <ChildrenComponent />
      </OutsideClickHandler>
    );
    wrapper.instance().onOutsideClick(e);

    expect(onOutsideClick).toBeCalled();
  });

  it('setChildNodeRef()', () => {
    const onOutsideClick = jest.fn();
    const wrapper = shallow(
      <OutsideClickHandler onOutsideClick={onOutsideClick}>
        <ChildrenComponent />
      </OutsideClickHandler>
    );
    wrapper.instance().setChildNodeRef(<ChildrenComponent />);

    expect(wrapper.instance().childNode).toEqual(<ChildrenComponent />);
  });
});
