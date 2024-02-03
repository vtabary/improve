export interface IResource {
  label: string;
  url: string;
  description: string;
}

export const RESOURCES: IResource[] = [
  {
    label: 'Dramaction',
    description: "Thèmes d'improvisation",
    url: 'https://www.dramaction.qc.ca/fr/improvisation/themes-dimprovisation/',
  },
  {
    label: 'La sonothèque',
    description: 'Sons libres de droits',
    url: 'https://lasonotheque.org/',
  },
  {
    label: 'Yaël Bacry',
    description: 'Exercices, échauffements',
    url: 'https://www.yaelbacry.com/ressources-pedagogiques-acteur/',
  },
];
