import google.generativeai as genai
import os
from dotenv import load_dotenv

load_dotenv()

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

model = genai.GenerativeModel('gemini-pro')
chat = model.start_chat()

prompt=f"{} this the given data .on the basis of that create a friendly response to the user telling him about the  distance between two places and whether the desired spot lies between those places"

message = input('You :')
response = chat.send_message(message)
print("Gemini:" + response.text)
