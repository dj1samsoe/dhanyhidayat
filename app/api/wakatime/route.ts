import { NextRequest, NextResponse } from 'next/server';

import { getALLTimeSinceToday, getReadStats } from '@/services/wakatime';

export async function GET(req: NextRequest, res: NextResponse) {
  const readStatsResponse = await getReadStats();
  const allTimeSinceTodayResponse = await getALLTimeSinceToday();

  const data = {
    ...readStatsResponse.data,
    all_time_since_today: allTimeSinceTodayResponse.data
  };

  return NextResponse.json(data);
}
