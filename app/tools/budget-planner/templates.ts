import type { CategoryType } from './store';

export interface TemplateCategoryDef {
  name: Record<string, string>;
  type: CategoryType;
  pct: number; // fraction of income, e.g. 0.25 = 25%
}

export interface BudgetTemplate {
  id: string;
  emoji: string;
  name: Record<string, string>;
  desc: Record<string, string>;
  method: string; // e.g. "50 / 30 / 20"
  cats: TemplateCategoryDef[];
}

export const BUDGET_TEMPLATES: BudgetTemplate[] = [
  {
    id: 'single',
    emoji: '🧑',
    name: {
      en: 'Single / Fresh Graduate',
      id: 'Single / Fresh Graduate',
      de: 'Single / Berufseinsteiger',
      es: 'Soltero / Recién Graduado',
      pt: 'Solteiro / Recém-Formado',
      fr: 'Célibataire / Jeune Actif',
      it: 'Single / Neolaureato',
    },
    desc: {
      en: 'Aggressive savings, low obligations. Maximize growth.',
      id: 'Tabungan agresif, cicilan minimal. Maksimalkan pertumbuhan.',
      de: 'Aggressives Sparen, wenig Verpflichtungen.',
      es: 'Ahorro agresivo, pocos compromisos.',
      pt: 'Poupança agressiva, poucas obrigações.',
      fr: "Épargne agressive, peu d'obligations.",
      it: 'Risparmio aggressivo, pochi obblighi.',
    },
    method: '50 / 30 / 20',
    cats: [
      { name: { en: 'Housing / Rent', id: 'Sewa / Kost', de: 'Miete', es: 'Alquiler', pt: 'Aluguel', fr: 'Loyer', it: 'Affitto' }, type: 'needs', pct: 0.25 },
      { name: { en: 'Food & Drinks', id: 'Makan & Minum', de: 'Essen & Trinken', es: 'Comida & Bebidas', pt: 'Alimentação', fr: 'Alimentation', it: 'Cibo & Bevande' }, type: 'needs', pct: 0.15 },
      { name: { en: 'Transportation', id: 'Transportasi', de: 'Transport', es: 'Transporte', pt: 'Transporte', fr: 'Transport', it: 'Trasporti' }, type: 'needs', pct: 0.07 },
      { name: { en: 'Monthly Groceries', id: 'Belanja Bulanan', de: 'Einkauf', es: 'Compras Mensuales', pt: 'Compras Mensais', fr: 'Courses', it: 'Spesa Mensile' }, type: 'needs', pct: 0.03 },
      { name: { en: 'Entertainment', id: 'Hiburan & Lifestyle', de: 'Unterhaltung', es: 'Entretenimiento', pt: 'Entretenimento', fr: 'Loisirs', it: 'Intrattenimento' }, type: 'wants', pct: 0.15 },
      { name: { en: 'Hobbies', id: 'Hobi', de: 'Hobbys', es: 'Aficiones', pt: 'Hobbies', fr: 'Loisirs Créatifs', it: 'Hobby' }, type: 'wants', pct: 0.10 },
      { name: { en: 'Travel', id: 'Liburan', de: 'Reisen', es: 'Viajes', pt: 'Viagens', fr: 'Voyages', it: 'Viaggi' }, type: 'wants', pct: 0.05 },
      { name: { en: 'Emergency Fund', id: 'Dana Darurat', de: 'Notfonds', es: 'Fondo de Emergencia', pt: 'Reserva de Emergência', fr: "Fonds d'Urgence", it: 'Fondo Emergenze' }, type: 'savings', pct: 0.10 },
      { name: { en: 'Investment', id: 'Investasi', de: 'Investition', es: 'Inversión', pt: 'Investimento', fr: 'Investissement', it: 'Investimento' }, type: 'savings', pct: 0.05 },
      { name: { en: 'Savings', id: 'Tabungan', de: 'Ersparnisse', es: 'Ahorro', pt: 'Poupança', fr: 'Épargne', it: 'Risparmio' }, type: 'savings', pct: 0.05 },
    ],
  },
  {
    id: 'couple',
    emoji: '👫',
    name: {
      en: 'Couple (No Children)',
      id: 'Pasangan (Belum Beranak)',
      de: 'Paar (Ohne Kinder)',
      es: 'Pareja (Sin Hijos)',
      pt: 'Casal (Sem Filhos)',
      fr: 'Couple (Sans Enfants)',
      it: 'Coppia (Senza Figli)',
    },
    desc: {
      en: 'Balanced lifestyle + saving for house & future.',
      id: 'Gaya hidup seimbang + tabungan untuk rumah & masa depan.',
      de: 'Ausgeglichener Lebensstil + Sparen für Haus & Zukunft.',
      es: 'Estilo equilibrado + ahorro para casa y futuro.',
      pt: 'Vida equilibrada + poupança para casa e futuro.',
      fr: "Style de vie équilibré + épargne pour l'avenir.",
      it: 'Stile equilibrato + risparmio per casa e futuro.',
    },
    method: '50 / 30 / 20',
    cats: [
      { name: { en: 'Mortgage / Rent', id: 'Cicilan / Sewa', de: 'Hypothek / Miete', es: 'Hipoteca / Alquiler', pt: 'Financiamento / Aluguel', fr: 'Hypothèque / Loyer', it: 'Mutuo / Affitto' }, type: 'needs', pct: 0.25 },
      { name: { en: 'Food & Drinks', id: 'Makan & Minum', de: 'Essen & Trinken', es: 'Comida & Bebidas', pt: 'Alimentação', fr: 'Alimentation', it: 'Cibo & Bevande' }, type: 'needs', pct: 0.10 },
      { name: { en: 'Transportation', id: 'Transportasi', de: 'Transport', es: 'Transporte', pt: 'Transporte', fr: 'Transport', it: 'Trasporti' }, type: 'needs', pct: 0.08 },
      { name: { en: 'Monthly Groceries', id: 'Belanja Bulanan', de: 'Einkauf', es: 'Compras Mensuales', pt: 'Compras Mensais', fr: 'Courses', it: 'Spesa Mensile' }, type: 'needs', pct: 0.07 },
      { name: { en: 'Entertainment Together', id: 'Hiburan Bersama', de: 'Gemeinsame Unterhaltung', es: 'Entretenimiento Juntos', pt: 'Lazer a Dois', fr: 'Loisirs Communs', it: 'Svago di Coppia' }, type: 'wants', pct: 0.10 },
      { name: { en: 'Travel', id: 'Liburan', de: 'Reisen', es: 'Viajes', pt: 'Viagens', fr: 'Voyages', it: 'Viaggi' }, type: 'wants', pct: 0.10 },
      { name: { en: 'Hobbies', id: 'Hobi', de: 'Hobbys', es: 'Aficiones', pt: 'Hobbies', fr: 'Loisirs Créatifs', it: 'Hobby' }, type: 'wants', pct: 0.10 },
      { name: { en: 'Emergency Fund', id: 'Dana Darurat', de: 'Notfonds', es: 'Fondo de Emergencia', pt: 'Reserva de Emergência', fr: "Fonds d'Urgence", it: 'Fondo Emergenze' }, type: 'savings', pct: 0.10 },
      { name: { en: 'House Down Payment', id: 'Tabungan Rumah', de: 'Hauskauf-Rücklage', es: 'Ahorro para Casa', pt: 'Poupança para Casa', fr: 'Apport Immobilier', it: 'Acconto Casa' }, type: 'savings', pct: 0.05 },
      { name: { en: 'Investment', id: 'Investasi', de: 'Investition', es: 'Inversión', pt: 'Investimento', fr: 'Investissement', it: 'Investimento' }, type: 'savings', pct: 0.05 },
    ],
  },
  {
    id: 'young-family',
    emoji: '👨‍👩‍👧',
    name: {
      en: 'Young Family (1-2 Kids)',
      id: 'Keluarga Muda (Anak 1-2)',
      de: 'Junge Familie (1-2 Kinder)',
      es: 'Familia Joven (1-2 Hijos)',
      pt: 'Família Jovem (1-2 Filhos)',
      fr: 'Jeune Famille (1-2 Enfants)',
      it: 'Giovane Famiglia (1-2 Figli)',
    },
    desc: {
      en: 'Children & education first. Leaner wants.',
      id: 'Pendidikan anak didahulukan. Keinginan lebih ramping.',
      de: 'Kinder & Bildung zuerst. Weniger Wünsche.',
      es: 'Educación de hijos primero. Menos deseos.',
      pt: 'Filhos e educação em primeiro. Menos desejos.',
      fr: "Enfants et éducation d'abord. Moins de désirs.",
      it: 'Figli e istruzione prima. Meno desideri.',
    },
    method: '60 / 20 / 20',
    cats: [
      { name: { en: 'Mortgage / Rent', id: 'Cicilan Rumah', de: 'Hypothek / Miete', es: 'Hipoteca / Alquiler', pt: 'Financiamento / Aluguel', fr: 'Hypothèque / Loyer', it: 'Mutuo / Affitto' }, type: 'needs', pct: 0.25 },
      { name: { en: 'Food & Drinks', id: 'Makan & Minum', de: 'Essen & Trinken', es: 'Comida & Bebidas', pt: 'Alimentação', fr: 'Alimentation', it: 'Cibo & Bevande' }, type: 'needs', pct: 0.15 },
      { name: { en: 'Children Education', id: 'Pendidikan Anak', de: 'Kinderbildung', es: 'Educación Hijos', pt: 'Educação dos Filhos', fr: 'Éducation Enfants', it: 'Educazione Figli' }, type: 'needs', pct: 0.10 },
      { name: { en: 'Transportation', id: 'Transportasi', de: 'Transport', es: 'Transporte', pt: 'Transporte', fr: 'Transport', it: 'Trasporti' }, type: 'needs', pct: 0.05 },
      { name: { en: 'Monthly Groceries', id: 'Belanja Bulanan', de: 'Einkauf', es: 'Compras Mensuales', pt: 'Compras Mensais', fr: 'Courses', it: 'Spesa Mensile' }, type: 'needs', pct: 0.05 },
      { name: { en: 'Family Entertainment', id: 'Hiburan Keluarga', de: 'Familienunterhaltung', es: 'Entretenimiento Familiar', pt: 'Lazer em Família', fr: 'Loisirs Famille', it: 'Svago Familiare' }, type: 'wants', pct: 0.10 },
      { name: { en: 'Travel', id: 'Liburan', de: 'Reisen', es: 'Viajes', pt: 'Viagens', fr: 'Voyages', it: 'Viaggi' }, type: 'wants', pct: 0.05 },
      { name: { en: 'Hobbies', id: 'Hobi', de: 'Hobbys', es: 'Aficiones', pt: 'Hobbies', fr: 'Loisirs Créatifs', it: 'Hobby' }, type: 'wants', pct: 0.05 },
      { name: { en: 'Emergency Fund', id: 'Dana Darurat', de: 'Notfonds', es: 'Fondo de Emergencia', pt: 'Reserva de Emergência', fr: "Fonds d'Urgence", it: 'Fondo Emergenze' }, type: 'savings', pct: 0.10 },
      { name: { en: 'Investment', id: 'Investasi', de: 'Investition', es: 'Inversión', pt: 'Investimento', fr: 'Investissement', it: 'Investimento' }, type: 'savings', pct: 0.05 },
      { name: { en: 'Education Fund', id: 'Dana Pendidikan', de: 'Bildungsfonds', es: 'Fondo Educativo', pt: 'Fundo Educacional', fr: "Fonds d'Éducation", it: 'Fondo Istruzione' }, type: 'savings', pct: 0.05 },
    ],
  },
  {
    id: 'sandwich',
    emoji: '🍞',
    name: {
      en: 'Sandwich Generation',
      id: 'Generasi Sandwich',
      de: 'Sandwich-Generation',
      es: 'Generación Sándwich',
      pt: 'Geração Sanduíche',
      fr: 'Génération Sandwich',
      it: 'Generazione Sandwich',
    },
    desc: {
      en: 'Supporting parents & own family. Larger emergency fund.',
      id: 'Menanggung orang tua & keluarga sendiri. Dana darurat lebih besar.',
      de: 'Eltern & eigene Familie. Größerer Notfonds.',
      es: 'Apoyo a padres y familia propia. Mayor fondo de emergencia.',
      pt: 'Apoio a pais e família. Maior reserva de emergência.',
      fr: 'Soutien parents & famille. Fonds urgence plus important.',
      it: 'Sostegno genitori & famiglia. Fondo emergenze maggiore.',
    },
    method: '60 / 15 / 25',
    cats: [
      { name: { en: 'Mortgage / Rent', id: 'Cicilan / Sewa', de: 'Hypothek / Miete', es: 'Hipoteca / Alquiler', pt: 'Financiamento / Aluguel', fr: 'Hypothèque / Loyer', it: 'Mutuo / Affitto' }, type: 'needs', pct: 0.20 },
      { name: { en: 'Parents Support', id: 'Support Orang Tua', de: 'Elternunterstützung', es: 'Apoyo a Padres', pt: 'Suporte aos Pais', fr: 'Soutien aux Parents', it: 'Supporto Genitori' }, type: 'needs', pct: 0.20 },
      { name: { en: 'Food & Drinks', id: 'Makan & Minum', de: 'Essen & Trinken', es: 'Comida & Bebidas', pt: 'Alimentação', fr: 'Alimentation', it: 'Cibo & Bevande' }, type: 'needs', pct: 0.10 },
      { name: { en: 'Transportation', id: 'Transportasi', de: 'Transport', es: 'Transporte', pt: 'Transporte', fr: 'Transport', it: 'Trasporti' }, type: 'needs', pct: 0.05 },
      { name: { en: 'Monthly Groceries', id: 'Belanja Bulanan', de: 'Einkauf', es: 'Compras Mensuales', pt: 'Compras Mensais', fr: 'Courses', it: 'Spesa Mensile' }, type: 'needs', pct: 0.05 },
      { name: { en: 'Entertainment', id: 'Hiburan', de: 'Unterhaltung', es: 'Entretenimiento', pt: 'Lazer', fr: 'Loisirs', it: 'Svago' }, type: 'wants', pct: 0.10 },
      { name: { en: 'Hobbies', id: 'Hobi', de: 'Hobbys', es: 'Aficiones', pt: 'Hobbies', fr: 'Loisirs Créatifs', it: 'Hobby' }, type: 'wants', pct: 0.05 },
      { name: { en: 'Emergency Fund', id: 'Dana Darurat', de: 'Notfonds', es: 'Fondo de Emergencia', pt: 'Reserva de Emergência', fr: "Fonds d'Urgence", it: 'Fondo Emergenze' }, type: 'savings', pct: 0.15 },
      { name: { en: 'Investment', id: 'Investasi', de: 'Investition', es: 'Inversión', pt: 'Investimento', fr: 'Investissement', it: 'Investimento' }, type: 'savings', pct: 0.05 },
      { name: { en: 'Savings', id: 'Tabungan', de: 'Ersparnisse', es: 'Ahorro', pt: 'Poupança', fr: 'Épargne', it: 'Risparmio' }, type: 'savings', pct: 0.05 },
    ],
  },
];
