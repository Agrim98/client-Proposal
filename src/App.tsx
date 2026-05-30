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

const PLAN_PRICES = {
  starter:    { usd: 1000, inr: 50000 },
  growth:     { usd: 1500, inr: 150000 },
  enterprise: { usd: 2500, inr: 250000 },
}

function planPrice(plan: keyof typeof PLAN_PRICES, currency: 'USD' | 'INR') {
  const p = PLAN_PRICES[plan]
  return currency === 'USD' ? `$${p.usd.toLocaleString()}` : `₹${p.inr.toLocaleString()}`
}

export default function App() {
  const [tab, setTab] = useState<'why' | 'pipeline' | 'pricing'>('why')
  const [currency, setCurrency] = useState<'USD' | 'INR'>('USD')

  return (
    <div className="proposal">
      {/* Header */}
      <header className="site-header">
        <div className="header-eyebrow">Digital Marketing Agency · Client Proposal</div>
        <h1>The Studio Powering <span className="gold">Next-Gen Brand Ads</span></h1>
        <p className="header-sub">
          From raw photos and brand assets to platform-ready video ads — in minutes, not weeks.<br />
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
          <h2>Why Brands Win With Rich Video Content</h2>
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
              <div className="stat-label">of consumers watch brand videos before making a purchase decision</div>
              <div className="stat-source">Google Consumer Study</div>
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

            {/* Hotels & Resorts */}
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
                  { name: 'Seasonal Offer Spot', tag: 'PROMO', desc: '8s summer/winter visual + offer text overlay + CTA. Batch-produced in 10 variants per season. One template, 10 rooms.' },
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
                src="https://res.cloudinary.com/duqgxghmt/image/upload/v1780124755/image_a8f15275_mliw9y.png"
                alt="Hotel storyboard — Lobby Shot, Suite Reveal, Poolside"
              />
            </div>

            {/* Restaurants & F&B */}
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
                  { name: 'Signature Dish Reveal', tag: 'REEL', desc: 'Slow-motion pour, steam rising, fork cut — 8s food content. Works for Instagram Stories, Zomato/Swiggy banners, Google Ads.' },
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

            {/* Private Property Builders */}
            <div className="vertical-block">
              <div className="vertical-header">
                <span className="vertical-icon">🏗️</span>
                <div>
                  <h3>Private Property Builders</h3>
                  <p>High-impact video content that sells projects before the first brick is laid</p>
                </div>
              </div>
              <div className="ad-grid">
                {[
                  { name: 'Project Walkthrough', tag: 'CONVERSIONS', desc: 'Cinematic fly-through of floor plans and renders transformed into immersive video tours. Deployed on Instagram, YouTube, and property portals.' },
                  { name: 'Location Showcase', tag: 'AWARENESS', desc: 'Neighbourhood highlights, connectivity, and lifestyle context — 30s visual story that sells the address before the apartment.' },
                  { name: 'Launch Offer Spot', tag: 'PROMO', desc: 'Pre-launch pricing, limited inventory, and CTA — batch-produced in multiple variants for each phase and unit type.' },
                  { name: 'Builder Brand Film', tag: 'BRAND', desc: '60s legacy story — past projects, craftsmanship, testimonials — narrated in your brand tone across languages.' },
                  { name: 'Render-to-Reel', tag: 'LOW COST', desc: 'Existing architectural renders and 3D visuals transformed into cinematic motion clips. No reshoots needed.' },
                  { name: 'Testimonial Spot', tag: 'TRUST', desc: 'Buyer quote rendered as animated text over project footage. Social proof in 8 seconds. Runs on Meta and Google Display.' },
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
              <div className="storyboard-label">Sample Storyboard · Private Property Builders</div>
              <img
                src="https://res.cloudinary.com/duqgxghmt/image/upload/v1780123758/image_be1dfc27_yeogue.png"
                alt="Property builder storyboard"
              />
            </div>

            {/* Private Clinics */}
            <div className="vertical-block">
              <div className="vertical-header">
                <span className="vertical-icon">🏥</span>
                <div>
                  <h3>Private Clinics</h3>
                  <p>Trust-building video content that brings patients through the door</p>
                </div>
              </div>
              <div className="ad-grid">
                {[
                  { name: 'Clinic Walkthrough', tag: 'AWARENESS', desc: 'Warm, reassuring tour of consultation rooms, reception, and facilities. Builds trust before the first appointment.' },
                  { name: 'Doctor Introduction', tag: 'BRAND', desc: '30s professional profile — credentials, specialisation, patient-first approach. Narrated in English, Hindi, or regional language.' },
                  { name: 'Treatment Spotlight', tag: 'CONVERSIONS', desc: 'Procedure explained in 15s with on-screen text, before/after visuals, and a clear CTA. Runs on Meta and Google Search.' },
                  { name: 'Patient Testimonial Reel', tag: 'TRUST', desc: 'Real patient quote over clinic footage with calm background score. Runs on Instagram, Google Display, and clinic website.' },
                  { name: 'Health Awareness Spot', tag: 'PROMO', desc: 'Seasonal health tips tied to your specialisation — batch-produced for World Health Days, festive season, and monthly campaigns.' },
                  { name: 'Offer & Consultation Ad', tag: 'PRODUCT', desc: 'Free consultation, health package pricing, or seasonal offer — 8s visual with CTA. Runs on Reels and Stories.' },
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
              <div className="storyboard-label">Sample Storyboard · Private Clinics</div>
              <img
                src="https://res.cloudinary.com/duqgxghmt/image/upload/v1780123758/image_b120295d_nlieb7.png"
                alt="Private clinic storyboard"
              />
            </div>

            {/* Gym & Fitness */}
            <div className="vertical-block">
              <div className="vertical-header">
                <span className="vertical-icon">💪</span>
                <div>
                  <h3>Gym &amp; Fitness</h3>
                  <p>High-energy video content that turns followers into members</p>
                </div>
              </div>
              <div className="ad-grid">
                {[
                  { name: 'Facility Tour', tag: 'AWARENESS', desc: 'Dynamic walkthrough of equipment, training zones, and amenities. Fast cuts, upbeat score. Runs on Instagram Reels and YouTube Shorts.' },
                  { name: 'Trainer Spotlight', tag: 'BRAND', desc: '20s profile — expertise, style, transformation results. Builds personal connection before the first session.' },
                  { name: 'Transformation Reel', tag: 'CONVERSIONS', desc: 'Before/after journey — member story in 30s with motivational narration and CTA. Highest-performing ad format for fitness brands.' },
                  { name: 'Membership Offer', tag: 'PROMO', desc: 'New Year, summer, or festive membership deals — batch-produced in variants for each plan tier. Drives sign-ups on Meta and Google.' },
                  { name: 'Class Highlight', tag: 'REEL', desc: '8s energy-packed cut from a live class — HIIT, yoga, Zumba, CrossFit. Runs daily to keep the feed active and aspirational.' },
                  { name: 'Member Testimonial', tag: 'TRUST', desc: 'Real member quote over training footage. Authentic social proof that converts browsers into walk-ins.' },
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
              <div className="storyboard-label">Sample Storyboard · Gym &amp; Fitness</div>
              <img
                src="https://res.cloudinary.com/duqgxghmt/image/upload/v1780123758/image_502050ee_zgykdp.png"
                alt="Gym and fitness storyboard"
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
            paid social. Works for any industry — hospitality, real estate, healthcare, fitness, and more.
            You pay for results — not tools or software.
          </p>

          <CurrencyToggle currency={currency} setCurrency={setCurrency} />

          <div className="pricing-grid">
            {/* STARTER */}
            <div className="pricing-card">
              <div className="plan-tier">Starter</div>
              <div className="plan-price">{planPrice('starter', currency)}<span>/month</span></div>
              <ul className="plan-features">
                <li>5 stitched video ads per day (15–30 seconds each)</li>
                <li>Cinematic motion from your existing photos & clips</li>
                <li>Text overlays, price callouts, CTA graphics</li>
                <li>Formatted for Reels, Stories, YouTube Shorts</li>
                <li>Music & sound design — no voiceover</li>
                <li>Daily delivery — publish the same day, every day</li>
                <li>Any industry vertical supported</li>
              </ul>
              <div className="plan-note">Best for brands launching daily social presence without narration.</div>
            </div>

            {/* GROWTH */}
            <div className="pricing-card featured">
              <div className="featured-badge">Most Popular</div>
              <div className="plan-tier">Growth</div>
              <div className="plan-price">{planPrice('growth', currency)}<span>/month</span></div>
              <ul className="plan-features">
                <li>5 stitched video ads per day (30 sec – 1 minute each)</li>
                <li>Professional voiceover with brand narration in your tone</li>
                <li>English + Hindi + Arabic narration included</li>
                <li>4 formats per video: Reels, Shorts, Stories, 16:9</li>
                <li>Original background score composed per video</li>
                <li>Batch variants — same template, multiple offers/products</li>
                <li>Daily delivery with platform scheduling guidance</li>
              </ul>
              <div className="plan-note">Best for brands wanting a consistent brand voice across all content.</div>
            </div>

            {/* ENTERPRISE */}
            <div className="pricing-card enterprise">
              <div className="plan-tier">Enterprise</div>
              <div className="plan-price">{planPrice('enterprise', currency)}<span>/month</span></div>
              <ul className="plan-features">
                <li>5 stitched video ads per day (30 sec – 1 minute each)</li>
                <li>Full revision & edit service — unlimited feedback rounds</li>
                <li>Dedicated brand voice cloned across all languages</li>
                <li>Updates after edits — revised variants same day</li>
                <li>Custom video style tuned to your brand</li>
                <li>Multi-language narration across all markets</li>
                <li>Full pipeline: brief → publish, automated delivery</li>
                <li>Dedicated account manager for daily briefs</li>
              </ul>
              <div className="plan-note">Best for multi-location brands running campaigns across verticals.</div>
            </div>
          </div>

          <div className="margin-math">
            <strong>The one-stop advantage:</strong> Traditional high-end photography + video production agencies charge
            {' '}{fmt(2000, currency)}–{fmt(10000, currency)} per video — and take weeks to deliver. With us, you get 5 platform-ready
            video ads every single day as part of your monthly retainer. We replace the entire pipeline — brief,
            production, edit, and publish — so your brand stays live without the overhead, the delays, or the crew.
          </div>
        </section>
      )}

      <footer className="site-footer">
        <p>Content Studio · Digital Marketing Agency · 2026</p>
      </footer>
    </div>
  )
}
