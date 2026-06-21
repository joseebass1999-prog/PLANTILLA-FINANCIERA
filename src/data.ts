/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ProblemCard, Benefit, Bonus, Testimonial, Transaction } from './types';

export const PROBLEMS: ProblemCard[] = [
  {
    id: 'p1',
    title: 'No sabes en qué se va tu dinero',
    description: 'Sientes que trabajas duro, pero para el día 15 de cada mes te preguntas con frustración: "¿A dónde se fue todo lo que gané?"',
    iconName: 'HelpCircle',
  },
  {
    id: 'p2',
    title: 'Ansiedad al revisar tu saldo',
    description: 'Evitas abrir la app del banco para no ver el saldo real. Prefieres vivir con los dedos cruzados esperando que la tarjeta no sea rechazada.',
    iconName: 'AlertTriangle',
  },
  {
    id: 'p3',
    title: 'Intentas ahorrar pero no puedes',
    description: 'Ahorras un poco a inicios de mes, pero a la tercera semana terminas sacando tu dinero de vuelta porque no te alcanza para los gastos.',
    iconName: 'TrendingDown',
  },
  {
    id: 'p4',
    title: 'Trabajas pero no avanzas',
    description: 'Ganas más que hace tres años, pero sigues en el mismo punto de estancamiento financiero, atrapado en la rueda de vivir al día.',
    iconName: 'Navigation',
  },
];

export const BENEFITS: Benefit[] = [
  {
    id: 'b1',
    title: 'Claridad total de tu dinero',
    description: 'Visualiza de inmediato cuánto tienes disponible hoy, cuánto debes separar para compromisos fijos y cuánto puedes gastar con total libertad y libre de culpas.',
    iconName: 'Eye',
    color: 'emerald',
  },
  {
    id: 'b2',
    title: 'Control sin esfuerzo',
    description: 'Diseñado bajo la regla de fricción mínima. Solo te tomará 3 minutos al día mantener tu registro al día para que no abandones al cabo de una semana.',
    iconName: 'Compass',
    color: 'emerald',
  },
  {
    id: 'b3',
    title: 'Cero estrés financiero',
    description: 'Al saber exactamente qué gastos vienen, puedes automatizar tus pagos y anticiparte a los imprevistos sin sentir que tu seguridad se desmorona.',
    iconName: 'Activity',
    color: 'emerald',
  },
  {
    id: 'b4',
    title: 'Decisiones inteligentes',
    description: 'Identifica de inmediato pérdidas imperceptibles (gastos vampiro) y desvíalos automáticamente hacia tus ahorros, planes o libertad real.',
    iconName: 'Icons',
    color: 'emerald',
  },
];

export const BONUSES: Bonus[] = [
  {
    id: 'bonus1',
    title: 'Guía de Deudas Acelerada',
    description: 'El plan maestro paso a paso para organizar, consolidar y extinguir tus deudas pendientes pagando hasta un 65% menos de intereses de forma legal.',
    value: 'Valorada en $19 USD',
    iconName: 'ShieldAlert',
  },
  {
    id: 'bonus2',
    title: 'El Método de Ahorro Automático',
    description: 'Cómo implementar la regla inviolable del "pre-ahorro" del 10% que se aparta por su cuenta antes de que puedas gastarlo, sin que lo eches en falta.',
    value: 'Valorada en $15 USD',
    iconName: 'Coins',
  },
  {
    id: 'bonus3',
    title: 'Plantilla de Finanzas para Proyectos',
    description: '¿Trabajas por tu cuenta o tienes un negocio digital? Un módulo excel limpio para registrar tus flujos de caja y separar tus finanzas personales de las del proyecto.',
    value: 'Valorada en $25 USD',
    iconName: 'Briefcase',
  },
  {
    id: 'bonus4',
    title: 'Mente Financiera en 21 Días',
    description: 'La guía práctica con disparadores de psicología económica para romper los patrones de gasto por ansiedad, aburrimiento o estatus social.',
    value: 'Valorada en $12 USD',
    iconName: 'Sparkles',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Carlos M.',
    role: 'Freelancer de Diseño',
    quote: 'Antes llegaba el 25 y no sabía en qué se me había esfumado mi sueldo. Esta plantilla me abrió los ojos desde la primera semana. Súper recomendada de verdad, vale cada centavo.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80',
    tag: 'ahora sé en qué gasto mi dinero',
  },
  {
    id: 't2',
    name: 'Laura G.',
    role: 'Asistente Administrativa',
    quote: 'He probado 20 aplicaciones móviles y todas me aburrían a los tres días por ser sumamente complejas. Esto es meter números y listo, tiene unos gráficos sencillos que mi abuela entendería sin líos.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80',
    tag: 'muy fácil de usar',
  },
  {
    id: 't3',
    name: 'Sofía R.',
    role: 'Doctora en Odontología',
    quote: 'Pagas $9 dólares una sola vez y te ahorras cientos en pastillas para la ansiedad de no saber dónde estás parada. Ver mi presupuesto mensual proyectado me devolvió la paz mental que no recordaba tener.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80',
    tag: 'me dio tranquilidad',
  },
  {
    id: 't4',
    name: 'Ignacio D.',
    role: 'Emprendedor de Comercio',
    quote: 'Por primera vez en 3 años logré guardar $150 dólares extras a fin de mes. Al ver visualmente en qué chorreaba mi dinero (sobre todo comidas fuera), fue facilísimo hacer recortes sin sufrir.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
    tag: '¡Ya logré ahorrar!',
  },
];

export const INITIAL_TRANSACTIONS: Transaction[] = [
  { id: '1', concept: 'Salario / Ingresos fijos', category: 'Ingresos', amount: 1500, type: 'income' },
  { id: '2', concept: 'Renta / Alquiler hogar', category: 'Vivienda', amount: 550, type: 'expense' },
  { id: '3', concept: 'Compra de Supermercado', category: 'Alimentación', amount: 200, type: 'expense' },
  { id: '4', concept: 'Suscripciones (Netflix, Spotify)', category: 'Servicios', amount: 35, type: 'expense' },
  { id: '5', concept: 'Salidas de fin de semana / Cenas', category: 'Ocio', amount: 180, type: 'expense' },
  { id: '6', concept: 'Gasolina / Transporte del mes', category: 'Transporte', amount: 95, type: 'expense' },
];
