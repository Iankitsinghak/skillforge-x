from flask import Blueprint, jsonify
skill_bp = Blueprint('skill_bp', __name__)

@skill_bp.route("/")
def list_skills():
    return jsonify(["React", "Flask", "MongoDB", "Tailwind"])

// ✅ FILE: server/routes/challenge_routes.py
from flask import Blueprint, jsonify
challenge_bp = Blueprint('challenge_bp', __name__)

@challenge_bp.route("/")
def get_challenges():
    return jsonify([
        {"title": "Build a Portfolio Website", "level": "Intermediate", "status": "Active"},
        {"title": "REST API with Flask", "level": "Beginner", "status": "Completed"},
        {"title": "MongoDB + React Project", "level": "Advanced", "status": "Ongoing"}
    ])
