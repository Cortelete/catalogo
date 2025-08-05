import { Procedure } from '../../types';

export const hairProcedures: Procedure[] = [
  {
    id: 'corte-feminino',
    name: 'Corte Feminino',
    description: 'Corte personalizado para realçar a beleza dos seus fios, com lavagem e secagem inclusas.',
    price: 'R$ 70,00',
    details: ['Inclui lavagem especial e secagem modelada', 'Consultoria de visagismo', 'Finalização com produtos premium'],
    images: ['/data/cabelos/corte/CF1.png', '/data/cabelos/corte/CF2.png', '/data/cabelos/corte/CF3.png'],
  },
  {
    id: 'escova-cabelo',
    name: 'Escova',
    description: 'Escova modeladora para todos os tipos de cabelo, garantindo brilho, maciez e um acabamento impecável.',
    price: 'A partir de R$ 60,00',
    details: ['Preço varia com o comprimento', 'Utilização de protetor térmico', 'Finalização com óleo reparador'],
    images: ['/data/cabelos/escova/E1.png', '/data/cabelos/escova/E2.png', '/data/cabelos/escova/E3.png'],
  },
  {
    id: 'mechas-morena-iluminada',
    name: 'Mechas - Morena Iluminada',
    description: 'Técnica de mechas que ilumina sutilmente os cabelos escuros, trazendo dimensão e um brilho natural.',
    price: 'A partir de R$ 350,00',
    details: ['Técnica personalizada', 'Inclui tratamento pós-química', 'Ideal para um visual sofisticado e natural'],
    images: ['/data/cabelos/mechas/MI1.png', '/data/cabelos/mechas/MI2.png', '/data/cabelos/mechas/MI3.png'],
  },
];
