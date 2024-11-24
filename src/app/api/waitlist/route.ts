import { NextResponse } from 'next/server';
import { getDB } from '@/lib/mongodb';

export async function POST(request: Request) {
  try {
    const db = await getDB();
    const waitlistCollection = db.collection('waitlist');

    const body = await request.json();
    const waitlistEntry = await waitlistCollection.insertOne({
      ...body,
      createdAt: new Date()
    });

    return NextResponse.json(
      { success: true, data: waitlistEntry }, 
      { status: 201 }
    );
  } catch (error) {
    console.error('Waitlist submission error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to submit to waitlist' },
      { status: 500 }
    );
  }
} 