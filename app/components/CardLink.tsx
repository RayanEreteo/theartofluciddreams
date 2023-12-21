import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import Link from 'next/link'

interface cardLinkInterface{
  Thumbnail: String,
  Title: String,
  RedirectTo: String
}


function CardLink({ Thumbnail, Title, RedirectTo }: cardLinkInterface) {
  return (
    <Link href={RedirectTo}>{Title}</Link>
  )
}

export default CardLink