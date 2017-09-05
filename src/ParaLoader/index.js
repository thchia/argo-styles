import React from 'react'

import './styles.css'

/*
 * size: mini small large big huge massive
 * fluid: true false
 * */
const ParaLoader = ({ size = '', fluid = false }) => (
  <div className={`para-loader ${size} ${fluid ? 'fluid' : ''}`} />
)

export default ParaLoader