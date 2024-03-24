import google.generativeai as genai
import os
import PIL.Image

genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

model = genai.GenerativeModel('gemini-pro-vision')
img = PIL.Image.open('database.png')

response = model.generate_content(img)
print(response.text)