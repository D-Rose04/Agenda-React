import React from 'react'

export default function Btn({Data}) {
  return (
    <button onClick={Data.action}>{Data.text}</button>
  )
}
