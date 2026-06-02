/*
 * Kollectiv Studios — Landing Page
 *
 * Positioning angle:
 *   Own the rock/alternative/punk niche in Pretoria. Lead with creative philosophy,
 *   not a service menu. Make musicians feel chosen, not processed.
 *
 * Top trust signals:
 *   — Affiliated with Moot Records (label-side credibility)
 *   — Purpose-built acoustic treatment for full band live recording
 *   — End-to-end production: track, mix, master under one roof
 *
 * Primary CTA rationale:
 *   WhatsApp (wa.me/27846193650) is lowest friction for the SA creative market.
 *   Persistent floating button keeps it accessible at every scroll position.
 *
 * Font pairing:
 *   Display: Bebas Neue — condensed, uppercase, impactful. Looks at home on vinyl
 *   sleeves and band t-shirts. Perfectly matches the brutalist editorial brief.
 *   Body: DM Sans — clean, modern, highly readable at 18px. Balances the aggression.
 *
 * Accent colour:
 *   Pure white (#FFFFFF) on pure black (#000000). Monochrome world only.
 *   White on: CTA buttons, section labels, decorative rules, hover states.
 */

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SalesBar from '@/components/SalesBar'
import './index.css'

const BASE = import.meta.env.BASE_URL

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

// ─────────────────────────────────────────────
// Nav
// ─────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-400 ${
        scrolled ? 'bg-black border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1180px] mx-auto px-8 py-5 flex items-center justify-between">
        <a href="#" aria-label="Kollectiv Studios home">
          <img
            src={`${BASE}images/KS_logo-white.webp`}
            alt="Kollectiv Studios"
            className="h-11 w-auto"
          />
        </a>

        <nav className="flex items-center gap-8" aria-label="Main navigation">
          <a
            href="#the-space"
            className="text-xs tracking-[0.2em] uppercase text-white/60 hover:text-white transition-colors duration-200 hidden sm:block"
          >
            The Space
          </a>
          <a
            href="#services"
            className="text-xs tracking-[0.2em] uppercase text-white/60 hover:text-white transition-colors duration-200 hidden sm:block"
          >
            Services
          </a>
          <a
            href="#about"
            className="text-xs tracking-[0.2em] uppercase text-white/60 hover:text-white transition-colors duration-200 hidden sm:block"
          >
            About
          </a>
          <a
            href="https://wa.me/27846193650"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-[0.2em] uppercase text-black bg-white px-5 py-2.5 hover:bg-white/90 transition-colors duration-200 min-h-[44px] flex items-center"
          >
            Book a Session
          </a>
        </nav>
      </div>
    </header>
  )
}

// ─────────────────────────────────────────────
// Hero
// ─────────────────────────────────────────────
function Hero() {
  return (
    <section
      className="relative min-h-[95vh] flex items-end bg-black overflow-hidden"
      aria-label="Hero"
    >
      <div className="absolute inset-0">
        <img
          src={`${BASE}images/IMG_4118.JPEG`}
          alt="Engineer at work inside Kollectiv Studios control room, The Moot, Pretoria"
          className="w-full h-full object-cover object-center"
          style={{ filter: 'grayscale(100%) contrast(1.05)', opacity: 0.65 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />
      </div>

      <div className="relative z-10 max-w-[1180px] mx-auto px-8 pb-28 pt-48 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <p className="text-[11px] tracking-[0.35em] uppercase text-white/40 mb-8">
            Recording Studio, The Moot, Pretoria
          </p>
          <h1
            className="font-display text-white uppercase mb-8 leading-[0.88]"
            style={{ fontSize: 'clamp(3.5rem, 10vw, 8.5rem)' }}
          >
            Your song already knows<br />what it wants<br />to sound like.
          </h1>
          <p className="text-lg text-white/55 max-w-[460px] leading-relaxed mb-12 font-light">
            Kollectiv is the room where it finally gets to. Full band recording,
            live drum tracking, and end-to-end production in The Moot, Pretoria.
          </p>
          <a
            href="https://wa.me/27846193650"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-black bg-white px-8 py-4 hover:bg-white/90 transition-colors duration-200 min-h-[52px]"
          >
            Let's Make Something
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-10 right-10 z-10 hidden md:block" aria-hidden="true">
        <div className="w-px h-16 bg-white/15" />
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
// Trust Bar
// ─────────────────────────────────────────────
function TrustBar() {
  const items = [
    {
      stat: 'Full Band Capable',
      label: 'Live drum tracking, amps, full group setups',
    },
    {
      stat: 'Moot Records Affiliate',
      label: 'Label-side credibility, end-to-end production',
    },
    {
      stat: 'Acoustically Treated',
      label: 'Purpose-built. Not a garage. Not a conversion.',
    },
  ]

  return (
    <section className="border-t border-b border-white/10 bg-[#111111]" aria-label="Trust signals">
      <div className="max-w-[1180px] mx-auto px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {items.map((item, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              whileHover={{
                backgroundColor: '#1d1d1d',
                boxShadow: 'inset 0 0 0 1px rgba(200,200,200,0.22)',
                transition: { duration: 0.22, ease: 'easeOut' },
              }}
              className={`py-10 px-6 text-center cursor-default ${
                i < 2 ? 'md:border-r border-white/10' : ''
              } ${i > 0 ? 'border-t md:border-t-0 border-white/10' : ''}`}
            >
              <p className="font-display text-xl text-white tracking-wider uppercase mb-1">
                {item.stat}
              </p>
              <p className="text-xs text-white/35 tracking-wider">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
// The Space
// ─────────────────────────────────────────────
function TheSpace() {
  return (
    <section id="the-space" className="py-32 bg-black" aria-label="The Space — studio environment">
      <div className="max-w-[1180px] mx-auto px-8">
        <motion.div {...fadeUp} className="mb-16">
          <p className="text-[11px] tracking-[0.35em] uppercase text-white/25 mb-5">The Room</p>
          <h2
            className="font-display text-white uppercase mb-6 leading-[0.9]"
            style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}
          >
            Not a garage.<br />Not a booth.
          </h2>
          <p className="text-lg text-white/55 max-w-[520px] leading-relaxed font-light">
            A purpose-built acoustic environment where full bands track live. Drums, amps,
            keys, vocals. All of it, in a room that was designed for exactly that.
          </p>
        </motion.div>

        <div className="grid grid-cols-12 gap-3">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="col-span-12 md:col-span-7 overflow-hidden bg-[#111]"
            style={{ aspectRatio: '4/3' }}
          >
            <img
              src={`${BASE}images/IMG_3952.JPEG`}
              alt="Control room at Kollectiv Studios showing engineer workstation with dual monitors and KRK studio monitors"
              className="w-full h-full object-cover"
              style={{ filter: 'grayscale(100%)' }}
            />
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="col-span-12 md:col-span-5 overflow-hidden bg-[#111]"
            style={{ aspectRatio: '3/4' }}
          >
            <img
              src={`${BASE}images/IMG_4095.JPEG`}
              alt="Vocalist recording in the Kollectiv Studios live room with acoustic diffusion panels"
              className="w-full h-full object-cover"
              style={{ filter: 'grayscale(100%)' }}
            />
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="col-span-12 md:col-span-5 overflow-hidden bg-[#111]"
            style={{ aspectRatio: '3/4' }}
          >
            <img
              src={`${BASE}images/IMG_4065.JPEG`}
              alt="Live room at Kollectiv Studios showing full drum kit setup and acoustic treatment panels for band recording"
              className="w-full h-full object-cover object-center"
              style={{ filter: 'grayscale(100%)' }}
            />
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="col-span-12 md:col-span-7 overflow-hidden bg-[#111]"
            style={{ aspectRatio: '4/3' }}
          >
            <img
              src={`${BASE}images/IMG_4001.JPEG`}
              alt="Full band session at Kollectiv Studios Pretoria — drum kit in foreground, musician at keyboard in the live room"
              className="w-full h-full object-cover"
              style={{ filter: 'grayscale(100%)' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
// Services
// ─────────────────────────────────────────────
function Services() {
  const services = [
    {
      number: '01',
      heading: 'Recording & Live Sessions',
      body: 'You bring the band. You bring the songs. You get a room built to capture all of it at once: live drums, amplified guitars, keys, vocals. No multi-track-in-isolation compromises. One room. Full setup. Record it the way it actually sounds.',
      tag: 'Full band tracking, live drum recording, recording studio Pretoria',
    },
    {
      number: '02',
      heading: 'Music Production & Mixing',
      body: 'From a strong idea to something release-ready. Whether you are starting from scratch or bringing raw recordings, the production and mixing process here is collaborative and honest. No over-polished results. No generic presets. Just the sound the song needs.',
      tag: 'Music production, mixing, mastering, Moot Records affiliate',
    },
    {
      number: '03',
      heading: 'Rehearsal Space',
      body: 'The room, the PA, the atmosphere. Book the space and work the material before you commit to tape. Tight arrangements make better recordings. Use the same room you will record in so there are no surprises on session day.',
      tag: 'Rehearsal space Pretoria, pre-production, room hire The Moot',
    },
  ]

  return (
    <section
      id="services"
      className="py-32 bg-[#0A0A0A] border-t border-white/10"
      aria-label="Services — recording, production, rehearsal"
    >
      <div className="max-w-[1180px] mx-auto px-8">
        <motion.div {...fadeUp} className="mb-20">
          <p className="text-[11px] tracking-[0.35em] uppercase text-white/25 mb-5">What We Do</p>
          <h2
            className="font-display text-white uppercase leading-[0.9]"
            style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}
          >
            Three ways in.
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 border-t border-white/10"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {services.map((s, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              whileHover={{
                backgroundColor: '#181818',
                boxShadow: 'inset 0 0 0 1px rgba(200,200,200,0.18)',
                scale: 1.018,
                zIndex: 1,
                transition: { duration: 0.25, ease: 'easeOut' },
              }}
              className={`py-12 px-8 md:px-10 border-b md:border-b-0 border-white/10 cursor-default ${
                i > 0 ? 'md:border-l border-white/10' : ''
              }`}
            >
              <span className="font-display text-[4rem] text-white/8 block mb-6 leading-none select-none">
                {s.number}
              </span>
              <h3 className="font-display text-2xl text-white uppercase tracking-wider mb-5 leading-tight">
                {s.heading}
              </h3>
              <p className="text-white/50 leading-relaxed mb-6" style={{ fontSize: '17px' }}>
                {s.body}
              </p>
              <p className="text-[11px] tracking-widest uppercase text-white/18">{s.tag}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          {...fadeUp}
          className="mt-16 pt-12 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center gap-6"
        >
          <p className="text-white/40 max-w-[400px] leading-relaxed" style={{ fontSize: '17px' }}>
            Not sure which option fits your project? One message is enough to figure it out.
          </p>
          <a
            href="https://wa.me/27846193650"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-xs tracking-[0.25em] uppercase text-black bg-white px-7 py-4 hover:bg-white/90 transition-colors duration-200 min-h-[48px] flex items-center"
          >
            Ask a Question
          </a>
        </motion.div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
// The Vibe / About
// ─────────────────────────────────────────────
function TheVibe() {
  return (
    <section
      id="about"
      className="py-32 bg-[#0A0A0A] border-t border-white/10"
      aria-label="About Kollectiv Studios"
    >
      <div className="max-w-[1180px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp}>
            <p className="text-[11px] tracking-[0.35em] uppercase text-white/25 mb-6">The Vibe</p>
            <h2
              className="font-display text-white uppercase mb-8 leading-[0.92]"
              style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)' }}
            >
              Music made by people who actually love it.
            </h2>
            <div className="space-y-5 text-white/55 leading-relaxed" style={{ fontSize: '18px' }}>
              <p>
                Most studios will take your booking, set up the mics, and send you a drive with
                files. That is not what happens here. Kollectiv exists for artists who care about
                the song as much as the session.
              </p>
              <p>
                Located in The Moot, Pretoria, and affiliated with Moot Records, the studio was built
                around one idea: the best recordings happen when the space feels safe and the
                engineer actually listens. Not to the waveform. To you.
              </p>
              <p>
                Rock, alternative, punk, pop, anything with intention. If you know what you want
                the song to do to someone, this is the room where you make that happen.
              </p>
            </div>
            <div className="mt-10 pt-8 border-t border-white/10">
              <p className="text-[11px] tracking-[0.3em] uppercase text-white/20 mb-3">Find Us</p>
              <address className="not-italic text-white/40 text-sm leading-relaxed">
                Kollectiv Studios, The Moot, Pretoria, Gauteng, South Africa
              </address>
              <a
                href="https://kollectiv.co.za/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/30 text-sm hover:text-white/60 transition-colors mt-2 block"
              >
                kollectiv.co.za
              </a>
            </div>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="overflow-hidden bg-[#111]"
            style={{ aspectRatio: '3/4' }}
          >
            <img
              src={`${BASE}images/IMG_3979.JPEG`}
              alt="Engineer reviewing guitar part in the Kollectiv Studios control room, The Moot, Pretoria"
              className="w-full h-full object-cover"
              style={{ filter: 'grayscale(100%)' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
// Email Capture
// ─────────────────────────────────────────────
function EmailCapture() {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Connect to Mailchimp / Brevo / Formspree endpoint
    setSubmitted(true)
  }

  return (
    <section
      className="py-32 bg-black border-t border-white/10"
      aria-label="Free studio preparation checklist download"
    >
      <div className="max-w-[1180px] mx-auto px-8">
        <motion.div {...fadeUp} className="max-w-[480px] mx-auto text-center">
          <p className="text-[11px] tracking-[0.35em] uppercase text-white/25 mb-5">
            Free Download
          </p>
          <h2
            className="font-display text-white uppercase mb-4 leading-tight"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            Get more from every session.
          </h2>
          <p className="text-white/45 leading-relaxed mb-10" style={{ fontSize: '17px' }}>
            The Artist's Pre-Production Checklist. One page. Everything you need to show up
            prepared and get the most out of every hour in the studio.
          </p>

          {submitted ? (
            <div className="border border-white/15 p-10">
              <p className="font-display text-3xl text-white uppercase tracking-wider mb-3">
                You're on the list.
              </p>
              <p className="text-white/45 text-base">
                Check your inbox. The checklist is on its way.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                aria-label="First name"
                className="w-full bg-transparent border border-white/20 text-white placeholder-white/20 px-5 py-4 text-base focus:outline-none focus:border-white/50 transition-colors"
              />
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Email address"
                className="w-full bg-transparent border border-white/20 text-white placeholder-white/20 px-5 py-4 text-base focus:outline-none focus:border-white/50 transition-colors"
              />
              <button
                type="submit"
                className="w-full text-xs tracking-[0.25em] uppercase text-black bg-white px-8 py-4 hover:bg-white/90 transition-colors duration-200 min-h-[52px]"
              >
                Send Me the Checklist
              </button>
              <p className="text-white/18 text-xs leading-relaxed">
                No spam. Useful content and occasional session stories. Unsubscribe any time.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
// Contact / Book a Session
// ─────────────────────────────────────────────
function Contact() {
  const [form, setForm] = useState({ name: '', email: '', project: '', dates: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Connect to Formspree / Netlify Forms / email endpoint
    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      className="py-32 bg-[#0A0A0A] border-t border-white/10"
      aria-label="Book a recording session at Kollectiv Studios"
    >
      <div className="max-w-[1180px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div {...fadeUp}>
            <p className="text-[11px] tracking-[0.35em] uppercase text-white/25 mb-6">
              Book a Session
            </p>
            <h2
              className="font-display text-white uppercase mb-8 leading-[0.9]"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              Tell us what you're working on.
            </h2>
            <p className="text-white/50 leading-relaxed mb-10" style={{ fontSize: '18px' }}>
              The fastest way in is WhatsApp. Tell us the setup, the genre, the vibe you are going
              for, and when you are thinking. Two minutes is enough.
            </p>

            <a
              href="https://wa.me/27846193650"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-black bg-white px-7 py-4 hover:bg-white/90 transition-colors duration-200 min-h-[52px] mb-12"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp 084 619 3650
            </a>

            <div className="border-t border-white/10 pt-8 space-y-3 text-sm text-white/35">
              <p>
                <a href="tel:+27846193650" className="hover:text-white/70 transition-colors">
                  084 619 3650
                </a>
              </p>
              <p>The Moot, Pretoria, Gauteng</p>
              <p>
                <a
                  href="https://www.instagram.com/kollectiv_studio.pta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white/70 transition-colors"
                >
                  @kollectiv_studio.pta
                </a>
              </p>
            </div>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.2 }}>
            {submitted ? (
              <div className="border border-white/12 p-10 flex flex-col justify-center h-full min-h-[400px]">
                <p className="font-display text-4xl text-white uppercase tracking-wider mb-4">
                  Message sent.
                </p>
                <p className="text-white/45 leading-relaxed" style={{ fontSize: '17px' }}>
                  We'll get back to you shortly. WhatsApp is faster if you need a quick answer.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-[11px] tracking-[0.25em] uppercase text-white/25 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Name or band name"
                    className="w-full bg-transparent border border-white/18 text-white placeholder-white/18 px-5 py-4 text-base focus:outline-none focus:border-white/45 transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-[11px] tracking-[0.25em] uppercase text-white/25 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="you@email.com"
                    className="w-full bg-transparent border border-white/18 text-white placeholder-white/18 px-5 py-4 text-base focus:outline-none focus:border-white/45 transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-project"
                    className="block text-[11px] tracking-[0.25em] uppercase text-white/25 mb-2"
                  >
                    What Are You Working On?
                  </label>
                  <textarea
                    id="contact-project"
                    name="project"
                    value={form.project}
                    onChange={handleChange}
                    required
                    rows={3}
                    placeholder="Band, genre, session type. Keep it loose"
                    className="w-full bg-transparent border border-white/18 text-white placeholder-white/18 px-5 py-4 text-base focus:outline-none focus:border-white/45 transition-colors resize-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-dates"
                    className="block text-[11px] tracking-[0.25em] uppercase text-white/25 mb-2"
                  >
                    Preferred Dates
                  </label>
                  <input
                    type="text"
                    id="contact-dates"
                    name="dates"
                    value={form.dates}
                    onChange={handleChange}
                    placeholder="Rough timeframe is fine"
                    className="w-full bg-transparent border border-white/18 text-white placeholder-white/18 px-5 py-4 text-base focus:outline-none focus:border-white/45 transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-xs tracking-[0.25em] uppercase text-black bg-white px-8 py-4 hover:bg-white/90 transition-colors duration-200 min-h-[52px]"
                >
                  Send Enquiry
                </button>
                <p className="text-white/18 text-xs">
                  Or message directly on WhatsApp. It's faster.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
// Instagram Strip
// ─────────────────────────────────────────────
function InstagramStrip() {
  const images = [
    { src: 'IMG_4050.JPEG', alt: 'Artist recording session at Kollectiv Studios Pretoria' },
    { src: 'IMG_4075.JPEG', alt: 'Keyboard player in the Kollectiv Studios live room' },
    { src: 'IMG_4113.JPEG', alt: 'Engineer and artist at Kollectiv Studios, The Moot, Pretoria' },
    { src: 'IMG_3958.JPEG', alt: 'Session in progress at Kollectiv Studios control room' },
    { src: 'IMG_4117.JPEG', alt: 'Recording session at Kollectiv Studios Pretoria' },
    { src: 'IMG_4115.JPEG', alt: 'Studio session at Kollectiv Studios, The Moot, Pretoria' },
  ]

  return (
    <section
      className="py-24 bg-black border-t border-white/10"
      aria-label="Instagram — follow Kollectiv Studios"
    >
      <div className="max-w-[1180px] mx-auto px-8">
        <motion.div
          {...fadeUp}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 mb-10"
        >
          <div>
            <p className="text-[11px] tracking-[0.35em] uppercase text-white/25 mb-2">
              Follow the Sessions
            </p>
            <p className="font-display text-3xl text-white uppercase">
              @kollectiv_studio.pta
            </p>
          </div>
          <a
            href="https://www.instagram.com/kollectiv_studio.pta"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] tracking-[0.2em] uppercase text-white/35 hover:text-white transition-colors border border-white/15 hover:border-white/35 px-5 py-3 min-h-[44px] flex items-center"
          >
            Follow on Instagram
          </a>
        </motion.div>

        <motion.div
          className="grid grid-cols-3 md:grid-cols-6 gap-1"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {images.map((img, i) => (
            <motion.a
              key={i}
              variants={staggerItem}
              href="https://www.instagram.com/kollectiv_studio.pta"
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden bg-[#111] group"
              style={{ aspectRatio: '1/1' }}
              aria-label={img.alt}
            >
              <img
                src={`${BASE}images/${img.src}`}
                alt={img.alt}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:opacity-80"
                style={{ filter: 'grayscale(100%)' }}
              />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
// FAQ
// ─────────────────────────────────────────────
function FAQ() {
  const [open, setOpen] = useState(null)

  const faqs = [
    {
      q: 'Can your studio handle full live band recordings including drums?',
      a: 'Yes. Kollectiv Studios was purpose-built for full band live tracking. The acoustically treated live room handles drum kits, amplified instruments, and full group setups comfortably. Drums, bass, guitars, keys, and vocals, all at once, in the same room, the way it sounds when you play it live. You do not need to compromise your band configuration to record here.',
    },
    {
      q: "What's the difference between a recording session and a rehearsal booking?",
      a: 'A recording session puts you in front of the mics with an engineer capturing every take. The goal is a release-ready result. A rehearsal booking gives you the room and the PA to work through your material, tighten arrangements, and prepare before you commit to tape. Both are available at Kollectiv. Rehearsing in the same room you will record in means no surprises on the day.',
    },
    {
      q: 'Do I need to bring my own engineer, or do you provide one?',
      a: 'Kollectiv provides an engineer for your session. Someone who is there to serve the song, not just operate the desk. If you have a preferred engineer or producer you want to bring in, that is also fine. Just let us know when you enquire so the session can be planned accordingly.',
    },
    {
      q: 'How do I book a session and what is the lead time?',
      a: 'The simplest way to book is via WhatsApp on 084 619 3650. Tell us what you are working on, how many people are in your setup, and your preferred dates. We will confirm availability and all session details directly. Lead time varies but most sessions can be confirmed within a few days of enquiry.',
    },
    {
      q: 'What genres does Kollectiv Studios work with?',
      a: 'Kollectiv Studios works with artists who play with intention. The studio has strong experience with rock, alternative, punk, pop, metal, and adjacent genres. If your music is energetic, textured, or band-driven, the room was built for exactly that. Solo artists, singer-songwriters, and producers working across any genre are equally welcome.',
    },
    {
      q: 'Do you offer mixing and mastering as standalone services?',
      a: 'Yes. If you have already recorded your tracks elsewhere and need professional mixing or mastering in The Moot, Pretoria, Kollectiv Studios can handle either or both as standalone services. Message via WhatsApp to discuss your project, what format your tracks are in, and what result you are working toward.',
    },
    {
      q: 'Is Kollectiv Studios suitable for solo artists and vocalists, or only bands?',
      a: 'Both. Solo artists, vocalists, singer-songwriters, and producers book sessions at Kollectiv as frequently as full bands. The same acoustically treated environment, the same collaborative engineering approach, the same standard of output. Full band recording is something the studio does especially well, but you do not need a band to book a session here.',
    },
    {
      q: 'What should I prepare before my recording session?',
      a: 'The more prepared you are, the more you get out of the time. Come with your material tight: know your arrangements, bring your instruments in good condition with fresh strings or heads if applicable, and have a rough reference or structure for each song. If you want the free Pre-Production Checklist, sign up in the section above and it will arrive in your inbox before your session.',
    },
    {
      q: 'How long is a typical recording session?',
      a: 'Session length depends on what you are recording and how complex the production is. A single song with a full band can take anywhere from a half day to a full day. Longer blocks tend to produce better results because you spend less time on setup and more time on performance. Realistic timelines are confirmed when you enquire.',
    },
    {
      q: 'Where exactly is Kollectiv Studios located?',
      a: 'Kollectiv Studios is located in The Moot, Pretoria, Gauteng, South Africa. It is easily accessible from across the Tshwane metro and the wider Gauteng area, serving artists from Pretoria, Centurion, Midrand, and beyond. Exact address and directions are confirmed when you book via WhatsApp.',
    },
    {
      q: 'What equipment does the studio have?',
      a: 'The control room runs a dual-monitor DAW setup with KRK studio monitors and a full professional production chain. The live room is acoustically treated with diffusion panels and handles full band setups including drum kits, amplified guitars, keyboards, and vocal tracking. A detailed equipment list is available on request. Message via WhatsApp for specifics.',
    },
    {
      q: 'Can I record vocals at Kollectiv Studios?',
      a: 'Yes. Vocal recording is a core part of what the studio does. The acoustically treated environment gives you a controlled space for lead vocals, harmonies, spoken word, and live group takes. Solo vocalists, bands tracking live with vocals, and artists overdubbing are all catered for.',
    },
  ]

  return (
    <section
      className="py-32 bg-[#0A0A0A] border-t border-white/10"
      aria-label="Frequently asked questions about Kollectiv Studios"
    >
      <div className="max-w-[1180px] mx-auto px-8">
        <motion.div {...fadeUp} className="mb-16">
          <p className="text-[11px] tracking-[0.35em] uppercase text-white/25 mb-5">FAQ</p>
          <h2
            className="font-display text-white uppercase leading-[0.95]"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
          >
            Good questions.
          </h2>
        </motion.div>

        <div className="max-w-[760px]">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="border-t border-white/10"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left py-7 flex items-start justify-between gap-6 focus:outline-none group"
                aria-expanded={open === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span
                  className="text-white leading-snug group-hover:text-white/75 transition-colors"
                  style={{ fontSize: '18px' }}
                >
                  {faq.q}
                </span>
                <span className="shrink-0 mt-1.5 text-white/30 group-hover:text-white/60 transition-colors">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                    className={`transition-transform duration-300 ${open === i ? 'rotate-45' : ''}`}
                  >
                    <path
                      d="M8 2v12M2 8h12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    id={`faq-answer-${i}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28 }}
                    className="overflow-hidden"
                  >
                    <p
                      className="text-white/50 leading-relaxed pb-7 pr-8"
                      style={{ fontSize: '17px' }}
                    >
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
          <div className="border-t border-white/10" />
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
// Footer
// ─────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-black border-t border-white/10" aria-label="Site footer">
      <div className="max-w-[1180px] mx-auto px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <img
              src={`${BASE}images/KS_logo-white.webp`}
              alt="Kollectiv Studios"
              className="w-auto mb-6"
              style={{ height: '52px' }}
            />
            <address className="not-italic text-white/35 text-sm leading-relaxed">
              The Moot, Pretoria,
              <br />
              Gauteng, South Africa
            </address>
            <a
              href="tel:+27846193650"
              className="text-white/35 text-sm hover:text-white/65 transition-colors mt-2 block"
            >
              084 619 3650
            </a>
          </div>

          <div>
            <p className="text-[11px] tracking-[0.3em] uppercase text-white/18 mb-6">Navigate</p>
            <nav aria-label="Footer navigation" className="space-y-3">
              {[
                { label: 'The Space', href: '#the-space' },
                { label: 'Services', href: '#services' },
                { label: 'About', href: '#about' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-white/35 text-sm hover:text-white/65 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-[11px] tracking-[0.3em] uppercase text-white/18 mb-6">Connect</p>
            <div className="space-y-3 mb-8">
              <a
                href="https://www.instagram.com/kollectiv_studio.pta"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white/35 text-sm hover:text-white/65 transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100084961010588"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white/35 text-sm hover:text-white/65 transition-colors"
              >
                Facebook
              </a>
              <a
                href="https://kollectiv.co.za/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white/35 text-sm hover:text-white/65 transition-colors"
              >
                kollectiv.co.za
              </a>
            </div>
            <a
              href="https://wa.me/27846193650"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs tracking-[0.25em] uppercase text-black bg-white px-6 py-3 hover:bg-white/90 transition-colors duration-200 min-h-[44px]"
            >
              Book a Session
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/18 text-xs">
            &copy; {new Date().getFullYear()} Kollectiv Studios. All rights reserved.
          </p>
          <p className="text-white/18 text-xs">
            Recording studio, The Moot, Pretoria, Gauteng, South Africa
          </p>
        </div>
      </div>

      <div className="border-t border-white/8 py-4 text-center">
        <p className="text-white/18 text-xs">
          Website design by{' '}
          <a
            href="https://flintandfuel.co.za"
            target="_blank"
            rel="noopener"
            className="underline hover:text-white/40 transition-colors"
          >
            Flint and Fuel Creative
          </a>
        </p>
      </div>
    </footer>
  )
}

// ─────────────────────────────────────────────
// WhatsApp Floating Button
// ─────────────────────────────────────────────
function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/27846193650"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp — book a session at Kollectiv Studios"
      className="fixed bottom-28 right-5 z-40 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:bg-[#20bd5a] transition-colors duration-200"
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="white" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  )
}

// ─────────────────────────────────────────────
// App
// ─────────────────────────────────────────────
export default function App() {
  return (
    <div className="bg-black min-h-screen pb-24">
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <TheSpace />
        <Services />
        <TheVibe />
        <EmailCapture />
        <Contact />
        <InstagramStrip />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
      <SalesBar />
    </div>
  )
}
