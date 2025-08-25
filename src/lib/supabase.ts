import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://your-project.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface User {
  id: string
  email: string
  name?: string
  avatar?: string
  created_at: string
  updated_at: string
}

export interface Order {
  id: string
  user_id: string
  title: string
  platform: string
  status: 'draft' | 'in_production' | 'in_review' | 'delivered'
  progress: number
  created_date: string
  due_date: string
  price: number
  project_data: any
  notes?: string
  deliverables?: string[]
}

export interface BrandKit {
  id: string
  user_id: string
  brand_name: string
  primary_color: string
  secondary_color: string
  accent_color: string
  primary_font: string
  secondary_font: string
  logo_url?: string
  brand_voice?: string
  key_messages?: string
  tone_guidelines?: string
  created_at: string
  updated_at: string
}

// Auth helpers
export const signUp = async (email: string, password: string, name: string) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name,
      },
    },
  })
  return { data, error }
}

export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })
  return { data, error }
}

export const signOut = async () => {
  const { error } = await supabase.auth.signOut()
  return { error }
}

export const getCurrentUser = async () => {
  const { data: { user } } = await supabase.auth.getUser()
  return user
}

// Database helpers
export const createOrder = async (orderData: Omit<Order, 'id' | 'created_date'>) => {
  const { data, error } = await supabase
    .from('orders')
    .insert([orderData])
    .select()
  return { data, error }
}

export const getOrders = async (userId: string) => {
  const { data, error } = await supabase
    .from('orders')
    .select('*')
    .eq('user_id', userId)
    .order('created_date', { ascending: false })
  return { data, error }
}

export const updateOrder = async (orderId: string, updates: Partial<Order>) => {
  const { data, error } = await supabase
    .from('orders')
    .update(updates)
    .eq('id', orderId)
    .select()
  return { data, error }
}

export const getBrandKit = async (userId: string) => {
  const { data, error } = await supabase
    .from('brand_kits')
    .select('*')
    .eq('user_id', userId)
    .single()
  return { data, error }
}

export const upsertBrandKit = async (brandKitData: Omit<BrandKit, 'id' | 'created_at' | 'updated_at'>) => {
  const { data, error } = await supabase
    .from('brand_kits')
    .upsert([brandKitData])
    .select()
  return { data, error }
}

