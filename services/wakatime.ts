import axios from 'axios';
import querystring from 'querystring';

const CLIENT_ID = process.env.WAKATIME_CLIENT_ID;
const CLIENT_SECRET = process.env.WAKATIME_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.WAKATIME_CLIENT_REFRESH_TOKEN;

const STATS_ENDPOINT = 'https://wakatime.com/api/v1/users/current/stats';
const ALL_TIME_SINCE_TODAY = 'https://wakatime.com/api/v1/users/current/all_time_since_today';
const TOKEN_ENDPOINT = 'https://wakatime.com/oauth/token';

export const getAccessToken = async () => {
  const data = querystring.stringify({
    grant_type: 'refresh_token',
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    refresh_token: REFRESH_TOKEN
  });

  try {
    const response = await axios.post(TOKEN_ENDPOINT, data, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json'
      }
    });

    console.log('Response Data:', response.data);
    return response.data.access_token;
  } catch (error) {
    console.error('Failed to fetch access token:', error);
    return undefined;
  }
};

export const getReadStats = async (accessToken: string) => {
  const myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${accessToken}`);

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    next: { revalidate: 3600 }
  };

  try {
    const response = await fetch(`${STATS_ENDPOINT}/last_7_days`, requestOptions);

    const status = response.status;
    console.log('dj1samsoe ~ getReadStats ~ status : ', status);

    if (status >= 400) return { status, data: [] };

    const getData = await response.json();
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

export const getALLTimeSinceToday = async (accessToken: string) => {
  const myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${accessToken}`);

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    next: { revalidate: 3600 }
  };

  const response = await fetch(ALL_TIME_SINCE_TODAY, requestOptions);

  const status = response.status;

  if (status >= 400) return { status, data: {} };

  const getData = await response.json();
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
