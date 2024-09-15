import uvicorn
import os
from dotenv import load_dotenv

load_dotenv()

if __name__ == "__main__":
    port = 8000
    uvicorn.run(
        app="app.core.server:app",  
        reload=True,
        host="0.0.0.0",  
        port=port,
        workers=1,
        log_level="debug"
    )