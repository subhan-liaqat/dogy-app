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

# prompt = f"{result} this the given data of coordinated of two places and whether the place lies between these two locations. on the basis of that create a friendly response to the user telling him about the  distance between two places and whether the desired spot lies between those places"
prompt = f"{result} This is the data you provided. As your helpful assistant, I'll provide you with the information you need. Let me find the distance between the two places and check if the desired location is found. Give me a moment."

response = chat.send_message(prompt)
print("Gemini:" + response.text)