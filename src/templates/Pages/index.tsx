import LinkWrapper from 'components/LinkWrapper'
import { NextSeo } from 'next-seo'
import * as S from './styles'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'

export type PageTemplateProps = {
  heading: string
  body: string
}

const PageTemplate = ({ heading, body }: PageTemplateProps) => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} aria-label="Close" />
    </LinkWrapper>

    <S.Heading>{heading}</S.Heading>

    <S.Body>
      <div dangerouslySetInnerHTML={{ __html: body }}></div>
    </S.Body>
  </S.Content>
)

export default PageTemplate
