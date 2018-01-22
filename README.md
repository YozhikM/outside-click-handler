
# OutsideClickHandler

[![Greenkeeper badge](https://badges.greenkeeper.io/YozhikM/outside-click-handler.svg)](https://greenkeeper.io/)

This component is designed to track all clicks outside, for example, to open and close modal windows.

## API

The component accepts two types of props: children and callback function.
At `componentDidMount()` adds the listener, who is waiting for the click event, and `componentWillUnmount()` is removed.

```
type Props = {
  children: React.Node,
  onOutsideClick: Function,
};
```

## How to use

```
class Wrapper extends React.Component {
  onClick = () => this.setState({ isShownHidden: !this.state.isShownHidden });

  render() {
    const { isShownHidden } = this.state;
    return (
      <OutsideClickHandler onOutsideClick={this.onClick}>
        <span>I'm your child!</span>
        {isShownHidden && <span>I'm your hidden child!</span>}
      </OutsideClickHandler>
    );
  }
}
```

## Performance

If you want to use a component in lists, use conditions or methods to avoid poor performance.

## Support

If you have any questions, please email me at botev.st@gmail.com or open the issue.

To use static typing, make sure [that you have installed Flow](https://flow.org/en/docs/install).
