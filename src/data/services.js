import { Layout, Code2, Database } from 'lucide-react';

export const servicesData = [
  {
    number: '01',
    icon: Layout,
    title: 'Sites e landing pages',
    desc: 'Sites institucionais e páginas de conversão construídos do zero, com estrutura pensada para carregar rápido e aparecer no Google.',
    items: ['Site institucional', 'Landing page', 'Portal de catálogo', 'SEO técnico'],
  },
  {
    number: '02',
    icon: Code2,
    title: 'Desenvolvimento front-end',
    desc: 'Interfaces em React e Next.js, componentizadas e responsivas. O código fica organizado para quem for dar manutenção depois.',
    items: ['React e Next.js', 'Design responsivo', 'Animação e interação', 'Performance'],
  },
  {
    number: '03',
    icon: Database,
    title: 'CRMs e sistemas',
    desc: 'Painéis de gestão, dashboards e automações desenhados para a operação real da empresa, não para um fluxo genérico de template.',
    items: ['CRM sob medida', 'Dashboard analítico', 'Automação de processo', 'Integrações'],
  },
];
