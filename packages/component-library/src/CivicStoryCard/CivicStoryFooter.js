import React, { Component, PropTypes } from 'react';
import copy from 'copy-to-clipboard';
import { css } from 'emotion';
import CivicStoryLink from './CivicStoryLink';
import { ICONS } from '../styleConstants';

const MS_TO_SWITCH_TEXT = 3000; // 3 seconds

const actionsClass = css`
  padding: 24px;
  display: flex;
  justify-content: center;

  & > div {
    margin-right: 32px;
  }
`;

export default class StoryFooter extends Component {

  static defaultProps = {
    cardId: 'some-card-id',
    collectionId: 'some-collection-id',
  }

  static propTypes = {
    cardId: PropTypes.string,
    collectionId: PropTypes.string,
  }

  constructor(props) {
    super(props);
    this.state = {
      copied: false,
    };
  }

  setToFalse = () => this.setState({ copied: false });

  switchState = ms => setTimeout(this.setToFalse, ms);

  handleCopy = () => {
    const { collectionId, cardId } = this.props;
    // NOTE: we need to make sure this will work on all browsers
    copy(`${window.location.origin}/${collectionId}/${cardId}`);
    this.switchState(MS_TO_SWITCH_TEXT);
    this.setState({ copied: true });
  }

  render() {
    const { collectionId, cardId } = this.props;
    const shareTxt = this.state.copied ? 'Link copied!' : 'Share card'; // if copied, show Link copied, otherwise, show Share card
    const shareIcon = this.state.copied ? ICONS.check : ICONS.link;
    return (
      <div className={actionsClass}>
        <CivicStoryLink className={'Context'} route={`/${collectionId}/${cardId}`} icon={ICONS.info}>Source</CivicStoryLink>
        <CivicStoryLink className={'Context'} route={`/${collectionId}/${cardId}`} icon={ICONS.eye}>View card</CivicStoryLink>
        <CivicStoryLink className={'Share'} action={this.handleCopy} icon={shareIcon}>{shareTxt}</CivicStoryLink>
      </div>
    );
  }
}
