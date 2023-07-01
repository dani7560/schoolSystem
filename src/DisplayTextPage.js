import React from 'react'

const DisplayTextPage = (props) => {
  const text=props.blogs
  const message=text
  return (<>
    <div>{message}</div>

<h1>this is text to be write</h1>

    </>
  )
}

export default DisplayTextPage