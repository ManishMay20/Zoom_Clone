// import React from 'react'

const Meeting = ({ params }: { params: { id: string } }) => {
  return (
    <>Meeting Room: #{params.id}</>
  )
}

export default Meeting