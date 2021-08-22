import Link from 'next/link'
import * as S from './styles'

type LinkWrapper = {
  href: string
  children: React.ReactNode
}

const LinkWrapper = ({ href, children }: LinkWrapper) => (
  <S.Wrapper>
    <Link href={href}>{children}</Link>
  </S.Wrapper>
)

export default LinkWrapper
