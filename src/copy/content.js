/**
 * Copy centralizada da landing page.
 * Fonte: docs/superpowers/specs/2026-07-10-rga-landing-page-design.md
 *
 * Diretrizes fixas de copy:
 *  - Nunca comparar RGA-BH negativamente com outras academias
 *  - Linhagem começa em Renzo, não em Carlos/Hélio
 *  - Primeiros alunos se chamam "Membros Originais"
 *  - Evitar em-dashes (—) na copy visível
 */

export const OFFER_DEADLINE = '2026-09-12T19:00:00-03:00';
export const CART_URL_PARCELADO  = 'https://evo-totem.w12app.com.br/evo/9178/site/AAeG4kxWhjYHyxNvFhiKIg%5BEQUAL%5D%5BEQUAL%5D';
export const CART_URL_RECORRENTE = 'https://evo-totem.w12app.com.br/evo/9178/site/%5BBAR%5DXma0K9a9D%5BBAR%5D4o848NRz5og%5BEQUAL%5D%5BEQUAL%5D';
// Alias mantido pra compatibilidade com módulos antigos que ainda usem CART_URL.
export const CART_URL = CART_URL_PARCELADO;
export const WHATSAPP_NUMBER = '5531971775617';
export const WHATSAPP_MESSAGE = 'Olá, quero saber mais sobre a RGA-BH.';
export const INSTAGRAM_URL = 'https://www.instagram.com/renzograciebh/';
export const ADDRESS = 'Rua Paraíba, 889 · Savassi · Belo Horizonte · MG';
export const GOOGLE_MAPS = 'https://www.google.com/maps/search/?api=1&query=Rua+Para%C3%ADba+889+Savassi+Belo+Horizonte';

export const nav = {
  links: [
    { label: 'Academia', href: '#casa' },
    { label: 'Aulas', href: '#aulas' },
    { label: 'Oferta', href: '#oferta' },
    { label: 'FAQ', href: '#faq' },
  ],
  ctaLabel: 'Ser Membro Original',
};

export const hero = {
  kicker: 'Linhagem original · Savassi',
  headline: 'A academia do Renzo Gracie chega a Belo Horizonte.',
  sub: 'Inauguração em setembro na Savassi, sob o olhar do Renzo. Faixa preta responsável: Raphael Coelho.',
  ctaLabel: 'Ser um Membro Original',
  legend: 'Últimas matrículas até a inauguração · 12 de setembro.',
};

export const videoExplainer = {
  kicker: '2 minutos',
  headline: 'O único plano com kimono pronto para vestir na aula inaugural.',
  caption: 'A academia em reforma, o que você recebe como Membro Original, e por que a data limite é 15 de agosto.',
  youtubeId: 'ARthr51PjPM',
  posterCaption: { desktop: 'Clique para o play', mobile: 'Toque para o play' },
};

export const lineage = {
  kicker: 'Linhagem',
  headline: 'Sob o olhar do Renzo.',
  body: [
    'Em 1996, Renzo Gracie fundou a Renzo Gracie Academy em Nova York. Hoje, a rede é referência mundial em Jiu-Jítsu.',
    'A RGA Belo Horizonte é o novo capítulo dessa história, sob supervisão direta do Renzo.',
  ],
  credentials: {
    kicker: 'Títulos do Renzo',
    headline: 'Uma carreira respeitada dentro e fora do tatame.',
    groups: [
      {
        label: 'Jiu-Jítsu',
        items: [
          'Campeão Mundial IBJJF · Faixa Preta 1996',
          'Campeão Pan-Americano',
          'Campeão Brasileiro e Sul-Americano',
          'Múltiplos títulos nacionais e internacionais nos anos 90',
        ],
      },
      {
        label: 'ADCC · sem kimono',
        items: [
          'Vice-campeão ADCC · 1998',
          'Medalha de bronze ADCC · 2000',
        ],
        note: 'O ADCC é o mundial mais prestigiado do grappling sem kimono.',
      },
    ],
  },
  milestones: [
    { year: '1996', body: 'Renzo Gracie funda a Renzo Gracie Academy em Nova York.' },
    { year: 'Hoje', body: 'Rede mundial de academias oficiais Renzo Gracie.' },
    { year: 'Setembro', body: 'RGA Belo Horizonte abre as portas na Savassi.' },
  ],
  imageAlt: 'Renzo Gracie erguendo cinturão de campeão',
  ctaLabel: 'Conhecer a academia',
};

export const house = {
  kicker: 'Rua Paraíba 889 · Savassi',
  headline: 'A casa foi pensada como uma escola de luxo.',
  body: 'Concreto, madeira, iluminação de galeria. Um octógono, tatames de padrão internacional, banheiros de spa. Cada canto respeita o padrão RGA New York, adaptado para o clima e a cultura de Belo Horizonte.',
  tiles: [
    { id: 'fachada', src: '/images/fachada.jpg', caption: 'Fachada iluminada · Rua Paraíba 889', alt: 'Fachada da RGA-BH iluminada à noite' },
    { id: 'recepcao', src: '/images/recepcao.jpg', caption: 'Recepção e área de espera', alt: 'Recepção da academia com mobiliário escuro e mural do Renzo' },
    { id: 'octogono', src: '/images/octogono.jpg', caption: 'Tatame principal com octógono', alt: 'Tatame com octógono ao fundo' },
    { id: 'loja', src: '/images/loja.jpg', caption: 'Loja RGA · kimonos e camisetas oficiais', alt: 'Loja com kimonos azuis e camisetas oficiais' },
    { id: 'neon', src: '/images/neon.jpg', caption: 'Interior · Mais que um time', alt: 'Interior com painel azul iluminado' },
    { id: 'banheiro', src: '/images/banheiro.jpg', caption: 'Banheiros pensados como spa', alt: 'Banheiro com acabamento premium' },
    { id: 'reuniao', src: '/images/reuniao.jpg', caption: 'Sala de reunião privativa', alt: 'Sala de reunião com mesa de mármore' },
  ],
  ctaLabel: 'Ver aulas',
};

export const professor = {
  kicker: 'Faixa preta responsável',
  headline: 'Raphael Coelho.',
  bio: [
    'Há mais de 15 anos no Jiu-Jítsu. Faixa preta, professor de Jiu-Jítsu, Boxe e MMA. Sócio da Renzo Gracie Team Belo Horizonte.',
    'Metodologia estruturada e exigente, com foco na evolução técnica e na formação de pessoas. Já ministrou aulas em academias, empresas e batalhões das forças de segurança pública.',
  ],
  highlights: [
    '15+ anos no Jiu-Jítsu',
    'Professor de Jiu-Jítsu, Boxe e MMA',
    'Sócio Renzo Gracie Team BH',
  ],
  photoAlt: 'Raphael Coelho, faixa preta responsável pela RGA Belo Horizonte',
};

export const classes = {
  kicker: 'Aulas',
  headline: 'Jiu-Jítsu para toda a família.',
  cards: [
    { id: 'adulto', title: 'Adulto', desc: 'Aulas técnicas, drills e sparring. Todos os níveis, do iniciante ao competidor.' },
    { id: 'feminino', title: 'Feminino', desc: 'Aula exclusiva para mulheres, ambiente respeitoso e progressão no seu ritmo.' },
    { id: 'kids', title: 'Kids', desc: 'Turmas por faixa etária, foco em disciplina, respeito e diversão. Metodologia RGA.' },
    { id: 'sabado', title: 'Treino livre · sábados', desc: 'Sábado é dia de rolar. Espaço aberto para praticar o que aprendeu na semana.' },
    { id: 'octogono', title: 'Octógono', desc: 'Estrutura completa para MMA e defesa pessoal. Aulas específicas em breve.' },
  ],
  note: 'Grade completa de horários será divulgada em agosto. Fale no WhatsApp para saber prioridades da sua modalidade.',
  ctaLabel: 'Falar no WhatsApp',
};

export const offer = {
  kicker: 'Oferta · até a inauguração',
  headline: 'Torne-se um Membro Original da RGA-BH.',
  sub: 'Todos que se matriculam até a inauguração (12 de setembro) são Membros Originais e recebem a camisa de passeio exclusiva e o patch oficial.',
  benefits: [
    'Camisa de passeio RGA-BH exclusiva de Membro Original',
    'Patch oficial de Membro Original',
    'Prioridade em eventos, workshops e experiências futuras da academia',
  ],
  plans: [
    {
      id: 'adulto-parcelado',
      label: 'Adulto · parcelado',
      name: 'Plano Adulto',
      price: '12x R$ 329',
      note: 'Parcelado no cartão de crédito em 12x, à vista.',
      ctaLabel: 'Seja um Membro Original',
      cartType: 'parcelado',
    },
    {
      id: 'adulto-recorrente',
      label: 'Adulto · recorrente',
      name: 'Plano Adulto',
      price: 'R$ 349/mês',
      note: 'Cobrado mensalmente no cartão por 12 meses. Compromisso de 12 meses (multa contratual em caso de cancelamento antes disso).',
      ctaLabel: 'Seja um Membro Original',
      cartType: 'recorrente',
    },
    {
      id: 'kids-parcelado',
      label: 'Kids · parcelado',
      name: 'Plano Kids',
      price: '12x R$ 299',
      note: 'Parcelado no cartão de crédito em 12x, à vista.',
      ctaLabel: 'Seja um Membro Original',
      cartType: 'parcelado',
    },
    {
      id: 'kids-recorrente',
      label: 'Kids · recorrente',
      name: 'Plano Kids',
      price: 'R$ 309/mês',
      note: 'Cobrado mensalmente no cartão por 12 meses. Compromisso de 12 meses (multa contratual em caso de cancelamento antes disso).',
      ctaLabel: 'Seja um Membro Original',
      cartType: 'recorrente',
    },
  ],
  urgencyBody: 'Depois da inauguração, as matrículas continuam mas sem a camisa e o patch exclusivos de Membro Original.',
};

export const seminar = {
  kicker: 'Inauguração · 12 de setembro',
  headline: 'Rayron Gracie no tatame da RGA-BH.',
  bullets: [
    '4x campeão mundial de Jiu-Jítsu',
    'Filho de Ryan Gracie',
    'Presença confirmada na inauguração da RGA Belo Horizonte',
  ],
  body: 'O Rayron estará no tatame da RGA-BH na inauguração, dia 12 de setembro. Um marco para a Renzo Gracie em Belo Horizonte.',
  videoSrc: '/video-rayron.mp4',
  videoPoster: '/video-rayron-poster.jpg',
  ctaLabel: 'Seja um Membro Original',
};

export const faq = {
  kicker: 'FAQ',
  headline: 'Perguntas frequentes.',
  items: [
    {
      q: 'O que exatamente eu recebo ao me tornar Membro Original?',
      a: 'O plano anual (12x R$329 adulto parcelado / R$349 recorrente ou 12x R$299 kids parcelado / R$309 recorrente), uma camisa de passeio RGA-BH exclusiva e o patch oficial de Membro Original.',
    },
    {
      q: 'Quando a academia abre?',
      a: '12 de setembro de 2026, na Rua Paraíba 889, Savassi, Belo Horizonte.',
    },
    {
      q: 'O que é o patch de Membro Original?',
      a: 'É um patch bordado oficial e exclusivo dos primeiros alunos da RGA-BH. Identifica você como Membro Original da academia e não voltará a ser distribuído depois da inauguração.',
    },
    {
      q: 'E se eu me matricular depois da inauguração?',
      a: 'Só quem se matricula até 12 de setembro (dia da inauguração) é Membro Original e recebe a camisa exclusiva e o patch. Matrículas depois disso continuam nos planos normais, mas sem os itens exclusivos.',
    },
    {
      q: 'Como funciona o pagamento?',
      a: 'Duas opções pelo link do carrinho oficial: (1) parcelado em 12x no cartão de crédito (à vista), ou (2) recorrente mensal, com cobrança automática no cartão todo mês por 12 meses. Para dúvidas, fale no WhatsApp +55 31 97177-5617.',
    },
    {
      q: 'Qual a diferença entre o plano anual e o anual recorrente?',
      a: 'Anual (parcelado): 12x R$329 (adulto) ou 12x R$299 (kids). Valor total é fechado no cartão de crédito em 12 parcelas fixas. Como é à vista, as 12 parcelas comprometem o limite do cartão de uma vez só. Anual recorrente: R$349/mês (adulto) ou R$309/mês (kids), com cobrança automática todo mês por 12 meses. Não afeta o limite (só consome o valor do mês). Tem compromisso de 12 meses com multa contratual se cancelar antes. Escolha parcelado se prefere resolver de uma vez ou tem limite disponível; recorrente se quer preservar limite do cartão.',
    },
    {
      q: 'Como funciona o cancelamento do plano recorrente?',
      a: 'O plano recorrente tem compromisso de 12 meses. Cancelamento antes do 12º mês tem multa contratual proporcional ao tempo restante do plano. Detalhes da multa ficam explicados no contrato no ato da matrícula, e você pode tirar dúvidas no WhatsApp antes de fechar.',
    },
    {
      q: 'O plano recorrente afeta o limite do meu cartão?',
      a: 'Não. No recorrente, seu cartão é cobrado mensalmente apenas o valor do plano (R$349 adulto ou R$309 kids), sem travar limite. Diferente do parcelado em 12x, que compromete o limite total das 12 parcelas de uma vez no momento da compra.',
    },
    {
      q: 'Como funciona a inauguração?',
      a: 'Dia 12 de setembro, na Rua Paraíba 889 (Savassi). O Rayron Gracie estará no tatame como um marco de abertura da RGA-BH. Alunos matriculados recebem os detalhes de programação por e-mail.',
    },
    {
      q: 'Vocês têm aulas para mulheres?',
      a: 'Sim. Além das aulas mistas, a RGA-BH terá turmas específicas femininas, com ambiente e progressão pensados para o público feminino.',
    },
    {
      q: 'Meus filhos podem treinar?',
      a: 'Sim. Temos plano Kids (12x R$299) com turmas divididas por faixa etária, usando a metodologia RGA de disciplina, respeito e evolução técnica.',
    },
    {
      q: 'Já tenho experiência de BJJ. Posso migrar minha graduação para a RGA?',
      a: 'Sim. Traga sua faixa e o histórico da sua graduação. O Raphael Coelho avalia e mantém a graduação já conquistada.',
    },
    {
      q: 'Nunca treinei Jiu-Jítsu. Posso começar?',
      a: 'Sim. Todas as turmas têm níveis de iniciante. Você começa do zero, com professor faixa preta e ambiente respeitoso.',
    },
    {
      q: 'Vocês vão ter treino livre? Octógono?',
      a: 'Sim para os dois. Treino livre garantido aos sábados. Octógono instalado para MMA e defesa pessoal.',
    },
    {
      q: 'Onde fica a academia?',
      a: 'Rua Paraíba 889, Savassi, Belo Horizonte. Estacionamento e regras de conveniência serão detalhados no e-mail de boas-vindas.',
    },
    {
      q: 'Posso conhecer a academia antes de comprar?',
      a: 'A academia ainda está em obras. Você pode ver as renders na seção "A casa" acima e assistir ao vídeo explicativo. Para agendar uma visita quando a obra permitir, fale no WhatsApp.',
    },
    {
      q: 'Estou em dúvida. Como falo com alguém?',
      a: 'WhatsApp direto: +55 31 97177-5617. Respondemos em horário comercial.',
    },
  ],
};

export const finalCta = {
  headline: 'Até a inauguração.',
  body: 'Depois de 12 de setembro, as matrículas continuam mas sem a camisa e o patch exclusivos de Membro Original.',
  ctaLabel: 'Seja um Membro Original',
};

export const footer = {
  brand: 'Renzo Gracie Academy · Belo Horizonte',
  address: ADDRESS,
  columns: {
    contact: [
      { label: 'Instagram @renzograciebh', href: INSTAGRAM_URL },
      { label: 'WhatsApp +55 31 97177-5617', href: buildWhatsAppLink() },
      { label: 'Google Maps', href: GOOGLE_MAPS },
    ],
    navigate: [
      { label: 'Academia', href: '#casa' },
      { label: 'Aulas', href: '#aulas' },
      { label: 'Oferta', href: '#oferta' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  legal: '© 2026 Renzo Gracie Academy Belo Horizonte. Todos os direitos reservados.',
};

export function buildWhatsAppLink(message = WHATSAPP_MESSAGE) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}
