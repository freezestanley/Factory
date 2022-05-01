import React from 'react'
import {
  LazyLoadImage,
  LazyLoadImageProps
} from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

const Image = (image: LazyLoadImageProps) => {
  return <LazyLoadImage {...image} />
}
export default Image
