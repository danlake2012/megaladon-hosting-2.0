import React from 'react'

export default function StickyCTAs(){
  return (
    <>
      {/* mid-page sticky CTA — sits in-flow and pins just under the navbar */}
      <div className="sticky-cta-mid my-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-xl p-4 bg-gradient-to-r from-[#001217]/95 to-[#001018]/90 backdrop-blur-md border border-cyan-400/30 text-center shadow-lg">
            <div className="flex flex-col md:flex-row items-center justify-between gap-3">
              <div className="text-left">
                <div className="text-lg font-extrabold">Start Hosting Today — Fast, Secure, and Supported</div>
                <div className="text-sm text-white/80">Veteran-owned, reliable hosting with expert support — pick a plan and get online.</div>
              </div>
              <div className="flex items-center gap-3">
                <a href="#hosting-plans" className="px-4 py-2 rounded-lg bg-gradient-to-r from-accent to-teal text-black font-semibold">Start Hosting</a>
                <a href="/cart.php?a=add&pid=10" className="px-3 py-2 rounded-md border border-cyan-400/18 text-sm">See Plans</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* bottom fixed small CTA — accessible and minimal */}
      <div className="sticky-cta-bottom hidden md:block" aria-hidden>
        <div className="cta-inner">
          <a href="#hosting-plans">🦈 Start Hosting — Plans & Pricing</a>
        </div>
      </div>
    </>
  )
}
