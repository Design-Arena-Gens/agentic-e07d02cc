import { useState } from 'react'
import Head from 'next/head'

export default function Home() {
  const [reelUrl, setReelUrl] = useState('https://www.instagram.com/reel/DRRzMa_AgHa/')
  const [embedUrl, setEmbedUrl] = useState('https://www.instagram.com/reel/DRRzMa_AgHa/embed')

  const handleSubmit = (e) => {
    e.preventDefault()
    const url = reelUrl.trim()
    if (url) {
      const cleanUrl = url.replace(/\?.*$/, '').replace(/\/$/, '')
      setEmbedUrl(`${cleanUrl}/embed`)
    }
  }

  return (
    <>
      <Head>
        <title>Instagram Reel Viewer</title>
        <meta name="description" content="View Instagram Reels" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container">
        <div className="header">
          <h1>Instagram Reel Viewer</h1>
          <form onSubmit={handleSubmit} className="url-form">
            <input
              type="text"
              value={reelUrl}
              onChange={(e) => setReelUrl(e.target.value)}
              placeholder="Paste Instagram Reel URL"
              className="url-input"
            />
            <button type="submit" className="load-button">Load Reel</button>
          </form>
        </div>

        <div className="reel-container">
          <iframe
            src={embedUrl}
            className="reel-iframe"
            frameBorder="0"
            scrolling="no"
            allowTransparency="true"
            allow="encrypted-media"
          />
        </div>

        <div className="info">
          <p>Paste any Instagram Reel URL to view it embedded</p>
          <p className="note">Note: Some reels may be restricted by Instagram's privacy settings</p>
        </div>
      </main>
    </>
  )
}
