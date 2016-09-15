import { configure } from '@kadira/storybook';

function loadStories() {
  require('./stories/Decision');
}

configure(loadStories, module);
