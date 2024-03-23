from dotenv import load_dotenv
from pathlib import Path

def load_secets():
    load_dotenv()
    env_path = Path(".") / ".env"
    load_dotenv(dotenv_path=env_path)

    open_ai_key = os.getenv("OPENAI_API_KEY")
    google_palm_key = os.getenv("GOOGLE_PALM_API_KEY")

    return {
        "OPENAI_API_KEY": open_ai_key,
        "GOOGLE_PALM_API_KEY": google_palm_key,
    }