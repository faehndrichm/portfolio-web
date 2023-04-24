export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      experience: {
        Row: {
          category: number | null
          created_at: string | null
          from_date: string | null
          id: number
          name: string | null
          to_date: string | null
        }
        Insert: {
          category?: number | null
          created_at?: string | null
          from_date?: string | null
          id?: number
          name?: string | null
          to_date?: string | null
        }
        Update: {
          category?: number | null
          created_at?: string | null
          from_date?: string | null
          id?: number
          name?: string | null
          to_date?: string | null
        }
      }
      guestbook: {
        Row: {
          created_at: string | null
          id: number
          text: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          text?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          text?: string | null
          user_id?: string | null
        }
      }
      profiles: {
        Row: {
          created_at: string | null
          first_name: string | null
          full_name: string | null
          id: string
          last_name: string | null
        }
        Insert: {
          created_at?: string | null
          first_name?: string | null
          full_name?: string | null
          id: string
          last_name?: string | null
        }
        Update: {
          created_at?: string | null
          first_name?: string | null
          full_name?: string | null
          id?: string
          last_name?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
