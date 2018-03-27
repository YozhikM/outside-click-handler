/* @flow */

import * as React from 'react';

type Props = {
  children: React.Node,
  onOutsideClick: Function,
};

export default class OutsideClickHandler extends React.Component<Props, void> {
  childNode: ?HTMLElement;
  onOutsideClick: Function;
  setChildNodeRef: Function;

  constructor(props: Props) {
    super(props);

    this.onOutsideClick = this.onOutsideClick.bind(this);
    this.setChildNodeRef = this.setChildNodeRef.bind(this);
  }

  componentDidMount() {
    if (!document.body) return;

    document.body.addEventListener('click', this.onOutsideClick);
  }

  componentWillUnmount() {
    if (!document.body) return;

    document.body.removeEventListener('click', this.onOutsideClick);
  }

  onOutsideClick(e: Event) {
    const { onOutsideClick } = this.props;
    const { childNode } = this;
    const isDescendantOfRoot = childNode && childNode.contains((e.target: any));
    if (!isDescendantOfRoot) {
      onOutsideClick();
    }
  }

  setChildNodeRef(ref: ?HTMLElement) {
    this.childNode = ref;
  }

  render() {
    return <div ref={this.setChildNodeRef}>{this.props.children}</div>;
  }
}
