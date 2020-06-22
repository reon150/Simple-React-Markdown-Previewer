import React from 'react'

const Editor = (props) => {
  return (
    <div>
      <textarea id="editor"
        value={props.markdown}
        onChange={props.onChange}
        type="text"
      />
    </div>
  )
}

export default Editor