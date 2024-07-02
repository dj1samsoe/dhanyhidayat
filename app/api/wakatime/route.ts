import { NextRequest, NextResponse } from 'next/server';

import { getALLTimeSinceToday, getReadStats } from '@/services/wakatime';

export async function GET(req: NextRequest) {
  try {
    const readStatsResponse = await getReadStats();
    const allTimeSinceTodayResponse = await getALLTimeSinceToday();

    const data = {
      ...readStatsResponse?.data,
      all_time_since_today: allTimeSinceTodayResponse?.data
    };

    return NextResponse.json(data, { headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=30' } });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}
