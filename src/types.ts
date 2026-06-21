/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Transaction {
  id: string;
  concept: string;
  category: string;
  amount: number;
  type: 'income' | 'expense';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  avatar: string;
  tag: string;
}

export interface Bonus {
  id: string;
  title: string;
  description: string;
  value: string;
  iconName: string;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  iconName: string;
  color: string;
}

export interface ProblemCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
}
