import React from 'react'
import ReactMarkdown  from 'react-markdown'

const Preview = props => {
    return (  
      <div id='preview'>
        <ReactMarkdown source={props.markdown} /> 
      </div>
    )
}

export default Preview