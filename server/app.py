from flask import Flask
from flask_cors import CORS
from routes.user_routes import user_bp
from routes.skill_routes import skill_bp
from routes.challenge_routes import challenge_bp

app = Flask(__name__)
CORS(app)

app.register_blueprint(user_bp, url_prefix="/api/users")
app.register_blueprint(skill_bp, url_prefix="/api/skills")
app.register_blueprint(challenge_bp, url_prefix="/api/challenges")

@app.route("/")
def index():
    return {"message": "SkillForge X Backend Active!"}

if __name__ == "__main__":
    app.run(debug=True)
