from flask import Flask
from flask_cors import CORS
from routes.user_routes import user_bp
from routes.skill_routes import skill_bp
from routes.challenge_routes import challenge_bp
import os

app = Flask(__name__)

# ✅ Allow CORS for frontend (Vercel domain)
CORS(app, origins="*", supports_credentials=True)

# ✅ Register Blueprints
app.register_blueprint(user_bp, url_prefix="/api/users")
app.register_blueprint(skill_bp, url_prefix="/api/skills")
app.register_blueprint(challenge_bp, url_prefix="/api/challenges")

# ✅ Root Route
@app.route("/")
def index():
    return {"message": "SkillForge X Backend Active!"}

# ✅ Main Entry
if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(debug=True, host="0.0.0.0", port=port)
