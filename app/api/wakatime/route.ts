import { NextResponse } from 'next/server';

import { getALLTimeSinceToday, getReadStats } from '@/services/wakatime';

export async function GET() {
  try {
    // Example headers (customize according to your needs)
    const headers = {
      'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=30'
    };

    // Example configuration object with headers
    const axiosConfig = {
      headers: headers
    };

    NextResponse.json(axiosConfig);

    const readStatsResponse = await getReadStats();
    const allTimeSinceTodayResponse = await getALLTimeSinceToday();

    const data = {
      ...readStatsResponse.data,
      all_time_since_today: allTimeSinceTodayResponse.data
    };

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error in GET request:', error);

    // You can customize the response based on the error type
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
