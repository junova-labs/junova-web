import { Container, Reveal } from '@shared/ui'
import { COMPARISON_ROWS } from '../model/servicesContent'

export function ServiceComparisonSection() {
  return (
    <section className="section-band bg-chalk text-carbon">
      <Container className="space-y-14">
        <Reveal className="max-w-2xl space-y-4">
          <p className="text-xs font-semibold tracking-[0.2em] text-junova uppercase">
            Cómo elegir
          </p>
          <h2 className="text-3xl leading-[1.1] font-semibold tracking-tight text-carbon sm:text-4xl">
            ¿Catálogo adaptable o software a medida?
          </h2>
          <p className="text-base leading-relaxed text-graphite">
            Ambas modalidades comparten la misma ingeniería y soporte. El
            catálogo adaptable es el camino más directo para la mayoría de
            empresas, mientras que el desarrollo a medida cubre proyectos con
            lógica completamente exclusiva.
          </p>
        </Reveal>

        <Reveal>
          <div className="overflow-x-auto">
            <div className="min-w-[640px] divide-y divide-carbon/15 border-y border-carbon/15">
              <div className="grid grid-cols-12 gap-6 py-4 text-xs font-semibold tracking-[0.16em] uppercase">
                <div className="col-span-3 text-graphite">Criterio</div>
                <div className="col-span-5 text-junova">
                  Software de catálogo adaptable
                </div>
                <div className="col-span-4 text-carbon">Software a medida</div>
              </div>

              {COMPARISON_ROWS.map((row) => (
                <div
                  key={row.criterion}
                  className="grid grid-cols-12 gap-6 py-6 text-sm leading-relaxed"
                >
                  <div className="col-span-3 font-semibold text-carbon">
                    {row.criterion}
                  </div>
                  <div className="col-span-5 text-graphite">{row.catalog}</div>
                  <div className="col-span-4 text-graphite">{row.custom}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
