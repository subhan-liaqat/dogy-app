import googlemaps
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()

# Retrieve API key from environment variables
api_key = os.getenv("GOOGLE_MAPS_API_KEY")

# Initialize Google Maps client
gmaps = googlemaps.Client(key=api_key)

def get_coordinates(location_name):
    """
    Convert location name to latitude and longitude coordinates using Geocoding API.
    """
    geocode_result = gmaps.geocode(location_name)
    if geocode_result:
        return geocode_result[0]['geometry']['location']
    else:
        return None

# Example usage:
locations = ["Dallas, TX", "Arlington, TX", "barber shop"]

coordinates = {}
for location_name in locations:
    coordinates[location_name] = get_coordinates(location_name)

for location_name, coords in coordinates.items():
    if coords:
        print(f"Coordinates for {location_name}: {coords}")
    else:
        print(f"Coordinates for {location_name} not found.")