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
      className="py-32 bg-white border-t border-black/10"
      aria-label="Kollectiv Acoustics — acoustic panel fabrication and room measurement"
    >
      <div className="max-w-[1180px] mx-auto px-8">
        <motion.div {...fadeUp} className="mb-16">
          <div className="flex items-center gap-5 mb-8">
            <div className="h-px w-10 bg-black/20 shrink-0" />
            <p className="text-[11px] tracking-[0.35em] uppercase text-black/40">
              Kollectiv Acoustics
            </p>
          </div>
          <h2
            className="font-display text-black uppercase leading-[0.9]"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}
          >
            The same ears that built<br />our live room,<br />now work on yours.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.1 }}>
            <div className="space-y-5 text-black/60 leading-relaxed mb-12" style={{ fontSize: '18px' }}>
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
                    backgroundColor: '#f0f0f0',
                    boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.18)',
                    scale: 1.018,
                    zIndex: 1,
                    transition: { duration: 0.25, ease: 'easeOut' },
                  }}
                  className="border border-black/10 p-7 cursor-default"
                >
                  <div className="flex items-start gap-5">
                    <div className="text-black/35 mt-0.5 shrink-0">{card.icon}</div>
                    <div>
                      <h3
                        className="font-display text-black uppercase tracking-wider mb-3 leading-tight"
                        style={{ fontSize: '1.25rem' }}
                      >
                        {card.label}
                      </h3>
                      <p className="text-black/55 leading-relaxed" style={{ fontSize: '17px' }}>
                        {card.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <p className="text-[11px] tracking-[0.2em] uppercase text-black/30 mb-10">
              Churches &middot; Rehearsal Spaces &middot; Home Studios &middot; Conference Rooms &middot; Performance Halls
            </p>

            <a
              href="https://wa.me/27846193650"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-white bg-black px-7 py-4 hover:bg-black/80 transition-colors duration-200 min-h-[52px] group"
            >
              <span className="relative overflow-hidden inline-block">
                <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
                  Enquire About Your Space
                </span>
                <span className="block absolute inset-0 transition-transform duration-300 ease-out translate-y-full group-hover:translate-y-0">
                  Enquire About Your Space
                </span>
              </span>
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
              className="overflow-hidden bg-[#ddd] relative group"
              style={{ aspectRatio: '4/3' }}
            >
              <img
                src={`${BASE}images/IMG_4018.JPEG`}
                alt="Acoustic treatment panels at Kollectiv Studios, The Moot, Pretoria"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ filter: 'grayscale(100%)' }}
              />
              <div className="absolute inset-0 bg-black/15" />
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="overflow-hidden bg-[#ddd] relative md:ml-8 group"
              style={{ aspectRatio: '4/3' }}
            >
              <img
                src={`${BASE}images/IMG_4095.JPEG`}
                alt="Vocalist recording in the Kollectiv Studios live room with acoustic diffusion panels"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ filter: 'grayscale(100%)' }}
              />
              <div className="absolute inset-0 bg-black/15" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
