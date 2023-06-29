
import React from 'react'

export default function Alert(props) {
    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1)
    }
  return (
  props.alert &&<div className={`alert alert-${capitalize(props.alert.type)} alert-dismissable fade show`} style={{backgroundColor: props.mode ==='dark' ? 'grey':'white', color: props.mode === 'dark' ?'white':'black'}} role="alert">
   <strong>{props.alert.type}</strong>{props.alert.msg}
  </div>
  )
}
