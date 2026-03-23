'use client'

import Crypto from '../investment-components/Crypto'
import Saham from '../investment-components/Saham'

export default function Investment() {
  return (
    <div className='bg-[#08152F]'>
      <Crypto />
      <Saham />

    </div>
  )
}
