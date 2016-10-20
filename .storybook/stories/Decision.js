import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Decision from '../../src/index.js';

import 'tachyons/css/tachyons.min.css'

storiesOf('Decision', module)
  .add('no wrapping', () => (
    <Decision
      onClick={action('Delete action continues.')}
      >Foobar
    </Decision>
  ))
    .add('default', () => (
      <Decision>
        <button onClick={action('Delete action continues.')}>Delete</button>
      </Decision>
    ))
  .add('custom text', () => (
    <Decision
      message="Deleting this stuff is probably a bad idea..."
      positiveLabel="I don't care"
      negativeLabel="Whoops, nevermind"
      >
      <button onClick={action('Delete action continues.')}>Delete</button>
    </Decision>
  ))
  .add('component as message', () => (
    <Decision
      message={<ul><li>Reason one</li><li>Reason two</li></ul>}
      >
      <button onClick={action('Delete action continues.')}>Delete</button>
    </Decision>
  ))
  .add('Simple style', () => (
    <Decision
      header='Deleting messages'
      message={'Your inbox is getting full, would you like us to enable automatic archiving of old messages?'}
      >
      <button onClick={action('Delete action continues.')}>Delete</button>
    </Decision>
  ))
  .add('Tachyons', () => (
    <Decision
      classSet='tachyons'
      header='Deleting messages'
      message={'Your inbox is getting full, would you like us to enable automatic archiving of old messages?'}
      >
      <button onClick={action('Delete action continues.')}>Delete</button>
    </Decision>
  ))
