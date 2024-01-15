'use server';

// import querystring from 'querystring';

// const client_id = process.env.NEXT_PUBLIC_CLIENT_ID_SPOTIFY;
// const client_secret = process.env.NEXT_PUBLIC_CLIENT_SECRET_SPOTIFY;
// const refresh_token = process.env.NEXT_PUBLIC_REFRESH_TOKEN_SPOTIFY;
// const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
// const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
// export const getAccessToken = async () => {
//   const response = await fetch(TOKEN_ENDPOINT, {
//     method: 'POST',
//     headers: {
//       Authorization: `Basic ${basic}`,
//       'Content-Type': 'application/x-www-form-urlencoded'
//     },
//     body: querystring.stringify({
//       grant_type: 'refresh_token',
//       refresh_token
//     })
//   });
//   return response.json();
// };

export const getAccessToken = async () => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

  const urlencoded = new URLSearchParams();
  urlencoded.append('client_id', process.env.NEXT_PUBLIC_CLIENT_ID_SPOTIFY as string);
  urlencoded.append('client_secret', process.env.NEXT_PUBLIC_CLIENT_SECRET_SPOTIFY as string);
  urlencoded.append('grant_type', 'refresh_token');
  urlencoded.append('refresh_token', process.env.NEXT_PUBLIC_REFRESH_TOKEN_SPOTIFY as string);

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    next: { revalidate: 3600 }
  };

  try {
    const response = await fetch('https://accounts.spotify.com/api/token', requestOptions);
    const data = await response.json();
    console.log(data);
    return data.access_token;
  } catch (error) {
    console.error(error);
  }
};

export async function getCurrentTrack(accessToken: string) {
  const myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${accessToken}}`);

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    next: { revalidate: 0 }
  };

  try {
    const response = await fetch('https://api.spotify.com/v1/me/player/currently-playing', requestOptions);

    const data = await response.json();
    // console.log(data);
    return data ? data : null;
  } catch (err) {
    return null;
  }
}

export async function getLastPlayedTrack(accessToken: string) {
  const myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${accessToken}}`);

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    next: { revalidate: 60 }
  };

  try {
    const response = await fetch('https://api.spotify.com/v1/me/player/recently-played?limit=1', requestOptions);

    const data = await response.json();
    return data ? data : null;
  } catch (err) {
    return null;
  }
}
