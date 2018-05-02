import React from 'react';
import { storiesOf, linkTo } from '@storybook/react'; // eslint-disable-line
import buttonStory from './Button.story';
import storycardStory from './StoryCard.story';
import storyLinkStory from './StoryLink.story';
import storyFooterStory from './StoryFooter.story';
import editableStory from './Editable.story';
import pieStory from './Pie.story';
import sliderStory from './Slider.story';
import barChartStory from './BarChart.story';
import sankeyStory from './Sankey.story';
import placeholderStory from './Placeholder.story';
import dropdownStory from './DropdownMenu.story';
import headerStory from './Header.story';
import Welcome from './Welcome';
import reactMapStory from './ReactMap.story';

import '../assets/global.styles.css';

// stories can be added directly here
storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')} />
  ));

// or imported as functions from files then composed in the order you invoke them
editableStory();
headerStory();
buttonStory();
storyLinkStory();
storyFooterStory();
storycardStory();
pieStory();
barChartStory();
placeholderStory();
sankeyStory();
sliderStory();
dropdownStory();
reactMapStory();