import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables!');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Instructions pour créer la table dans Supabase:
/*
1. Connectez-vous à votre projet Supabase
2. Allez dans "SQL Editor"
3. Exécutez ce code SQL:

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
*/
