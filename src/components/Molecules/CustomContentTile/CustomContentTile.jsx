import React from 'react';
import { LinkText, Tag, Title } from '../../Atoms';
import * as S from './CustomContentTile.style';
import Accordion from '../Accordion/Accordion';

const CustomContentTile = ({ title, tags, children, tldr, links, image }) => (
  <S.Container>
    <S.MainContent>
      {image && <S.Picture src={image} />}
      <S.Details>
        <Title title={title} type='h2' />
        {tldr && (
          <>
            <Title title='TL;DR' type='h3' />
            <S.TLDRContent>{tldr}</S.TLDRContent>
          </>
        )}
        {links && (
          <>
            <Title title='Relevant links' type='h3' />
            {links.map(l => (
              <LinkText key={`link-${l.text}`} url={l.url}>
                {l.text}
              </LinkText>
            ))}
          </>
        )}
        <Title title='Technologies used:' type='h3' />
        <S.TagContainer>
          {tags &&
            tags.map(tag => (
              <S.TagPadding key={`${title}-${tag.text}-padding`}>
                <Tag type={tag.type} key={`${title}-${tag.text}`}>
                  {tag.text}
                </Tag>
              </S.TagPadding>
            ))}
        </S.TagContainer>
      </S.Details>
    </S.MainContent>
    {children && (
      <S.ContentContainer>
        <Accordion title='Read more'>{children}</Accordion>
      </S.ContentContainer>
    )}
  </S.Container>
);

export default CustomContentTile;
