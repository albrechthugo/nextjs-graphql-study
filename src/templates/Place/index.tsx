import Image from 'next/image'
import { NextSeo } from 'next-seo'
import LinkWrapper from 'components/LinkWrapper'
import * as S from './styles'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import { useRouter } from 'next/dist/client/router'

type Gallery = {
  url: string
  width: string
  height: string
}

export type PlaceTemplateProps = {
  place: {
    name: string
    slug: string
    description: {
      text: string
    }
    gallery: Array<Gallery>
  }
}

const PlaceTemplate = ({ place }: PlaceTemplateProps) => {
  const router = useRouter()

  if (router.isFallback) return null

  return (
    <>
      <NextSeo
        title={`${place.name} | Next Places`}
        description={place.description.text || `Where? ${place.name}`}
      />
      <LinkWrapper href="/">
        <CloseOutline size={32} aria-label="Back to home" />
      </LinkWrapper>

      <S.Wrapper>
        <S.Content>
          <S.PlaceName>{place.name}</S.PlaceName>

          <S.Description>
            <p>{place.description.text}</p>
          </S.Description>

          <S.Gallery>
            {place.gallery.map((image, i) => (
              <Image
                key={i}
                src={image.url}
                alt={place.name}
                width={1000}
                height={600}
                quality={75}
              />
            ))}
          </S.Gallery>
        </S.Content>
      </S.Wrapper>
    </>
  )
}

export default PlaceTemplate
