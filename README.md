
# OutsideClickHandler

## API

The component accepts two types of props: children and callback function.
At `componentDidMount()` adds the listener, who is waiting for the click event, and `componentWillUnmount()` is removed.

`type Props = {
  children: React.Node,
  onOutsideClick: Function,
};`


To use static typing, make sure [that you have installed Flow](https://flow.org/en/docs/install).
