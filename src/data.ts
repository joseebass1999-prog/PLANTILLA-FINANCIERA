import { Testimonial, Benefit, VideoTestimonial } from './types';

export const TOP_TESTIMONIALS: Testimonial[] = [
  {
    id: 'top1',
    name: 'Mariana V.',
    role: 'Coordinadora de Proyectos',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80',
    rating: 5,
    content: 'Llevaba años intentando planificar en cuadernos y aplicaciones que terminaban cobrándome $5 dólares mensuales por nada. Con este sistema de un solo pago de $9, por fin logré automatizar mi presupuesto familiar. Lo mejor es que mi esposo y yo podemos editarlo desde el celular en tiempo real.',
    badge: 'Fácil y familiar',
    impact: 'Presupuesto familiar'
  },
  {
    id: 'top2',
    name: 'Alejandro T.',
    role: 'Programador Backend',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
    rating: 5,
    content: 'Estaba escéptico porque soy bastante técnico y me gusta hacer mis propios sistemas, pero el módulo Bola de Nieve contra deudas me ahorró horas de diseño. En solo tres meses ya pagué una tarjeta de crédito por completo gracias a la ruta exacta de pagos que te calcula la hoja. Excelente compra.',
    badge: 'Técnico y efectivo',
    impact: 'Adiós deudas'
  }
];

export const BENEFITS: Benefit[] = [
  {
    id: 'b1',
    title: 'Automatización del Presupuesto 50/30/20',
    description: 'Ingresa tus ingresos y deja que las fórmulas automáticas distribuyan tus necesidades, deseos y metas de ahorro al instante.',
    iconName: 'Sparkles',
    metric: 'Ahorra 10 horas/mes'
  },
  {
    id: 'b2',
    title: 'Plan Bola de Nieve contra las Deudas',
    description: 'Visualiza con exactitud en qué mes estarás libre de deudas. Ordena automáticamente tus deudas de menor a mayor y calcula la fecha de liberación.',
    iconName: 'TrendingDown',
    metric: 'Hasta 40% más rápido'
  },
  {
    id: 'b3',
    title: 'Simulador de Fondo de Emergencias',
    description: 'Calcula cuántos meses de tranquilidad tienes asegurados y define un plan de aportaciones viables para construir tu red de seguridad.',
    iconName: 'ShieldCheck',
    metric: '100% Protegido'
  },
  {
    id: 'b4',
    title: 'Gráficos de Consumo y Categorías',
    description: 'Identifica visualmente en qué categorías estás despilfarrando. Los gráficos interactivos se colorean según la salud de tu cuenta.',
    iconName: 'PieChart',
    metric: 'Visual e intuitivo'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Carlos M.',
    role: 'Freelancer de Diseño',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80',
    rating: 5,
    content: 'Antes llegaba el 25 y no sabía en qué se me había esfumado mi sueldo. Esta plantilla me abrió los ojos desde la primera semana. Súper recomendada de verdad, vale cada centavo.',
    badge: 'ahora sé en qué gasto mi dinero',
    impact: 'Claridad total'
  },
  {
    id: 't2',
    name: 'Laura G.',
    role: 'Asistente Administrativa',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80',
    rating: 5,
    content: 'He probado 20 aplicaciones móviles y todas me aburrían a los tres días por ser sumamente complejas. Esto es meter números y listo, tiene unos gráficos sencillos que mi abuela entendería sin líos.',
    badge: 'muy fácil de usar',
    impact: 'Sin complicaciones'
  },
  {
    id: 't3',
    name: 'Sofía R.',
    role: 'Doctora en Odontología',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80',
    rating: 5,
    content: 'Pagas $9 dólares una sola vez y te ahorras cientos en pastillas para la ansiedad de no saber dónde estás parada. Ver mi presupuesto mensual proyectado me devolvió la paz mental que no recordaba tener.',
    badge: 'me dio tranquilidad',
    impact: 'Paz mental'
  },
  {
    id: 't4',
    name: 'Ignacio D.',
    role: 'Emprendedor de Comercio',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
    rating: 5,
    content: 'Por primera vez en 3 años logré guardar $150 dólares extras a fin de mes. Al ver visualmente en qué chorreaba mi dinero (sobre todo comidas fuera), fue facilísimo hacer recortes sin sufrir.',
    badge: '¡Ya logré ahorrar!',
    impact: 'Ahorro Real'
  }
];

export const VIDEOS: VideoTestimonial[] = [
  {
    id: 'v1',
    title: 'Cómo funciona',
    duration: '3:45',
    thumbnailUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600&h=340',
    videoUrl: 'https://jumpshare.com/embed/mVRcTuwZq3455BQAVkMS',
    category: 'TODAS LAS FUNCIONES',
    author: 'Dinero en Orden',
    description: 'Demostración interactiva de la Pestaña Principal (Presupuesto consolidado automático)'
  },
  {
    id: 'v2',
    title: 'Ejemplo Real',
    duration: '4:12',
    thumbnailUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600&h=340',
    videoUrl: 'https://jumpshare.com/embed/6d8vw2niidTRS4KKo7mF',
    category: 'Así funciona la plantilla',
    author: 'Casos Prácticos',
    description: 'Gastos imprevistos e impacto en Tablero de Control táctico en vivo'
  }
];
