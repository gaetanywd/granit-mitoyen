// Données des membres du groupe pour la page Présentation.
// Ordre : Yoann (chant), Yann (guitare), Vanessa (basse), Gaétan (batterie).

export type RoleKey = 'presentation.role.vocals' | 'presentation.role.guitar' | 'presentation.role.bass' | 'presentation.role.drums';

export interface Member {
  name: string;
  roleKey: RoleKey;
  /** Chemin public de l’image (sous /images/). */
  image: string;
}

export const members: Member[] = [
  { name: 'Yoann Linares', roleKey: 'presentation.role.vocals', image: '/images/Yoann Linares - Vocalist.jpg' },
  { name: 'Yann Richard', roleKey: 'presentation.role.guitar', image: '/images/Yann Richard - Guitarist.jpg' },
  { name: 'Vanessa Dijoux', roleKey: 'presentation.role.bass', image: '/images/Vanessa Dijoux - Bassist.jpg' },
  { name: 'Gaétan Neveux', roleKey: 'presentation.role.drums', image: '/images/Gaétan Neveux - Drummer.jpg' },
];
