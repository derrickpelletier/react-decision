# Decision

A react decorator for clickable items to confirm user intent.


------

`npm install react-decision`

Use `<Decision>` to wrap an item that has an `onClick` prop. When clicked, the user will be presented with a modal to confirm their intentions before continuing the onClick or aborting.

------
## Example

All props are optional. This example shows all available props.

```javascript
<Decision
  header="Are you sure?!"
  message="Deleting this stuff is probably a bad idea..."
  positiveLabel="I don't care"
  negativeLabel="Whoops, nevermind"
  >
  <button onClick={deleteImportantStuff()}>delete?!</button>
</Decision>


```
------

## props

+ **header**: `String`, header text in modal
+ **message**: `String`, message text in modal
+ **positiveLabel**: `String`, label for the positive/continue button.
+ **negativeLabel**: `String`, label for the negative/cancel/abort button.
+ **useFlex**: `Boolean`, defaults to true, uses flexbox to centre the modal. Otherwise repositions vertically based on dynamic height.
