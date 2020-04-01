import React from 'react'

const Code = ({ code }) => {
  return (
    <div className='flex flex-page'>
      <small className='mr-gh'>
        Status Code
      </small>
      <pre>{code}</pre>
    </div>
  )
}

Code.getInitialProps = async ctx => {
  const { res, req: { headers }, query: { code } } = ctx
  const agents = ['curl', 'axios']

  res.statusCode = code

  if (headers['user-agent']) {
    for(let i = 0; i < agents.length; i++) {
      if (headers['user-agent'].indexOf(agents[i]) > -1) {
        res.end()
      }
    }
  }

  return { code }
}

export default Code
