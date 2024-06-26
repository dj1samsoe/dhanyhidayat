import axios from 'axios';

const API_KEY = process.env.WAKATIME_API_KEY;

const STATS_ENDPOINT = 'https://wakatime.com/api/v1/users/current/stats';
const ALL_TIME_SINCE_TODAY = 'https://wakatime.com/api/v1/users/current/all_time_since_today';

export const getReadStats = async () => {
  try {
    const response = await axios.get(`${STATS_ENDPOINT}/last_7_days`, {
      headers: {
        Authorization: `Basic ${API_KEY}`,
        'Cache-Control': 'no-cache, no-store, must-revalidate'
      }
    });

    const status = response.status;
    console.log('dj1samsoe ~ getReadStats ~ status : ', status);

    if (status >= 400) return { status, data: [] };

    const getData = await response.data;
    console.log('dj1samsoe ~ getReadStats ~ getData : ', getData);

    const start_date = getData?.data?.start;
    const end_date = getData?.data?.end;
    const last_update = getData?.data?.modified_at;

    const categories = getData?.data?.categories;

    const best_day = {
      date: getData?.data?.best_day?.date,
      text: getData?.data?.best_day?.text
    };
    const human_readable_daily_average = getData?.data?.human_readable_daily_average_including_other_language;
    const human_readable_total = getData?.data?.human_readable_total_including_other_language;

    const languages = getData?.data?.languages?.slice(0, 3);
    const editors = getData?.data?.editors;

    return {
      status,
      data: {
        last_update,
        start_date,
        end_date,
        categories,
        best_day,
        human_readable_daily_average,
        human_readable_total,
        languages,
        editors
      }
    };
  } catch (err) {
    null;
  }
};

export const getALLTimeSinceToday = async () => {
  const response = await axios.get(ALL_TIME_SINCE_TODAY, {
    headers: {
      Authorization: `Basic ${API_KEY}`,
      'Cache-Control': 'no-cache, no-store, must-revalidate'
    }
  });

  const status = response.status;

  if (status >= 400) return { status, data: {} };

  const getData = await response.data;
  console.log('dj1samsoe ~ getAllTimeStats ~ getData : ', getData);

  const data = {
    text: getData?.data?.text,
    total_seconds: getData?.data?.total_seconds
  };

  return {
    status,
    data
  };
};
