
# OutsideClickHandler

[![Greenkeeper badge](https://badges.greenkeeper.io/YozhikM/outside-click-handler.svg)](https://greenkeeper.io/)
[![npm](https://img.shields.io/npm/dt/outside-click-handler.svg)](http://www.npmtrends.com/outside-click-handler)
![FlowType compatible](https://img.shields.io/badge/flowtype-compatible-brightgreen.svg)

This component is designed to handle all clicks outside, for example, to open and close modal windows.

## Features

- Easy to use
- Tests covered
- Flowtype definitions
- Lightweight (2.8kb gzip)

## API

The component accepts two types of props: children and callback function.
At `componentDidMount()` adds the listener, who is waiting for the click event, and `componentWillUnmount()` is removed.

````js
type Props = {
  children: React.Node,
  onOutsideClick: Function,
};
````

## How to use

````js
class Wrapper extends React.Component {
  onClick = () => this.setState({ isShownHidden: !this.state.isShownHidden });

  render() {
    const { isShownHidden } = this.state;
    return (
      <OutsideClickHandler onOutsideClick={this.onClick}>
        <span>Im your child!</span>
        {isShownHidden && <span>Im your hidden child!</span>}
      </OutsideClickHandler>
    );
  }
}
````

## Performance

If you want to use a component in lists, use conditions or methods to avoid poor performance.


## Support

If you have any questions, please email me at botev.st@gmail.com or open the issue.

To use static typing, make sure [that you have installed Flow](https://flow.org/en/docs/install).
