# 🚀 Guide de Démarrage Rapide - Projet MDA

## ✅ Checklist d'installation

### Étape 1 : Vérifier Node.js

```bash
node --version
# Doit afficher v16 ou supérieur
```

Si Node.js n'est pas installé, téléchargez-le depuis [https://nodejs.org](https://nodejs.org)

### Étape 2 : Installer les dépendances

```bash
npm install
```

⏱️ Cette étape prend environ 2-3 minutes.

### Étape 3 : Configurer Supabase

#### 3.1 Créer un compte Supabase

1. Allez sur [https://supabase.com](https://supabase.com)
2. Cliquez sur "Start your project"
3. Créez un compte gratuit (avec GitHub ou email)

#### 3.2 Créer un nouveau projet

1. Cliquez sur "New Project"
2. Donnez un nom à votre projet : `projet-mda`
3. Choisissez une région proche de vous
4. Créez un mot de passe fort pour la base de données
5. Cliquez sur "Create new project"

⏱️ La création prend environ 2 minutes.

#### 3.3 Créer la table inscriptions

1. Dans le menu de gauche, cliquez sur "SQL Editor"
2. Cliquez sur "New query"
3. Copiez-collez ce code SQL :

```sql
CREATE TABLE inscriptions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nom_complet TEXT NOT NULL,
  numero_telephone TEXT NOT NULL,
  email TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

ALTER TABLE inscriptions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public insert" ON inscriptions
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Allow public read" ON inscriptions
  FOR SELECT
  TO public
  USING (true);
```

4. Cliquez sur "Run" (ou appuyez sur Ctrl+Enter)
5. Vous devriez voir "Success. No rows returned"

#### 3.4 Récupérer les clés API

1. Dans le menu de gauche, cliquez sur "Settings" (⚙️)
2. Cliquez sur "API"
3. Vous verrez deux informations importantes :
   - **Project URL** : `https://xxxxx.supabase.co`
   - **anon public** : une longue clé qui commence par `eyJ...`
4. Copiez ces deux valeurs

#### 3.5 Configurer les variables d'environnement

1. Ouvrez le fichier `.env` à la racine du projet
2. Remplacez les valeurs par vos vraies clés :

```env
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJxxx...votre-vraie-cle
```

3. Sauvegardez le fichier

### Étape 4 : Lancer le site en développement

```bash
npm run dev
```

Vous devriez voir :

```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
```

🎉 **Félicitations !** Ouvrez votre navigateur sur `http://localhost:3000`

## 🧪 Tester le site

### Test 1 : Page d'accueil
- Vérifiez que le bandeau "Places limitées" défile
- Vérifiez que l'image hero s'affiche
- Vérifiez que le countdown fonctionne
- Cliquez sur un bouton CTA

### Test 2 : Formulaire
- Remplissez le formulaire avec des données de test
- Cliquez sur "VALIDER MA RÉSERVATION"
- Vérifiez que le popup de confirmation apparaît
- Attendez la redirection vers /attente

### Test 3 : Vérifier les données dans Supabase
1. Retournez sur Supabase
2. Cliquez sur "Table Editor"
3. Sélectionnez la table "inscriptions"
4. Vous devriez voir votre inscription test

### Test 4 : Page Admin
1. Allez sur `http://localhost:3000/login`
2. Connectez-vous avec :
   - Username : `boss`
   - Password : `MDA1100`
3. Vérifiez que vous voyez vos inscriptions dans le tableau

## 🎨 Personnalisation

### Changer les images

Remplacez les URLs dans :
- `src/pages/LandingPage.jsx` : ligne avec l'image hero
- `src/pages/AttentePage.jsx` : lignes avec les images des 4 jours

### Changer les liens des lives

Dans `src/pages/AttentePage.jsx`, modifiez les liens dans le tableau `days` :

```javascript
const days = [
  {
    day: 1,
    targetDate: '2026-03-24T20:00:00+03:00',
    imageUrl: 'votre-image.jpg',
    link: 'https://votre-lien-zoom-ou-youtube.com', // ← Changez ici
  },
  // ... idem pour les autres jours
];
```

### Changer les dates des lives

Dans le même fichier, modifiez les `targetDate` :
- Format : `YYYY-MM-DDTHH:mm:ss+03:00`
- Exemple : `2026-03-24T20:00:00+03:00` = 24 mars 2026 à 20h00 GMT+3

## 🚀 Déployer le site en production

### Option 1 : Déploiement sur Vercel (Recommandé)

1. Créez un compte sur [https://vercel.com](https://vercel.com)
2. Installez Vercel CLI :
```bash
npm install -g vercel
```

3. Déployez :
```bash
vercel
```

4. Suivez les instructions à l'écran
5. Dans le dashboard Vercel, ajoutez vos variables d'environnement :
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`

### Option 2 : Déploiement sur Netlify

1. Build le projet :
```bash
npm run build
```

2. Créez un compte sur [https://netlify.com](https://netlify.com)
3. Glissez-déposez le dossier `dist` sur Netlify
4. Ajoutez vos variables d'environnement dans Settings > Environment variables

## ❓ Problèmes fréquents

### Erreur "Missing Supabase environment variables"
→ Vérifiez que le fichier `.env` contient bien vos clés Supabase

### Erreur lors de l'insertion dans la base de données
→ Vérifiez que :
1. La table `inscriptions` existe dans Supabase
2. Les RLS policies sont bien configurées
3. Vos clés API sont correctes

### Le countdown ne fonctionne pas correctement
→ Vérifiez que les dates sont au bon format avec le bon fuseau horaire GMT+3

### Les images ne s'affichent pas
→ Vérifiez que les URLs des images sont accessibles et correctes

## 📞 Besoin d'aide ?

Si vous rencontrez un problème non listé ici :
1. Vérifiez la console du navigateur (F12)
2. Vérifiez les logs du terminal
3. Consultez la documentation Supabase : [https://supabase.com/docs](https://supabase.com/docs)

---

🎉 **Bon développement avec Projet MDA !**
