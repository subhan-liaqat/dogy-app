import googlemaps
from dotenv import load_dotenv
import os

load_dotenv()

apikey = os.getenv("GOOGLE_MAPS_API_KEY")

if not apikey:
    raise ValueError("No API key found. Make sure GOOGLE_MAPS_API_KEY is set in your .env file.")

def convert_to_coords(input_address, gmaps):
    return gmaps.geocode(input_address)

if __name__ == "__main__":
    gmaps = googlemaps.Client(key=apikey)

    example_coords = convert_to_coords("The Washington Monument, DC", gmaps)

    print(example_coords)
