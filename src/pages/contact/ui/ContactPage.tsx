import { useState, type FormEvent } from 'react'
import { ArrowUpRight, Mail } from 'lucide-react'
import { motion } from 'motion/react'
import { siWhatsapp } from 'simple-icons'
import { SITE_CONFIG } from '@shared/config'
import { fadeUpVariants, staggerContainerVariants } from '@shared/lib'
import { BrandIcon, Container, Reveal } from '@shared/ui'
import { INQUIRY_OPTIONS, type InquiryOption } from '../model/contactContent'

export function ContactPage() {
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [topic, setTopic] = useState<InquiryOption>(INQUIRY_OPTIONS[0])
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <section className="border-b border-carbon/12 bg-chalk py-16 sm:py-24 lg:py-28">
        <Container>
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-8 lg:grid-cols-12 lg:items-end"
          >
            <div className="space-y-5 lg:col-span-7">
              <motion.p
                variants={fadeUpVariants}
                className="text-xs font-semibold tracking-[0.2em] text-junova uppercase"
              >
                Contacto
              </motion.p>
              <motion.h1
                variants={fadeUpVariants}
                className="text-[clamp(2.15rem,4.2vw,3.5rem)] leading-[1.08] font-semibold tracking-tight text-carbon"
              >
                Hablemos de lo que necesitas construir.
              </motion.h1>
            </div>

            <motion.p
              variants={fadeUpVariants}
              className="text-base leading-relaxed text-graphite sm:text-lg lg:col-span-5"
            >
              Cuéntanos tu objetivo por el canal que prefieras. Te respondemos
              de forma directa para definir el mejor siguiente paso.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      <section className="section-band bg-carbon text-chalk">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <Reveal className="space-y-8 lg:col-span-5">
              <div className="space-y-3">
                <p className="text-xs font-semibold tracking-[0.2em] text-lightblue uppercase">
                  Canales directos
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-chalk sm:text-3xl">
                  Comunicación sin intermediarios.
                </h2>
                <p className="text-sm leading-relaxed text-neutral sm:text-base">
                  Si prefieres una respuesta rápida, escríbenos por WhatsApp o
                  envíanos un correo con el contexto de tu proyecto.
                </p>
              </div>

              <div className="space-y-4 border-t border-graphite pt-6">
                <a
                  href={SITE_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-chalk w-full justify-between"
                >
                  <span className="inline-flex items-center gap-2.5">
                    <BrandIcon icon={siWhatsapp} className="size-4" />
                    Escríbenos por WhatsApp
                  </span>
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </a>

                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="btn btn-outline-dark w-full justify-between"
                >
                  <span className="inline-flex items-center gap-2.5">
                    <Mail className="size-4" aria-hidden="true" />
                    {SITE_CONFIG.email}
                  </span>
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </a>
              </div>

              <p className="text-xs text-neutral">{SITE_CONFIG.location}</p>
            </Reveal>

            <Reveal delay={0.08} className="lg:col-span-7">
              {submitted ? (
                <div className="space-y-5 border-l-4 border-junova bg-graphite/50 p-8">
                  <p className="text-xs font-semibold tracking-[0.2em] text-lightblue uppercase">
                    Mensaje registrado
                  </p>
                  <h3 className="text-2xl font-semibold text-chalk">
                    Gracias, {name || 'equipo'}.
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral sm:text-base">
                    Esta vista funciona como plantilla base local. Cuando conectes
                    tu backend o servicio de correo, los datos de{' '}
                    <span className="text-chalk">{topic}</span> se enviarán
                    automáticamente.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="btn btn-outline-dark"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6 border-t border-graphite pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-12"
                >
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-semibold tracking-[0.14em] text-chalk uppercase"
                      >
                        Nombre
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Tu nombre"
                        className="w-full border border-graphite bg-carbon px-4 py-3 text-sm text-chalk placeholder:text-neutral focus:border-lightblue focus:outline-none"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="contact-company"
                        className="block text-xs font-semibold tracking-[0.14em] text-chalk uppercase"
                      >
                        Empresa
                      </label>
                      <input
                        id="contact-company"
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Nombre de tu empresa (opcional)"
                        className="w-full border border-graphite bg-carbon px-4 py-3 text-sm text-chalk placeholder:text-neutral focus:border-lightblue focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="contact-topic"
                      className="block text-xs font-semibold tracking-[0.14em] text-chalk uppercase"
                    >
                      Modalidad de interés
                    </label>
                    <select
                      id="contact-topic"
                      value={topic}
                      onChange={(e) => setTopic(e.target.value as InquiryOption)}
                      className="w-full border border-graphite bg-carbon px-4 py-3 text-sm text-chalk focus:border-lightblue focus:outline-none"
                    >
                      {INQUIRY_OPTIONS.map((option) => (
                        <option key={option} value={option} className="bg-carbon text-chalk">
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-semibold tracking-[0.14em] text-chalk uppercase"
                    >
                      Mensaje
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Cuéntanos brevemente qué necesitas resolver..."
                      className="w-full resize-y border border-graphite bg-carbon px-4 py-3 text-sm text-chalk placeholder:text-neutral focus:border-lightblue focus:outline-none"
                    />
                  </div>

                  <button type="submit" className="btn btn-blue">
                    Enviar consulta
                  </button>
                </form>
              )}
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  )
}
