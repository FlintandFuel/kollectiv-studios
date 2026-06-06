import { motion } from 'framer-motion'

const BASE = import.meta.env.BASE_URL

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13 } },
}

const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const services = [
  {
    label: 'Acoustic Panel Fabrication',
    description:
      'Custom-built acoustic treatment panels designed and manufactured to suit your space — in dimensions, materials, and finish that work for your environment.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="1" y="1" width="7.5" height="7.5" rx="0.5" stroke="currentColor" strokeWidth="1.3" />
        <rect x="11.5" y="1" width="7.5" height="7.5" rx="0.5" stroke="currentColor" strokeWidth="1.3" />
        <rect x="1" y="11.5" width="7.5" height="7.5" rx="0.5" stroke="currentColor" strokeWidth="1.3" />
        <rect x="11.5" y="11.5" width="7.5" height="7.5" rx="0.5" stroke="currentColor" strokeWidth="1.3" />
      </svg>
    ),
  },
  {
    label: 'Acoustic Measurement & Analysis',
    description:
      'Professional room measurement using industry-standard tools. We give you a full acoustic profile of your space and a clear treatment recommendation.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <polyline
          points="1,14 5,8 8,11 12,5 16,9 19,6"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
]

export default function KollectivAcoustics() {
  return (
    <section
      id="acoustics"
      className="py-32 bg-[#070707] border-t border-white/10"
      aria-label="Kollectiv Acoustics — acoustic panel fabrication and room measurement"
    >
      <div className="max-w-[1180px] mx-auto px-8">
        <motion.div {...fadeUp} className="mb-16">
          <div className="flex items-center gap-5 mb-8">
            <div className="h-px w-10 bg-white/20 shrink-0" />
            <p className="text-[11px] tracking-[0.35em] uppercase text-white/35">
              Kollectiv Acoustics
            </p>
          </div>
          <h2
            className="font-display text-white uppercase leading-[0.9]"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}
          >
            The same ears that built<br />our live room,<br />now work on yours.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.1 }}>
            <div className="space-y-5 text-white/55 leading-relaxed mb-12" style={{ fontSize: '18px' }}>
              <p>
                Kollectiv Acoustics is the acoustic division of Kollectiv Studios — built on the same
                obsession with how rooms sound that shaped every corner of our recording space.
              </p>
              <p>
                We design and fabricate custom acoustic panels for venues that need to sound right:
                churches, rehearsal rooms, home studios, conference spaces, and performance halls.
                Beyond installation, we offer professional acoustic measurement and analysis — so you
                understand exactly what your room is doing before and after treatment.
              </p>
              <p>
                Every space has a sound problem. We find it, and we fix it.
              </p>
            </div>

            <motion.div
              className="space-y-4 mb-12"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {services.map((card, i) => (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  whileHover={{
                    borderColor: 'rgba(255,255,255,0.22)',
                    backgroundColor: '#111111',
                    transition: { duration: 0.22 },
                  }}
                  className="border border-white/10 p-7 cursor-default transition-colors duration-200"
                >
                  <div className="flex items-start gap-5">
                    <div className="text-white/35 mt-0.5 shrink-0">{card.icon}</div>
                    <div>
                      <h3
                        className="font-display text-white uppercase tracking-wider mb-3 leading-tight"
                        style={{ fontSize: '1.25rem' }}
                      >
                        {card.label}
                      </h3>
                      <p className="text-white/50 leading-relaxed" style={{ fontSize: '17px' }}>
                        {card.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <p className="text-[11px] tracking-[0.2em] uppercase text-white/22 mb-10">
              Churches &middot; Rehearsal Spaces &middot; Home Studios &middot; Conference Rooms &middot; Performance Halls
            </p>

            <a
              href="https://wa.me/27846193650"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-xs tracking-[0.25em] uppercase border border-white/30 text-white px-7 py-4 hover:border-white/60 hover:bg-white/5 transition-all duration-200 min-h-[52px]"
            >
              Enquire About Your Space
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path
                  d="M2 7h10M8 3l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </motion.div>

          <div className="flex flex-col gap-3">
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="overflow-hidden bg-[#111] relative"
              style={{ aspectRatio: '4/3' }}
            >
              <img
                src={`${BASE}images/IMG_4085.JPEG`}
                alt="Acoustic treatment panels inside Kollectiv Studios live room, The Moot, Pretoria"
                className="w-full h-full object-cover"
                style={{ filter: 'grayscale(100%)' }}
              />
              <div className="absolute inset-0 bg-black/25" />
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="overflow-hidden bg-[#111] relative md:ml-8"
              style={{ aspectRatio: '4/3' }}
            >
              <img
                src={`${BASE}images/IMG_4066.JPEG`}
                alt="Live room interior at Kollectiv Studios showing treated walls and full band recording setup"
                className="w-full h-full object-cover"
                style={{ filter: 'grayscale(100%)' }}
              />
              <div className="absolute inset-0 bg-black/25" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
