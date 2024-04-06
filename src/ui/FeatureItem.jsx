import React from 'react'

export default function FeatureItem({heading,description,imgurl}) {
  return (
    <div className='flex gap-5'>
<div>
    <img src={imgurl} alt="" />
</div>
<div>
    <div>
<h3 className='text-lg font-bold mb-1'>{heading}</h3>
    </div>
    <div>
<p>{description}</p>
    </div>
</div>

    </div>
  )
}
