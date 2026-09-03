import React from 'react';
import Section from '../layout/Section';
import SectionIntro from '../ui/SectionIntro';
import Reveal from '../ui/Reveal';
import Surface from '../ui/Surface';
import { servicesData } from '../../data/services';
import { containerTight, fadeUp } from '../../lib/motion';

export default function Services() {
  return (
    <Section id="servicos" className="bg-bg-alt">
      <SectionIntro
        title="O que eu desenvolvo"
        lead="Site, sistema e automação construídos pela mesma pessoa. Você explica o problema para quem vai escrever o código."
      />

      <Reveal variants={containerTight} className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
        {servicesData.map((service) => {
          const Icon = service.icon;
          return (
            <Reveal
              key={service.number}
              as="article"
              variants={fadeUp}
              className="h-full"
            >
              <Surface interactive className="group flex h-full flex-col p-8 sm:p-9">
                <div className="mb-9 flex items-center justify-between">
                  <Icon
                    className="h-[22px] w-[22px] text-ink-mid transition-all duration-500 ease-out group-hover:-translate-y-0.5 group-hover:text-ink-hi"
                    aria-hidden="true"
                  />
                  <span className="label text-ink-low">{service.number}</span>
                </div>

                <h3 className="text-[19px] font-normal leading-snug text-ink-hi">{service.title}</h3>
                <p className="mt-4 flex-1 text-[15px] leading-[1.7] text-ink-mid">{service.desc}</p>

                <ul className="mt-8 flex flex-col gap-2.5 border-t border-hair pt-6">
                  {service.items.map((item) => (
                    <li key={item} className="text-[13.5px] text-ink-mid">
                      {item}
                    </li>
                  ))}
                </ul>
              </Surface>
            </Reveal>
          );
        })}
      </Reveal>
    </Section>
  );
}
