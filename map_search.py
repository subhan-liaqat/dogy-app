import googlemaps
from dotenv import load_dotenv
import os

class LocationCoordinates:
    def __init__(self):
        load_dotenv()
        api_key = os.getenv("GOOGLE_MAPS_API_KEY")
        self.gmaps = googlemaps.Client(key=api_key)

    def get_coordinates(self, location_name):
        """
        Convert location name to latitude and longitude coordinates using Geocoding API.
        """
        geocode_result = self.gmaps.geocode(location_name)
        if geocode_result:
            return geocode_result[0]['geometry']['location']
        else:
            return None

def get_coordinates_as_string(locations):
    """
    Get coordinates for a list of locations and return as a single string.
    """
    loc_coords = LocationCoordinates()
    coordinates = {}
    for location_name in locations:
        coordinates[location_name] = loc_coords.get_coordinates(location_name)

    response = ""
    for location_name, coords in coordinates.items():
        if coords:
            response += f"Coordinates for {location_name}: {coords}\n"
        else:
            response += f"Coordinates for {location_name} not found.\n"
    return response

# Example usage:
locations = ["Dallas, TX", "Arlington, TX", "barber shop"]
print(get_coordinates_as_string(locations))