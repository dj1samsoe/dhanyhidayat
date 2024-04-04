import { NextRequest, NextResponse } from 'next/server';

import axios from 'axios';

export const GET = async (req: NextRequest, res: NextResponse) => {
  const DEV_TO_URL = 'https://dev.to/api/articles/me';
  const headers = {
    'api-key': process.env.DEVTO_KEY
  };

  // Parse the request URL to extract query parameters
  const searchParams = new URLSearchParams(req.url.split('?')[1]);
  const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit') as string) : null;
  const page = searchParams.get('page') ? parseInt(searchParams.get('page') as string) : 1;

  try {
    let response;
    if (limit) {
      // If limit is provided, add it to the request parameters
      response = await axios.get(DEV_TO_URL, {
        headers,
        params: {
          page, // Add page parameter
          per_page: limit // Adding 'per_page' parameter to limit results
        }
      });
    } else {
      response = await axios.get(DEV_TO_URL, {
        headers
      });
    }

    return NextResponse.json({ status: true, data: response.data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ status: false, error }, { status: 400 });
  }
};
