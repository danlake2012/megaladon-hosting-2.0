const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const hostname = '0.0.0.0'
const port = parseInt(process.env.PORT || '3001', 10)

// Initialize Next.js without hostname/port restrictions
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      // Log incoming request details
      console.log('Request:', {
        url: req.url,
        originalHost: req.headers.host,
        forwardedHost: req.headers['x-forwarded-host'],
        method: req.method
      })
      
      // Handle proxied requests - trust x-forwarded-host header
      if (req.headers['x-forwarded-host']) {
        req.headers.host = req.headers['x-forwarded-host']
        console.log('Rewritten host to:', req.headers.host)
      }
      
      const parsedUrl = parse(req.url, true)
      await handle(req, res, parsedUrl)
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('internal server error')
    }
  })
    .once('error', (err) => {
      console.error(err)
      process.exit(1)
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`)
    })
})
