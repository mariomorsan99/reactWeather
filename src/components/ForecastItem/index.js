import React from 'react'
import PropTypes from 'prop-types'

const ForecastItem =({weeekday})=>(
  <div>{weeekday}</div>
)

ForecastItem.propTypes={
 weeekday:PropTypes.string.isRequired
}



export default ForecastItem;
