import googlemaps
from dotenv import load_dotenv
import os

# Load environment variables from .env file
load_dotenv()

# Retrieve API key from environment variables
api_key = os.getenv("GOOGLE_MAPS_API_KEY")

# Initialize Google Maps client
gmaps = googlemaps.Client(key=api_key)

def find_dog_shop_nearby(location):
    """
    Find dog shops nearby a given location using Places API.
    """
    # Search for dog shops near the location
    places_result = gmaps.places_nearby(location=location, radius=5000, keyword='dog shop')
    
    # Extract relevant information from the API response
    dog_shops = []
    for place in places_result['results']:
        dog_shops.append({
            'name': place['name'],
            'location': place['geometry']['location']
        })
    
    return dog_shops

def find_route(start, end, waypoints=[]):
    """
    Find a route between the start and end locations with optional waypoints using Directions API.
    """
    # Define parameters for directions request
    directions_result = gmaps.directions(
        origin=start,
        destination=end,
        waypoints=waypoints,
        optimize_waypoints=True,  # Optimize the order of waypoints
        mode='driving'  # You can also use 'walking', 'bicycling', or 'transit'
    )

    # Extract route information from the API response
    route = directions_result[0]['legs'][0]  # Assuming there's only one route
    steps = []
    for step in route['steps']:
        steps.append(step['html_instructions'])
    
    return {
        'distance': route['distance']['text'],
        'duration': route['duration']['text'],
        'steps': steps
    }

if __name__ == "__main__":
    # Example usage:
    start_location = "San Francisco, CA"
    end_location = "Santa Clara, CA"
    
    # Find dog shops near the starting location
    dog_shops_nearby = find_dog_shop_nearby(start_location)
    
    # Print the names and locations of nearby dog shops
    print("Dog shops nearby:")
    for shop in dog_shops_nearby:
        print(shop['name'], shop['location'])
    
    # Find route from start to end with a dog shop as a waypoint
    # Assuming the first dog shop found is used as the waypoint
    waypoint = dog_shops_nearby[0]['location'] if dog_shops_nearby else None
    route_info = find_route(start=start_location, end=end_location, waypoints=[waypoint])
    
    # Print route information
    print("\nRoute Information:")
    print("Distance:", route_info['distance'])
    print("Duration:", route_info['duration'])
    print("Steps:")
    
    for step in route_info['steps']:
        print("-", step)
