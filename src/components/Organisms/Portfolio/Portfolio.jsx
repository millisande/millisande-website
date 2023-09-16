import React from 'react';
import { TabContent, Title } from '../../Atoms';
import { CustomContentTile } from '../../Molecules';
import * as S from './Portfolio.style';
import { caseStudies } from './data';

const Portfolio = () => (
  <TabContent>
    <S.Portfolio>
      <S.ContentWrapper>
        <Title title='Case studies/Portfolio' type='h2' />
        <p>
          As much of the work that Millisande works on is client confidential
          this is not an exhaustive list of all her contributions. Please see
          this as a smattering of examples and contact Millie for more details
          of her work if you are interested
        </p>
      </S.ContentWrapper>
      {caseStudies.map(c => (
        <S.CustomContentPadding key={`tile-${c.title}-padding`}>
          <CustomContentTile key={`tile-${c.title}`} {...c}>
            {c.content}
          </CustomContentTile>
        </S.CustomContentPadding>
      ))}
    </S.Portfolio>
  </TabContent>
);

export default Portfolio;
