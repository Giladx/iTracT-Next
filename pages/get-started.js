import React from 'react'
import Head from 'next/head'

const GetStarted = (props) => {
  return (
    <>
      <div className="get-started-container">
        <Head>
          <title>Get-Started - iTracT</title>
          <meta
            name="description"
            content="Introducing iTracT, the next generation of smart, editable digital contracts."
          />
          <meta property="og:title" content="Get-Started - iTracT" />
          <meta
            property="og:description"
            content="Introducing iTracT, the next generation of smart, editable digital contracts."
          />
        </Head>
      </div>
      <style jsx>
        {`
          .get-started-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default GetStarted
