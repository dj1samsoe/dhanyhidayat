import { NextRequest, NextResponse } from 'next/server';

import { getALLTimeSinceToday, getReadStats } from '@/services/wakatime';

export const revalidate = 3600;
export async function GET(req: NextRequest) {
  try {
    const readStatsResponse = await getReadStats();
    const allTimeSinceTodayResponse = await getALLTimeSinceToday();

    const data = {
      ...(readStatsResponse?.data || []),
      all_time_since_today: allTimeSinceTodayResponse?.data || []
    };

    const response = NextResponse.json(data);
    response.headers.set('Cache-control', 'public, max-age=1, must-revalidate');

    return response;
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}
