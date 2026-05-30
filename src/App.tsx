import { useState } from 'react'
import './App.css'

const USD_TO_INR = 84.5

function CurrencyToggle({ currency, setCurrency }: { currency: 'USD' | 'INR', setCurrency: (c: 'USD' | 'INR') => void }) {
  return (
    <div className="currency-toggle">
      <button className={currency === 'USD' ? 'active' : ''} onClick={() => setCurrency('USD')}>in USD</button>
      <button className={currency === 'INR' ? 'active' : ''} onClick={() => setCurrency('INR')}>in INR</button>
    </div>
  )
}

function fmt(usd: number, currency: 'USD' | 'INR') {
  if (currency === 'USD') return `$${usd.toLocaleString()}`
  const inr = Math.round(usd * USD_TO_INR)
  return `₹${inr.toLocaleString()}`
}

export default function App() {
  const [tab, setTab] = useState<'why' | 'pipeline' | 'pricing'>('why')
  const [currency, setCurrency] = useState<'USD' | 'INR'>('USD')

  return (
    <div className="proposal">
      {/* Header */}
      <header className="site-header">
        <div className="header-eyebrow">Digital Marketing Agency · Client Proposal · Hospitality Vertical</div>
        <h1>The Studio Powering <span className="gold">Next-Gen Hospitality Ads</span></h1>
        <p className="header-sub">
          From raw property photos and brand assets to platform-ready video ads — in minutes, not weeks.<br />
          One continuous pipeline. Zero crew. Zero studio.
        </p>
        <nav className="main-nav">
          <button className={tab === 'why' ? 'active' : ''} onClick={() => setTab('why')}>Why Rich Video</button>
          <button className={tab === 'pipeline' ? 'active' : ''} onClick={() => setTab('pipeline')}>The Pipeline</button>
          <button className={tab === 'pricing' ? 'active' : ''} onClick={() => setTab('pricing')}>Packages</button>
        </nav>
      </header>

      {/* WHY TAB */}
      {tab === 'why' && (
        <section className="tab-section">
          <div className="section-eyebrow">The Business Case</div>
          <h2>Why Hospitality Brands Win With Rich Video Content</h2>
          <p className="section-intro">
            Continuous promotion is not optional — it is the algorithm. Brands that publish rich visual content
            daily gain compounding reach that sporadic campaigns can never buy back. High-quality viewership is
            built through consistency, not one-off shoots. The platform rewards daily social activity
            with organic distribution, and the first mover in your category captures the loyalty that latecomers
            spend years chasing. Rich video content production has permanently changed the economics: what once
            required a crew, a studio, and weeks of post-production now takes under 10 minutes — from a brief,
            multiple images, and existing brand assets to a finished, platform-ready video. We are not a vendor;
            we are a one-stop production partner that replaces the entire traditional pipeline.
          </p>

          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number gold">80%</div>
              <div className="stat-label">of travelers watch hotel videos before booking</div>
              <div className="stat-source">Google Travel</div>
            </div>
            <div className="stat-card">
              <div className="stat-number gold">3x</div>
              <div className="stat-label">higher engagement on video vs static images</div>
              <div className="stat-source">Meta Ads Data</div>
            </div>
            <div className="stat-card">
              <div className="stat-number gold">&lt; {fmt(500, currency)}</div>
              <div className="stat-label">average production cost with us vs {fmt(1000, currency)}–{fmt(2000, currency)} with traditional agencies</div>
              <div className="stat-source">Our Pipeline</div>
            </div>
            <div className="stat-card">
              <div className="stat-number gold">10 min</div>
              <div className="stat-label">brief from multiple images & videos → full platform-ready video</div>
              <div className="stat-source">Our Workflow</div>
            </div>
          </div>

          <div className="insight-banner">
            <strong>The margin reality:</strong> Traditional high-end photography and production costs {fmt(2000, currency)}–{fmt(10000, currency)} per video. We are your one-stop solution — brief to publish — at a fraction of the cost, with no delays even for a single day of promotion.
          </div>

          <div className="ad-types">
            <div className="vertical-block">
              <div className="vertical-header">
                <span className="vertical-icon">🏨</span>
                <div>
                  <h3>Hotels &amp; Resorts</h3>
                  <p>Cinematic ads that convert lookers into bookers</p>
                </div>
              </div>
              <div className="ad-grid">
                {[
                  { name: 'Room Reveal Ad', tag: 'CONVERSIONS', desc: 'Door opens — cinematic 8s sweep of suite interior. Ends on price overlay. Deployed on Booking.com, Instagram Stories, and YouTube pre-roll.' },
                  { name: 'Pool & Lobby Ambiance', tag: 'AWARENESS', desc: 'Golden-hour pool shot, smooth camera drift, ambient score. No voiceover. Pure mood. Used for Instagram Reels & TikTok top-of-funnel.' },
                  { name: 'Seasonal Offer Spot', tag: 'PROMO', desc: '8s summer/winter visual + offer text overlay + CTA. Batch-generated in 10 variants per season. One template, 10 rooms.' },
                  { name: 'Multilingual Brand Film', tag: 'BRAND', desc: '30s property story narrated in English, Hindi, and Arabic. One source video, three language markets.' },
                  { name: 'OTA Image-to-Video', tag: 'LOW COST', desc: 'Existing Booking.com/Expedia hero photos transformed into cinematic clips. No new shoot, no crew, no cost.' },
                  { name: 'Review-to-Reel', tag: 'TRUST', desc: 'Real guest quote rendered as animated text over property footage with background score. Social proof in 8 seconds. Runs on Instagram & Google Display.' },
                ].map(ad => (
                  <div className="ad-card" key={ad.name}>
                    <div className="ad-card-header">
                      <span className="ad-name">{ad.name}</span>
                      <span className={`ad-tag tag-${ad.tag.toLowerCase().replace(' ', '-')}`}>{ad.tag}</span>
                    </div>
                    <p>{ad.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="storyboard-image">
              <div className="storyboard-label">Sample Storyboard · Hotels &amp; Resorts</div>
              <img
                src="https://res.cloudinary.com/duqgxghmt/image/upload/v1780102331/image_7433b1c4_vyab2b.png"
                alt="Hotel storyboard — Lobby Shot, Suite Reveal, Poolside"
              />
            </div>

            <div className="vertical-block">
              <div className="vertical-header">
                <span className="vertical-icon">🍽️</span>
                <div>
                  <h3>Restaurants &amp; F&amp;B</h3>
                  <p>8-second short commercial ads that sell before the first bite</p>
                </div>
              </div>
              <div className="ad-grid">
                {[
                  { name: 'Signature Dish Reveal', tag: 'REEL', desc: 'Slow-motion pour, steam rising, fork cut — 8s food porn. Works for Instagram Stories, Zomato/Swiggy banners, Google Ads.' },
                  { name: 'Table Ambiance Spot', tag: 'MOOD', desc: 'Candlelit table, ambient sound, warm tones. No dialogue. Targets fine-dining audiences on Meta and Pinterest.' },
                  { name: 'Chef Story Micro-Doc', tag: 'BRAND', desc: '15s: chef at work → plating → guest reaction. Professional narration in your brand voice. Used for brand building on YouTube & LinkedIn.' },
                  { name: 'Weekend Brunch Promo', tag: 'PROMO', desc: 'Batch of 6 variants — each with a different dish, same music, same CTA. Runs Friday–Sunday on paid social.' },
                  { name: 'Cocktail Reveal Ad', tag: 'PRODUCT', desc: '8s pour sequence, ice clink, garnish drop. Text overlay, name + price. Runs on Instagram Reels, Zomato Stories.' },
                  { name: 'Festive Menu Teaser', tag: 'SEASONAL', desc: 'Diwali/Christmas/New Year variants batch-produced. Same template, 10 dishes, deployed in hours.' },
                ].map(ad => (
                  <div className="ad-card" key={ad.name}>
                    <div className="ad-card-header">
                      <span className="ad-name">{ad.name}</span>
                      <span className={`ad-tag tag-${ad.tag.toLowerCase()}`}>{ad.tag}</span>
                    </div>
                    <p>{ad.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="storyboard-image">
              <div className="storyboard-label">Sample Storyboard · Restaurants &amp; F&amp;B</div>
              <img
                src="https://res.cloudinary.com/duqgxghmt/image/upload/v1780102331/image_2ded65a_yxjxvn.png"
                alt="Restaurant storyboard — Exterior, Entrance, Wine service, Chef, Celebration, An Evening to Remember"
              />
            </div>
          </div>
        </section>
      )}

      {/* PIPELINE TAB */}
      {tab === 'pipeline' && (
        <section className="tab-section">
          <div className="section-eyebrow">The Production Pipeline</div>
          <h2>Brief → Publish in Under 10 Minutes</h2>
          <p className="section-intro">
            Send us your images, videos, and a one-line brief. Our production pipeline handles script, visuals,
            motion, audio, and delivery — formatted for every platform you run on.
          </p>
          <div className="pipeline-steps">
            {[
              { step: '01', title: 'Brand Brief', desc: 'You share raw photos, existing video clips, brand colors, and a one-line goal. No creative deck needed.' },
              { step: '02', title: 'Creative Storyboard', desc: 'We map out a scene-by-scene storyboard from your assets. Every frame is planned before production begins.' },
              { step: '03', title: 'Video Content Creation', desc: 'Still images are transformed into cinematic motion sequences. Multiple variants produced in parallel.' },
              { step: '04', title: 'Brand Narration', desc: 'Professional voiceover reads your script in your brand tone — English, Hindi, Arabic, or any language.' },
              { step: '05', title: 'Music & Sound Design', desc: 'Original background score composed to match your visual mood and brand identity. Stems adjusted per platform.' },
              { step: '06', title: 'Platform Export', desc: 'Final videos delivered in Reels (9:16), Shorts, Stories, and 16:9 — ready to schedule and publish.' },
            ].map(s => (
              <div className="pipeline-step" key={s.step}>
                <div className="step-number">{s.step}</div>
                <div className="step-content">
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* PRICING TAB */}
      {tab === 'pricing' && (
        <section className="tab-section">
          <div className="section-eyebrow">Suggested Agency Retainer Model</div>
          <h2>Choose Your Production Package</h2>
          <p className="section-intro">
            All packages deliver stitched video ads formatted for Instagram Reels, YouTube Shorts, Stories, and
            paid social. You pay for results — not tools or software.
          </p>

          <CurrencyToggle currency={currency} setCurrency={setCurrency} />

          <div className="pricing-grid">
            {/* STARTER */}
            <div className="pricing-card">
              <div className="plan-tier">Starter</div>
              <div className="plan-price">{fmt(500, currency)}<span>/day · 10-day package</span></div>
              <div className="plan-total">Total package: <strong>{fmt(5000, currency)}</strong> for first 10 days</div>
              <ul className="plan-features">
                <li>5 stitched video ads per day (15–30 seconds each)</li>
                <li>Cinematic motion from your existing photos & clips</li>
                <li>Text overlays, price callouts, CTA graphics</li>
                <li>Formatted for Reels, Stories, YouTube Shorts</li>
                <li>Music & sound design — no voiceover</li>
                <li>Daily delivery — publish the same day, every day</li>
                <li>Covers both hotel/resort and F&amp;B ad types</li>
              </ul>
              <div className="plan-note">Best for brands launching daily social presence without narration.</div>
            </div>

            {/* GROWTH */}
            <div className="pricing-card featured">
              <div className="featured-badge">Most Popular</div>
              <div className="plan-tier">Growth</div>
              <div className="plan-price">{fmt(1500, currency)}<span>/day · 10-day package</span></div>
              <div className="plan-total">Total package: <strong>{fmt(15000, currency)}</strong> for 10 days</div>
              <ul className="plan-features">
                <li>5 stitched video ads per day (30 sec – 1 minute each)</li>
                <li>Professional voiceover with brand narration in your tone</li>
                <li>English + Hindi + Arabic narration included</li>
                <li>4 formats per video: Reels, Shorts, Stories, 16:9</li>
                <li>Original background score composed per video</li>
                <li>Batch variants — same template, multiple offers/rooms</li>
                <li>Daily delivery with platform scheduling guidance</li>
              </ul>
              <div className="plan-note">Best for brands wanting a consistent brand voice across all content.</div>
            </div>

            {/* ENTERPRISE */}
            <div className="pricing-card enterprise">
              <div className="plan-tier">Enterprise</div>
              <div className="plan-price">{fmt(2500, currency)}<span>/day · 10-day package</span></div>
              <div className="plan-total">Total package: <strong>{fmt(25000, currency)}</strong> for 10 days</div>
              <ul className="plan-features">
                <li>5 stitched video ads per day (30 sec – 1 minute each)</li>
                <li>Full revision & edit service — unlimited feedback rounds</li>
                <li>Dedicated brand voice cloned across all languages</li>
                <li>Updates after edits — revised variants same day</li>
                <li>Custom video style tuned to your property & brand</li>
                <li>Multi-language narration across all markets</li>
                <li>Full pipeline: brief → publish, automated delivery</li>
                <li>Dedicated account manager for daily briefs</li>
              </ul>
              <div className="plan-note">Best for hotel chains and F&amp;B groups running multi-property campaigns.</div>
            </div>
          </div>

          <div className="margin-math">
            <strong>The one-stop advantage:</strong> Traditional high-end photography + video production agencies charge
            {' '}{fmt(2000, currency)}–{fmt(10000, currency)} per video — and take weeks to deliver. Standard production subscriptions alone run
            {' '}{fmt(1000, currency)}–{fmt(2000, currency)}/month before any actual work begins. With us, your average production cost
            is <strong>under {fmt(500, currency)} per day</strong> for 5 platform-ready ads. We replace the entire pipeline — brief, production,
            edit, and publish — so your brand stays live every single day without the overhead.
          </div>
        </section>
      )}

      <footer className="site-footer">
        <p>Rich Content Studio · Hospitality Vertical · 2024</p>
      </footer>
    </div>
  )
}
