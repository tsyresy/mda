# 🚀 Projet MDA - Site Web Masterclass

Site web complet pour le Masterclass gratuit de 4 jours "Projet MDA" - Apprends à générer plus de 10k€/mois avec le marketing digital.

## 🎨 Technologies Utilisées

- **Frontend**: React 18 + Vite
- **UI**: Material-UI (MUI)
- **Backend/DB**: Supabase
- **Routing**: React Router v6
- **Animations**: Framer Motion
- **Date/Time**: date-fns
- **State Management**: React Hooks

## 📋 Prérequis

- Node.js (version 16 ou supérieure)
- npm ou yarn
- Compte Supabase (gratuit)

## 🔧 Installation

### 1. Cloner le projet

```bash
cd projet-mda
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Configuration Supabase

#### a) Créer un projet Supabase

1. Allez sur [https://supabase.com](https://supabase.com)
2. Créez un compte gratuit
3. Créez un nouveau projet

#### b) Créer la table `inscriptions`

Dans le SQL Editor de Supabase, exécutez ce code :

```sql
CREATE TABLE inscriptions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nom_complet TEXT NOT NULL,
  numero_telephone TEXT NOT NULL,
  email TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Activer Row Level Security
ALTER TABLE inscriptions ENABLE ROW LEVEL SECURITY;

-- Politique pour permettre les insertions
CREATE POLICY "Allow public insert" ON inscriptions
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Politique pour permettre la lecture (pour l'admin)
CREATE POLICY "Allow public read" ON inscriptions
  FOR SELECT
  TO public
  USING (true);
```

#### c) Récupérer les clés API

1. Allez dans Settings > API
2. Copiez :
   - Project URL
   - anon/public key

#### d) Configurer les variables d'environnement

Renommez `.env.example` en `.env` et ajoutez vos clés :

```env
VITE_SUPABASE_URL=https://votre-projet.supabase.co
VITE_SUPABASE_ANON_KEY=votre-cle-anon-key
```

### 4. Lancer le projet en développement

```bash
npm run dev
```

Le site sera accessible sur `http://localhost:3000`

## 🌐 Structure du Site

### Pages

1. **Landing Page** (`/`)
   - Bandeau "Places limitées" animé
   - Hero section avec image
   - Section avantages
   - Compte à rebours de 59min59s
   - Section "À propos"
   - Multiples CTAs vers le formulaire

2. **Formulaire** (`/formulaire`)
   - Formulaire d'inscription avec validation
   - Intégration Supabase
   - Popup de confirmation
   - Redirection automatique après 4s

3. **Page d'attente** (`/attente`)
   - 4 blocs pour les 4 jours
   - Countdown pour chaque jour jusqu'à 20h00 GMT+3
   - Boutons désactivés jusqu'à l'heure H
   - Dates :
     - Jour 1 : 24 mars 2026, 20:00
     - Jour 2 : 25 mars 2026, 20:00
     - Jour 3 : 26 mars 2026, 20:00
     - Jour 4 : 27 mars 2026, 20:00

4. **Login Admin** (`/login`)
   - Authentification simple
   - Credentials : `boss` / `MDA1100`

5. **Dashboard Admin** (`/admin`)
   - Tableau avec toutes les inscriptions
   - Tri et pagination
   - Protection par authentification

## 🎨 Thème et Design

### Couleurs principales
- Bleu foncé : `#00163b`
- Bleu clair : `#0012f6`
- Jaune : `#ffe400`
- Rouge : `#ff0000`
- Blanc : `#ffffff`

### Effets visuels
- Glassmorphism
- Liquid metallic gradient
- Glossy reflection
- Animations Framer Motion
- Scroll animations

## 📦 Build pour Production

```bash
npm run build
```

Les fichiers de production seront dans le dossier `dist/`

## 🚀 Déploiement

### Déploiement sur Vercel

1. Installez Vercel CLI :
```bash
npm install -g vercel
```

2. Déployez :
```bash
vercel
```

3. Configurez les variables d'environnement dans le dashboard Vercel

### Déploiement sur Netlify

1. Installez Netlify CLI :
```bash
npm install -g netlify-cli
```

2. Build le projet :
```bash
npm run build
```

3. Déployez :
```bash
netlify deploy --prod --dir=dist
```

4. Configurez les variables d'environnement dans le dashboard Netlify

### Variables d'environnement à configurer

Sur votre plateforme de déploiement, ajoutez :
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

## 🔐 Sécurité

- Les Row Level Security (RLS) sont activées sur Supabase
- L'admin utilise un système simple de localStorage (à améliorer pour la production avec JWT/OAuth)
- Les variables d'environnement ne sont jamais commitées

## 📱 Responsive Design

Le site est entièrement responsive et optimisé pour :
- Mobile (< 600px)
- Tablette (600px - 960px)
- Desktop (> 960px)

## 🎯 SEO

Le site inclut :
- Meta tags optimisés
- Title et description pour le référencement
- Mots-clés : marketing digital, e-commerce, dropshipping, automatisation IA
- Structure HTML sémantique

## 🐛 Debugging

Si vous rencontrez des problèmes :

1. Vérifiez que les variables d'environnement sont correctes
2. Vérifiez que la table `inscriptions` existe dans Supabase
3. Vérifiez les RLS policies dans Supabase
4. Consultez la console du navigateur pour les erreurs
5. Vérifiez que toutes les dépendances sont installées

## 📞 Support

Pour toute question ou problème, créez une issue sur le repository.

## 📄 Licence

Tous droits réservés - Projet MDA 2026

---

Fait avec ❤️ pour le Projet MDA
