import React from 'react';
import '@hackoregon/component-library/assets/global.styles.css';
import { sectionClass, mainSectionClass, rightSectionClass } from '../shared/styles';

const MFIIntro = () => (
  <div className={sectionClass}>
    <div className={mainSectionClass}>
      <h2>What does affordable mean?</h2>
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
    </div>
  </div>
);

MFIIntro.displayName = 'Median Family Income Explanation';

export default MFIIntro;
