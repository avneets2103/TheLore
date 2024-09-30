import Spline from '@splinetool/react-spline/next'
import React from 'react'

interface Props {}

function Forest(props: Props) {
    const {} = props

    return (
        <div className="h-[70vh]">
          <Spline scene="https://prod.spline.design/SvLlyEafPbVQnhi7/scene.splinecode" />
        </div>
    )
}

export default Forest
