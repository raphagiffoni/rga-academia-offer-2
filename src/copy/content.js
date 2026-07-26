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

export const OFFER_DEADLINE = '2026-08-15T23:59:00-03:00';
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
  legend: 'Oferta válida até 15 de agosto, 23h59.',
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
  kicker: 'Oferta · até 15 de agosto',
  headline: 'Torne-se um Membro Original da RGA-BH.',
  sub: 'Todos que se matriculam antes da inauguração são Membros Originais. Mas só quem fecha até 15 de agosto recebe o kimono pronto para vestir na aula inaugural.',
  benefits: [
    'Kimono RGA exclusivo (valor de R$700), pronto para vestir na aula inaugural',
    'Patch oficial de Membro Original, costurado no kimono',
    'Presença garantida no seminário de inauguração com Rayron Gracie (setembro)',
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
  urgencyBody: 'Depois disso, o kimono ainda vem, mas não a tempo da aula inaugural.',
};

export const seminar = {
  kicker: 'Seminário de inauguração · setembro',
  headline: 'Rayron Gracie no tatame da RGA-BH.',
  bullets: [
    '4x campeão mundial de Jiu-Jítsu',
    'Filho de Ryan Gracie',
    'Presença confirmada na inauguração da RGA Belo Horizonte',
  ],
  body: 'O seminário faz parte da oferta dos Membros Originais. Se você entrar até 15 de agosto, sua vaga já está garantida.',
  videoSrc: '/video-rayron.mp4', // TODO: subir MP4 quando disponível
  videoPoster: '/video-rayron-poster.jpg',
  ctaLabel: 'Quero estar no seminário',
};

export const faq = {
  kicker: 'FAQ',
  headline: 'Perguntas frequentes.',
  items: [
    {
      q: 'O que exatamente eu recebo ao me tornar Membro Original nesta oferta?',
      a: 'O plano anual (12x R$329 adulto parcelado / R$349 recorrente ou 12x R$299 kids parcelado / R$309 recorrente), um kimono RGA exclusivo avaliado em R$700 pronto para vestir na aula inaugural, um patch de Membro Original costurado no kimono, e presença garantida no seminário com Rayron Gracie em setembro.',
    },
    {
      q: 'Quando a academia abre?',
      a: 'Em meados de setembro de 2026 na Rua Paraíba 889, Savassi, Belo Horizonte. A data exata será anunciada em breve.',
    },
    {
      q: 'O que é o patch de Membro Original?',
      a: 'É um patch bordado oficial que vai costurado no seu kimono RGA. Ele identifica você como parte do grupo dos primeiros alunos da RGA-BH, e não voltará a ser distribuído.',
    },
    {
      q: 'E se eu me matricular depois de 15 de agosto?',
      a: 'Todos que se matriculam antes da inauguração são Membros Originais. Mas só quem fecha até 15 de agosto tem o kimono pronto para a aula inaugural. Nas ofertas seguintes, o kimono chega depois.',
    },
    {
      q: 'Como funciona o pagamento?',
      a: 'Duas opções pelo link do carrinho oficial: (1) parcelado em 12x no cartão de crédito (à vista), ou (2) recorrente mensal, com cobrança automática no cartão todo mês por 12 meses. Para dúvidas, fale no WhatsApp +55 31 97177-5617.',
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
      q: 'Como participo do seminário com o Rayron Gracie?',
      a: 'Ao pagar o plano anual até 15 de agosto você já garante sua presença. Detalhes de data, horário e formato do seminário serão enviados aos Membros Originais em agosto.',
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
  headline: 'Antes de 15 de agosto.',
  body: 'Ofertas de Membro Original vão continuar até a inauguração. Mas só quem fecha até 15 de agosto tem o kimono pronto para vestir na aula inaugural.',
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
