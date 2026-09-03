import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Section from '../layout/Section';
import Reveal from '../ui/Reveal';
import Media from '../ui/Media';
import { heroSources } from '../../lib/media';

const BADGES = ['Front-end', 'Interface', 'Responsivo', 'Performance'];

export default function About() {
  return (
    <Section id="sobre">
      <div className="grid grid-cols-1 gap-y-14 lg:grid-cols-12 lg:gap-x-12">
        {/* Coluna visual */}
        <div className="lg:col-span-4">
          <Media
            sources={heroSources}
            alt="Retrato de Lucas Vandes"
            ratio="4/5"
            sizes="(max-width: 1023px) 70vw, 30vw"
            className="max-w-[320px] lg:max-w-none"
            imgClassName="object-[center_20%]"
          />
        </div>

        {/* Coluna de texto */}
        <div className="lg:col-span-7 lg:col-start-6">
          <Reveal className="mb-8 flex items-center gap-3 text-ink-low">
            <span className="label">02</span>
            <span aria-hidden="true" className="h-px w-8 bg-hair-strong" />
            <span className="label">Sobre</span>
          </Reveal>

          <Reveal as="h2" className="text-section text-balance">
            O cliente não desiste do seu serviço. Ele desiste de esperar.
          </Reveal>

          <Reveal as="p" className="mt-8 text-[17px] leading-[1.75] text-ink-mid">
            Em empresa pequena, a venda acontece na conversa e na primeira impressão.
            Quando o site não convence ou a resposta demora, o cliente resolve em outro
            lugar, e você nunca fica sabendo que ele existiu.
          </Reveal>

          <Reveal as="p" className="mt-5 text-[17px] leading-[1.75] text-ink-mid">
            Trabalho sozinho e direto com quem contrata: você explica o problema para
            quem vai escrever o código. Cuido da interface, da performance e do sistema
            que sustenta a operação, do desenho ao deploy.
          </Reveal>

          <Reveal className="mt-9 flex flex-wrap gap-2">
            {BADGES.map((badge) => (
              <span
                key={badge}
                className="rounded-btn border border-hair px-3.5 py-2 text-[12.5px] text-ink-mid transition-colors duration-300 hover:border-hair-strong hover:text-ink-hi"
              >
                {badge}
              </span>
            ))}
          </Reveal>

          <Reveal className="mt-10">
            <a
              href="#projetos"
              className="group inline-flex items-center gap-2 text-[15px] text-ink-hi"
            >
              Conhecer meu trabalho
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
