import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(req) {
  const { searchParams } = new URL(req.url); // Extract searchParams from the URL
  const place_id = searchParams.get("place_id"); // Get place_id from query string
  const apiKey = process.env.REVIEWS_API_KEY;
  const fields = "reviews";

  if (!place_id || !apiKey) {
    return NextResponse.json({
      data: [],
    });
  }

  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/details/json?fields=${fields}&place_id=${place_id}&key=${apiKey}`,
    );
    return NextResponse.json({ data: response?.data?.result?.reviews });
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return NextResponse.json({
      data: [],
    });
  }
}
