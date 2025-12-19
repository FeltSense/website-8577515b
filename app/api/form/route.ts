import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Define the database schema type
type ContactSubmission = {
  id?: number;
  name: string;
  email: string;
  message: string;
  created_at?: string;
};

type Database = {
  public: {
    Tables: {
      contact_submissions: {
        Row: ContactSubmission;
        Insert: Omit<ContactSubmission, 'id'>;
        Update: Partial<Omit<ContactSubmission, 'id'>>;
      };
    };
  };
};

// Don't initialize at module level - do it in the handler
let supabase: ReturnType<typeof createClient<Database>> | null = null;

function getSupabaseClient() {
  if (!supabase) {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      throw new Error('Missing Supabase environment variables');
    }

    supabase = createClient<Database>(supabaseUrl, supabaseKey);
  }
  return supabase;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Get Supabase client
    const client = getSupabaseClient();

    // Insert data into Supabase
    const { data, error } = await client
      .from('contact_submissions')
      .insert([
        {
          name,
          email,
          message,
          created_at: new Date().toISOString(),
        },
      ])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to submit form' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}

// Prevent static optimization for this route
export const dynamic = 'force-dynamic';
