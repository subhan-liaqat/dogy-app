import google.generativeai as genai
from map_search import get_coordinates_as_string
import os
from dotenv import load_dotenv

load_dotenv()
#take input from user and pass it to the location list
locations = ["Dallas, TX", "Arlington, TX", "barber shop"]
result = get_coordinates_as_string(locations)
print(result)

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

model = genai.GenerativeModel('gemini-pro')
chat = model.start_chat()

prompt = f"{result} this the given data .on the basis of that create a friendly response to the user telling him about the  distance between two places and whether the desired spot lies between those places"

message = input('You :')
response = chat.send_message(message)
print("Gemini:" + response.text)