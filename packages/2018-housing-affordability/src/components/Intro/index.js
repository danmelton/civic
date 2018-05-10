import React from 'react';
import { css } from 'emotion';
import '@hackoregon/component-library/assets/global.styles.css';
import colors from '../shared/colors';

const sectionClass = css`
  display: flex;
`;

const mainSectionClass = css`
  flex: 3;
`;

const rightSectionClass = css`
  flex: 1;
  display: flex;
  align-items: start;
`;

const menuClass = css`
  list-style: none;
  border-left: 1px solid ${colors.blue};
  padding-left: 10px;
`;

const menuItemClass = css`
  margin-bottom: 5px;
  &:hover {
    color: ${colors.blue};
  }
`;

const menuHeaderClass = css`
  font-weight: 700;
  color: ${colors.blue};
  margin-bottom: 10px;
`;

const Intro = () => (
  <div className={sectionClass}>
    <div className={mainSectionClass}>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Duis nec condimentum massa, in euismod mauris.
        Vestibulum ultricies porta nisi, id lobortis nulla malesuada eget.</p>
      <p>Pellentesque interdum eros et nisl varius, a interdum lacus dapibus.
        Maecenas commodo semper consequat. Praesent a mollis elit, at rutrum mi.
        Proin lectus urna, bibendum sed massa eget, convallis finibus metus.</p>
      <p>Pellentesque interdum eros et nisl varius, a interdum lacus dapibus.
        Maecenas commodo semper consequat. Praesent a mollis elit, at rutrum mi.
        Proin lectus urna, bibendum sed massa eget, convallis finibus metus.</p>
    </div>
    <div className={rightSectionClass}>
      <ul className={menuClass}>
        <li className={menuHeaderClass}>Rental Affordability</li>
        <li className={menuItemClass}>What does affordable mean?</li>
        <li className={menuItemClass}>How has rental affordability changed?</li>
        <li className={menuItemClass}>What are area governments doing?</li>
        <li className={menuItemClass}>Resources</li>
        <li className={menuItemClass}>Acknowledgements</li>
      </ul>
    </div>
  </div>
);

Intro.displayName = 'Intro';

export default Intro;
