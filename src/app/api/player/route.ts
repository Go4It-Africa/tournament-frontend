import { google } from 'googleapis';
import { NextRequest } from 'next/server';
import { Player } from 'types/data';

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    //client_id: process.env.GOOGLE_CLIENT_ID,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  },
  scopes: [
    'https://www.googleapis.com/auth/drive',
    'https://www.googleapis.com/auth/drive.file',
    'https://www.googleapis.com/auth/spreadsheets',
  ],
});

const sheets = google.sheets({ version: 'v4', auth });
export async function POST(req: NextRequest) {
  const data = (await req.json()) as Player;
  try {
    const {
      first_name,
      last_name,
      date_of_birth,
      weight,
      country,
      nationality,
      gender,
      type_of_sport,
      position,
    } = data;

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'B:F',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [
          [
            first_name,
            last_name,
            date_of_birth,
            weight,
            country,
            nationality,
            gender,
            type_of_sport,
            position,
            'Fusion',
            new Date(),
          ],
        ],
        majorDimension: 'ROWS',
      },
    });

    return Response.json({
      message: 'Player created successfully!',
      status: 200,
    });
  } catch (error) {
    return Response.json({
      message: 'Player not created! Try again later.',
      data: error,
      status: 500,
    });
  }
}

export async function GET() {
  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'A:W',
      majorDimension: 'ROWS',
    });
    const data = await response.data.values;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const player_data: any = [];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data?.map((row: any, index: number) => {
      if (index > 0) {
        player_data.push({
          //id: row[0],
          first_name: row[0],
          last_name: row[1],
          date_of_birth: row[2],
          weight: row[3],
          country: row[4],
          nationality: row[5],
          gender: row[6],
          type_of_sport: row[7],
          position: row[8],
          club_id: row[9],
          date_created: row[10],
          game_day: row[11],
          game_duration: row[12],
          average_distance_km: row[13],
          energy_exerted_kcal: row[14],
          player_load: row[15],
          top_speed: row[16],
          distance_per_minute: row[17],
          work_ratio: row[19],
          impact: row[22],
        });
      }
    });

    return Response.json({
      message: 'Players fetched successfully!',
      data: player_data,
      status: 200,
    });
  } catch (error) {
    return Response.json({
      message: 'Players not fetched! Try again later.',
      data: error,
      status: 500,
    });
  }
}
