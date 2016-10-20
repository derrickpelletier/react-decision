# Decision

A react decorator for clickable items to confirm user intent.

------

`npm install react-decision`

Use `<Decision>` to wrap an item that has an `onClick` prop. When clicked, the user will be presented with a modal to confirm their intentions before continuing the onClick or aborting.

![image](https://d17oy1vhnax1f7.cloudfront.net/items/0V403Z3r3v2H0g2c2L11/Screen%20Recording%202016-10-20%20at%2012.40%20AM.gif)

------

## Usage

Can either be used standalone (uses `<button>`), or wrap a component that has an `onClick` property.

**Standalone example**

```javascript
<Decision onClick={deleteImportantStuff}>delete?!</Decision>
```

**Wrapping**

```javascript
<Decision>
  <button onClick={deleteImportantStuff}>delete?!</button>
</Decision>
```

**With props**
```javascript
<Decision
  header="Delete this?!"
  message="Are you sure though?"
  positiveLabel="Yep"
  negativeLabel="Nope"
  >
  <button onClick={deleteImportantStuff}>delete?!</button>
</Decision>
```



### props

+ **header**: `String`, header text in modal
+ **message**: `String`, message text in modal
+ **positiveLabel**: `String`, label for the positive/continue button.
+ **negativeLabel**: `String`, label for the negative/cancel/abort button.
+ **useFlex**: `Boolean`, defaults to true, uses flexbox to centre the modal. Otherwise repositions vertically based on dynamic height.

If using standalone, you can also use:

+ **onClick**: `function`, called when the blocking modal receives positive confirmation.
+ **className**: `String`, classnames passed through to the generated button.
