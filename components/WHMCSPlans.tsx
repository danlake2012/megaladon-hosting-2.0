"use client"
import React, { useEffect, useState } from 'react'

interface Plan {
  id: string
  name: string
  description: string
  price: number
  features: string[]
}

const fallbackPlans: Plan[] = [
  {
    id: '1',
    name: 'Pup Hosting',
    price: 3.99,
    description: 'Perfect for personal sites',
    features: ['1 Website', '10 GB NVMe Storage', 'Free SSL']
  },
  {
    id: '3',
    name: 'Reefshark',
    price: 5.99,
    description: 'Small businesses',
    features: ['3 Websites', '30 GB NVMe Storage', 'LiteSpeed Web Server']
  },
  {
    id: '4',
    name: 'Tigershark',
    price: 12.99,
    description: 'High-performance hosting',
    features: ['25 Websites', '150 GB NVMe Storage', 'Priority Support']
  },
  {
    id: '6',
    name: 'Hammerhead',
    price: 8.99,
    description: 'Growing businesses',
    features: ['10 Websites', '80 GB NVMe Storage', 'LiteSpeed + Redis Cache']
  },
  {
    id: '5',
    name: 'Megaladon',
    price: 19.99,
    description: 'Enterprise hosting',
    features: ['50 Websites', '250 GB NVMe Storage', 'Dedicated Resources']
  }
]

// Color themes for each plan
const planThemes = [
  { border: 'border-cyan-400/30 hover:border-cyan-400/70', bg: '#0f3b66', gradient: 'from-accent to-teal', emoji: '🏁' },
  { border: 'border-green-400/30 hover:border-green-400/60', bg: '#083b2f', gradient: 'from-green-300 to-cyan-200', emoji: '🚀' },
  { border: 'border-yellow-400/30 hover:border-yellow-400/60', bg: '#3d2f0a', gradient: 'from-yellow-300 to-orange-200', emoji: '🔥' },
  { border: 'border-purple-400/30 hover:border-purple-400/60', bg: '#2b1535', gradient: 'from-purple-300 to-pink-200', emoji: '🏢' },
  { border: 'border-red-400/30 hover:border-red-400/60', bg: '#3a0f0f', gradient: 'from-red-400 to-orange-300', emoji: '👑' }
]

export default function WHMCSPlans() {
  const [plans, setPlans] = useState<Plan[]>(fallbackPlans)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchPlans() {
      try {
        const response = await fetch('/api/whmcs/plans')
        const data = await response.json()

        if (data.success && data.products?.length > 0) {
          setPlans(data.products)
        } else if (data.fallback) {
          // API not configured or error - use fallback
          console.warn('Using fallback plans:', data.message)
        }
      } catch (err) {
        console.error('Failed to fetch WHMCS plans:', err)
        setError('Using default plans')
      } finally {
        setLoading(false)
      }
    }

    fetchPlans()
  }, [])

  return (
    <div id="hosting-plans" className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-6">
      {loading && (
        <div className="col-span-full text-center py-12 text-white/60">
          Loading plans...
        </div>
      )}
      
      {!loading && plans.map((plan, index) => {
        const theme = planThemes[index % planThemes.length]
        return (
          <a
            key={plan.id}
            href={`/cart.php?a=add&pid=${plan.id}`}
            className="tile block reveal transition-transform hover:-translate-y-2"
          >
            <div className={`p-6 rounded-xl bg-[#08101a] border-2 shadow-lg hover:shadow-2xl transition-colors ${theme.border} relative`}>
              <div
                className="absolute -top-4 -right-4 w-11 h-11 rounded-full flex items-center justify-center"
                style={{ background: theme.bg }}
              >
                <span className="text-xl">{theme.emoji}</span>
              </div>
              <h3 className="font-bold mb-2">{plan.name}</h3>
              <div className="text-2xl font-extrabold">
                ${plan.price.toFixed(2)}
                <span className="text-sm">/mo</span>
              </div>
              <ul className="text-sm text-white/80 mt-3 space-y-1">
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <div className="mt-4 text-sm">
                <button className={`px-3 py-2 rounded-md bg-gradient-to-r ${theme.gradient} font-semibold text-black`}>
                  Order Now
                </button>
              </div>
            </div>
          </a>
        )
      })}
      
      {error && (
        <div className="col-span-full text-xs text-white/40 text-center">
          {error}
        </div>
      )}
    </div>
  )
}
