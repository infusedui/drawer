# Drawer

Bibliothèque React permettant d'afficher un tiroir mobile (drawer) en bas de
page. Elle fournit un contexte, un hook d'assistance et le style nécessaire
pour gérer son ouverture et son contenu.

## Installation

```bash
npm install @infusedui/drawer
```

## Mise en place

Encapsulez votre application avec le `DrawerProvider` afin de partager le
contexte du tiroir :

```tsx
import { DrawerProvider } from "@infusedui/drawer";

const Root = () => (
  <DrawerProvider>
    <App />
  </DrawerProvider>
);
```

## Utilisation

Le hook `useDrawer` expose plusieurs fonctions :

- `pushContent(element)` : définit le contenu à afficher dans le drawer.
- `openDrawer()` : ouvre le drawer.
- `closeDrawer()` : ferme le drawer.
- `switchDrawer()` : bascule son état ouvert/fermé.

Exemple d'intégration :

```tsx
import { useDrawer } from "@infusedui/drawer";

const Demo = () => {
  const { pushContent, openDrawer, closeDrawer, switchDrawer } = useDrawer();

  const handleOpen = () => {
    pushContent(<div>Contenu du drawer</div>);
    openDrawer();
  };

  return (
    <>
      <button onClick={handleOpen}>Ouvrir</button>
      <button onClick={closeDrawer}>Fermer</button>
      <button onClick={switchDrawer}>Basculer</button>
    </>
  );
};
```

## Construction du paquet

Si vous souhaitez construire la librairie à partir de ce dépôt, installez les
dépendances puis lancez :

```bash
npm run build
```

Le script utilise **tsup** pour compiler les sources TypeScript et SCSS dans le
répertoire `dist`.

