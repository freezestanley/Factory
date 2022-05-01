import React from 'react'
import {
  LazyLoadImage,
  LazyLoadImageProps
} from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

const transparent =
  'data:image/gif;base64,R0lGODlhAQABAJEAAAAAAP///////wAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAACACwAAAAAAQABAAACAlQBADs='
const Image = (image: LazyLoadImageProps) => {
  return <LazyLoadImage placeholderSrc={transparent} {...image} />
}
export default Image
