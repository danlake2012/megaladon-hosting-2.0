import type { NextApiRequest, NextApiResponse } from 'next'

interface WHMCSProduct {
  pid: string
  name: string
  description: string
  pricing: {
    USD: {
      monthly: string
      quarterly?: string
      semiannually?: string
      annually?: string
    }
  }
}

interface WHMCSResponse {
  result: string
  products?: {
    product: WHMCSProduct[]
  }
  message?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const apiUrl = process.env.WHMCS_API_URL
  const apiIdentifier = process.env.WHMCS_API_IDENTIFIER
  const apiSecret = process.env.WHMCS_API_SECRET
  const accessKey = process.env.WHMCS_ACCESS_KEY

  if (!apiUrl || !apiIdentifier || !apiSecret) {
    console.error('WHMCS API credentials not configured')
    return res.status(500).json({ 
      error: 'WHMCS API not configured',
      fallback: true 
    })
  }

  try {
    // Add timeout to prevent hanging
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 5000) // 5 second timeout
    
    const params: Record<string, string> = {
      action: 'GetProducts',
      identifier: apiIdentifier,
      secret: apiSecret,
      responsetype: 'json',
    }
    
    // Add access key if available (bypasses IP restrictions)
    if (accessKey) {
      params.accesskey = accessKey
    }
    
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(params),
      signal: controller.signal,
    })
    
    clearTimeout(timeoutId)

    if (!response.ok) {
      throw new Error(`WHMCS API returned ${response.status}`)
    }

    const data: WHMCSResponse = await response.json()

    if (data.result !== 'success') {
      throw new Error(data.message || 'WHMCS API error')
    }

    // Transform WHMCS products into our format
    const products = data.products?.product || []
    const transformedProducts = products.map((product) => ({
      id: product.pid,
      name: product.name,
      description: product.description,
      price: parseFloat(product.pricing.USD.monthly) || 0,
      features: extractFeatures(product.description),
    }))

    res.status(200).json({
      success: true,
      products: transformedProducts,
    })
  } catch (error) {
    console.error('WHMCS API error:', error)
    
    // Check if it's a timeout/abort error
    if (error instanceof Error && error.name === 'AbortError') {
      console.error('WHMCS API request timed out')
      return res.status(504).json({
        error: 'WHMCS API request timed out',
        fallback: true,
        message: 'The request to WHMCS took too long',
      })
    }
    
    res.status(500).json({
      error: 'Failed to fetch products',
      fallback: true,
      message: error instanceof Error ? error.message : 'Unknown error',
    })
  }
}

// Extract features from product description
function extractFeatures(description: string): string[] {
  // Simple extraction - split by newlines or bullet points
  const features = description
    .split(/[\n•-]/)
    .map((f) => f.trim())
    .filter((f) => f.length > 0 && f.length < 100)
  
  return features.slice(0, 3) // Return max 3 features
}
