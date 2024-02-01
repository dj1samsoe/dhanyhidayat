import { NextResponse } from 'next/server';

import { getALLTimeSinceToday, getAccessToken, getReadStats } from '@/services/wakatime';

export const revalidate = 30;
export async function GET() {
  const accessToken = await getAccessToken();

  // Check if accessToken is defined before proceeding
  if (accessToken === undefined) {
    return NextResponse.json({ error: 'Failed to obtain access token' }, { status: 500 });
  }

  const readStatsResponse = await getReadStats(accessToken);
  const allTimeSinceTodayResponse = await getALLTimeSinceToday(accessToken);

  const data = {
    ...(readStatsResponse?.data || {}),
    all_time_since_today: allTimeSinceTodayResponse?.data || {}
  };

  return NextResponse.json(data);
}
