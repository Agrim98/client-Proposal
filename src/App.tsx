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
      <header className="site-header">
        <div className="header-eyebrow">Digital Marketing Agency · Client Proposal</div>
        <h1>The Studio Powering <span className="accent">Next-Gen Brand Ads</span></h1>
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
          <h2>Daily Rich Video Content Is the Competitive Edge</h2>
          <p className="section-intro">
            Brands that publish consistent, high-quality video content dominate platform algorithms and capture
            audience loyalty before competitors even respond. The first mover in any category compounds reach
            daily — not quarterly. Our production model delivers platform-ready video ads at a fraction of
            traditional costs, turning your existing brand assets into a continuous content engine.
          </p>

          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number accent">80%</div>
              <div className="stat-label">of consumers watch brand videos before making a purchase decision</div>
              <div className="stat-source">Google Consumer Study</div>
            </div>
            <div className="stat-card">
              <div className="stat-number accent">3x</div>
              <div className="stat-label">higher engagement on video vs static images across all platforms</div>
              <div className="stat-source">Meta Ads Data</div>
            </div>
            <div className="stat-card">
              <div className="stat-number accent">&lt; {fmt(500, currency)}</div>
              <div className="stat-label">average daily production cost vs {fmt(2000, currency)}–{fmt(10000, currency)} per video with traditional agencies</div>
              <div className="stat-source">Our Retainer Model</div>
            </div>
          </div>

          <div className="insight-banner">
            <strong>The production advantage:</strong> Traditional agencies charge {fmt(2000, currency)}–{fmt(10000, currency)} per video and deliver in weeks. Our retainer model gives you 5 platform-ready video ads every single day — brief to publish — for less than the cost of a single traditional shoot.
          </div>

          <div className="ad-types">

            {/* Hotels & Resorts */}
            <div className="vertical-block">
              <div className="vertical-header">
                <span className="vertical-icon">🏨</span>
                <div>
                  <h3>Hotels &amp; Resorts</h3>
                  <p>Cinematic video content that converts consideration into confirmed bookings</p>
                </div>
              </div>
              <div className="ad-grid">
                {[
                  { name: 'Room Reveal Ad', tag: 'CONVERSIONS', desc: 'Cinematic sweep of suite interior ending on price overlay and CTA. Deployed on Booking.com, Instagram Stories, and YouTube pre-roll.' },
                  { name: 'Pool & Lobby Ambiance', tag: 'AWARENESS', desc: 'Golden-hour property showcase with smooth camera movement and ambient score. Pure mood. Targets top-of-funnel on Reels and TikTok.' },
                  { name: 'Seasonal Offer Spot', tag: 'PROMO', desc: 'Visual offer spot with text overlay and CTA. Produced in 10 variants per season — one template, every room type.' },
                  { name: 'Multilingual Brand Film', tag: 'BRAND', desc: '30-second property story narrated in English, Hindi, and Arabic. One source video, three language markets.' },
                  { name: 'OTA Image-to-Video', tag: 'LOW COST', desc: 'Existing Booking.com and Expedia hero photos transformed into cinematic clips. No new shoot, no crew, no additional cost.' },
                  { name: 'Review-to-Reel', tag: 'TRUST', desc: 'Real guest quote rendered as animated text over property footage. Social proof in 8 seconds. Runs on Instagram and Google Display.' },
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
              <div className="storyboard-label">Sample Production · Hotels &amp; Resorts</div>
              <img
                src="https://res.cloudinary.com/duqgxghmt/image/upload/v1780192759/Hotel_Business_yu5tut.png"
                alt="Hotel production storyboard"
              />
            </div>

            {/* Restaurants & F&B */}
            <div className="vertical-block">
              <div className="vertical-header">
                <span className="vertical-icon">🍽️</span>
                <div>
                  <h3>Restaurants &amp; F&amp;B</h3>
                  <p>Short-form commercial content that drives covers and delivery orders</p>
                </div>
              </div>
              <div className="ad-grid">
                {[
                  { name: 'Signature Dish Reveal', tag: 'REEL', desc: 'Slow-motion plating, steam, texture — food content that stops the scroll. Works across Instagram Stories, Zomato, Swiggy, and Google Ads.' },
                  { name: 'Table Ambiance Spot', tag: 'MOOD', desc: 'Candlelit table, ambient sound, warm tones. Targets fine-dining audiences on Meta and Pinterest with no dialogue needed.' },
                  { name: 'Chef Story Micro-Doc', tag: 'BRAND', desc: '15 seconds: kitchen craft to guest reaction. Professional narration. Builds brand equity on YouTube and LinkedIn.' },
                  { name: 'Weekend Promo', tag: 'PROMO', desc: '6 variants per campaign — different dishes, consistent music and CTA. Runs Friday through Sunday on paid social.' },
                  { name: 'Cocktail & Beverage Spot', tag: 'PRODUCT', desc: '8-second pour sequence with text overlay — name, price, CTA. Runs on Instagram Reels and Zomato Stories.' },
                  { name: 'Festive Menu Teaser', tag: 'SEASONAL', desc: 'Diwali, Christmas, and New Year variants produced from a single template. 10 dishes, deployed in hours.' },
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
              <div className="storyboard-label">Sample Production · Restaurants &amp; F&amp;B</div>
              <img
                src="https://res.cloudinary.com/duqgxghmt/image/upload/v1780192758/Resturant_d0zwbs.png"
                alt="Restaurant production storyboard"
              />
            </div>

            {/* Private Property Builders */}
            <div className="vertical-block">
              <div className="vertical-header">
                <span className="vertical-icon">🏗️</span>
                <div>
                  <h3>Private Property Builders</h3>
                  <p>High-impact content that sells projects before possession</p>
                </div>
              </div>
              <div className="ad-grid">
                {[
                  { name: 'Project Walkthrough', tag: 'CONVERSIONS', desc: 'Floor plans and renders transformed into immersive video tours. Deployed on Instagram, YouTube, and property portals.' },
                  { name: 'Location Showcase', tag: 'AWARENESS', desc: 'Neighbourhood, connectivity, and lifestyle — a 30-second visual story that sells the address before the apartment.' },
                  { name: 'Launch Offer Spot', tag: 'PROMO', desc: 'Pre-launch pricing and limited inventory with a clear CTA — produced in variants for every phase and unit type.' },
                  { name: 'Builder Brand Film', tag: 'BRAND', desc: '60-second legacy story covering past projects, craftsmanship, and buyer testimonials. Narrated across languages.' },
                  { name: 'Render-to-Reel', tag: 'LOW COST', desc: 'Existing architectural renders and 3D visuals transformed into cinematic motion content. No reshoots required.' },
                  { name: 'Buyer Testimonial Spot', tag: 'TRUST', desc: 'Buyer quote rendered as animated text over project footage. Runs on Meta and Google Display in 8 seconds.' },
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
              <div className="storyboard-label">Sample Production · Private Property Builders</div>
              <img
                src="https://res.cloudinary.com/duqgxghmt/image/upload/v1780192758/realEstate_fom19j.png"
                alt="Property builder production storyboard"
              />
            </div>

            {/* Private Clinics */}
            <div className="vertical-block">
              <div className="vertical-header">
                <span className="vertical-icon">🏥</span>
                <div>
                  <h3>Private Clinics</h3>
                  <p>Trust-building content that brings patients through the door</p>
                </div>
              </div>
              <div className="ad-grid">
                {[
                  { name: 'Clinic Walkthrough', tag: 'AWARENESS', desc: 'Warm, reassuring tour of consultation rooms, reception, and facilities. Builds confidence before the first appointment.' },
                  { name: 'Doctor Introduction', tag: 'BRAND', desc: '30-second professional profile — credentials, specialisation, and patient-first approach. Available in English, Hindi, and regional languages.' },
                  { name: 'Treatment Spotlight', tag: 'CONVERSIONS', desc: 'Procedure explained in 15 seconds with on-screen text, supporting visuals, and a clear CTA. Runs on Meta and Google Search.' },
                  { name: 'Patient Testimonial Reel', tag: 'TRUST', desc: 'Real patient quote over clinic footage with a calm background score. Runs on Instagram, Google Display, and the clinic website.' },
                  { name: 'Health Awareness Spot', tag: 'PROMO', desc: 'Seasonal health content tied to your specialisation — produced for World Health Days, festive campaigns, and monthly themes.' },
                  { name: 'Consultation Offer Ad', tag: 'PRODUCT', desc: 'Free consultation, health package, or seasonal offer — 8-second visual with CTA. Runs on Reels and Stories.' },
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
              <div className="storyboard-label">Sample Production · Private Clinics</div>
              <img
                src="https://res.cloudinary.com/duqgxghmt/image/upload/v1780192759/Doctor_stmm5u.png"
                alt="Private clinic production storyboard"
              />
            </div>

            {/* Gym & Fitness */}
            <div className="vertical-block">
              <div className="vertical-header">
                <span className="vertical-icon">💪</span>
                <div>
                  <h3>Gym &amp; Fitness</h3>
                  <p>High-energy content that converts followers into paying members</p>
                </div>
              </div>
              <div className="ad-grid">
                {[
                  { name: 'Facility Tour', tag: 'AWARENESS', desc: 'Dynamic walkthrough of equipment, training zones, and amenities. Fast cuts, upbeat score. Runs on Reels and YouTube Shorts.' },
                  { name: 'Trainer Spotlight', tag: 'BRAND', desc: '20-second profile — expertise, training style, and results. Builds a personal connection before the first session inquiry.' },
                  { name: 'Transformation Reel', tag: 'CONVERSIONS', desc: 'Member journey in 30 seconds — before, during, and after — with motivational narration and a strong CTA.' },
                  { name: 'Membership Offer', tag: 'PROMO', desc: 'New Year, summer, and festive membership deals produced in variants for each plan tier. Drives sign-ups on Meta and Google.' },
                  { name: 'Class Highlight', tag: 'REEL', desc: '8-second energy cut from a live session — HIIT, yoga, Zumba, CrossFit. Runs daily to keep the feed active.' },
                  { name: 'Member Testimonial', tag: 'TRUST', desc: 'Real member quote over training footage. Authentic social proof that turns browsers into walk-in enquiries.' },
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
              <div className="storyboard-label">Sample Production · Gym &amp; Fitness</div>
              <img
                src="https://res.cloudinary.com/duqgxghmt/image/upload/v1780192757/gym_uxmvir.png"
                alt="Gym and fitness production storyboard"
              />
            </div>

          </div>
        </section>
      )}

      {/* PIPELINE TAB */}
      {tab === 'pipeline' && (
        <section className="tab-section">
          <div className="section-eyebrow">The Production Pipeline</div>
          <h2>From Brief to Published in Under 10 Minutes</h2>
          <p className="section-intro">
            Share your assets and a single-line brief. We handle everything from creative direction and
            scripting to final delivery — formatted for every platform you publish on.
          </p>
          <div className="pipeline-steps">
            {[
              { step: '01', title: 'Brand Brief', desc: 'Share your photos, existing video clips, brand colours, and a one-line goal. No creative deck or agency brief required.' },
              { step: '02', title: 'Creative Storyboard', desc: 'We plan a scene-by-scene storyboard from your existing assets. Every frame is defined before production begins.' },
              { step: '03', title: 'Video Content Creation', desc: 'Brand assets are transformed into cinematic motion sequences. Multiple variants produced simultaneously for A/B testing.' },
              { step: '04', title: 'Brand Narration', desc: 'Professional voiceover in your brand tone — English, Hindi, Arabic, or any language your audience speaks.' },
              { step: '05', title: 'Music & Sound Design', desc: 'Original score composed to match your visual identity and platform context. Adjusted per format and placement.' },
              { step: '06', title: 'Platform Export & Delivery', desc: 'Final videos delivered in Reels (9:16), Shorts, Stories, and 16:9 — formatted, labelled, and ready to publish.' },
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
          <div className="section-eyebrow">Agency Retainer Model</div>
          <h2>Choose Your Monthly Package</h2>
          <p className="section-intro">
            All packages deliver stitched video ads formatted for Instagram Reels, YouTube Shorts, Stories,
            and paid social — across hospitality, real estate, healthcare, fitness, and every industry in between.
            You pay for delivered output, not tools or software.
          </p>

          <CurrencyToggle currency={currency} setCurrency={setCurrency} />

          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="plan-tier">Starter</div>
              <div className="plan-price">{planPrice('starter', currency)}<span>/month</span></div>
              <ul className="plan-features">
                <li>5 stitched video ads per day (15–30 seconds each)</li>
                <li>Motion content from your existing photos &amp; clips</li>
                <li>Text overlays, price callouts, CTA graphics</li>
                <li>Formatted for Reels, Stories, YouTube Shorts</li>
                <li>Music &amp; sound design — no voiceover</li>
                <li>Daily delivery — published the same day, every day</li>
                <li>Any industry vertical supported</li>
              </ul>
              <div className="plan-note">Ideal for brands establishing a daily video presence on social platforms.</div>
            </div>

            <div className="pricing-card featured">
              <div className="featured-badge">Most Popular</div>
              <div className="plan-tier">Growth</div>
              <div className="plan-price">{planPrice('growth', currency)}<span>/month</span></div>
              <ul className="plan-features">
                <li>5 stitched video ads per day (30 seconds – 1 minute)</li>
                <li>Professional voiceover with brand narration</li>
                <li>English + Hindi + Arabic narration included</li>
                <li>4 formats per video: Reels, Shorts, Stories, 16:9</li>
                <li>Original background score per video</li>
                <li>Batch variants — one template, multiple offers</li>
                <li>Daily delivery with platform scheduling guidance</li>
              </ul>
              <div className="plan-note">Ideal for brands that require a consistent and recognisable brand voice.</div>
            </div>

            <div className="pricing-card enterprise">
              <div className="plan-tier">Enterprise</div>
              <div className="plan-price">{planPrice('enterprise', currency)}<span>/month</span></div>
              <ul className="plan-features">
                <li>5 stitched video ads per day (30 seconds – 1 minute)</li>
                <li>Unlimited revision and edit rounds</li>
                <li>Dedicated brand voice across all languages</li>
                <li>Same-day revised variants after feedback</li>
                <li>Custom visual style matched to your brand</li>
                <li>Multi-language narration across all markets</li>
                <li>Fully automated brief-to-publish pipeline</li>
                <li>Dedicated account manager for daily briefs</li>
              </ul>
              <div className="plan-note">Ideal for multi-location brands running campaigns across multiple verticals.</div>
            </div>
          </div>

          <div className="margin-math">
            <strong>The production advantage:</strong> Traditional agencies charge {fmt(2000, currency)}–{fmt(10000, currency)} per video
            {' '}and deliver in weeks. Our monthly retainer gives you 5 platform-ready video ads every day — brief, production,
            edit, and publish included — so your brand maintains a continuous presence without the overhead, the delays, or the crew.
          </div>
        </section>
      )}

      <footer className="site-footer">
        <p>Content Studio · Digital Marketing Agency · 2026</p>
      </footer>
    </div>
  )
}
