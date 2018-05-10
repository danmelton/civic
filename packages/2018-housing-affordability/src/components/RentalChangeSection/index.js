import React from 'react';
import '@hackoregon/component-library/assets/global.styles.css';
import { sectionClass, mainSectionClass, rightSectionClass } from '../shared/styles';
import { HorizontalBarChart } from '@hackoregon/component-library';

const data = [
  { sortOrder: 1, rentalChange: 2000, label: '$0-$400' },
  { sortOrder: 2, rentalChange: 8000, label: 'Less than $400' },
  { sortOrder: 3, rentalChange: 6000, label: '$400 to $599' },
  { sortOrder: 4, rentalChange: 3000, label: '600 to 800' },
  { sortOrder: 5, rentalChange: 1000, label: '800 to 1000' }
];

const RentalChangeSection = () => (
  <div className={sectionClass}>
    <div className={mainSectionClass}>
      <h2>How has rental affordability changed?</h2>
        <HorizontalBarChart
          data={data}
          dataKey={'sortOrder'}
          dataValue={'rentalChange'}
          dataKeyLabel={'label'}
          title={'Change in Rental Units'}
          subtitle={'By Monthly Rent Bracket'}
        />
    </div>
    <div className={rightSectionClass}>
    </div>
  </div>
);

RentalChangeSection.displayName = 'Rental Affordability Change Section';

export default RentalChangeSection;
