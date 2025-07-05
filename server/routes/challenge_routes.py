from flask import Blueprint, jsonify
challenge_bp = Blueprint('challenge_bp', __name__)

@challenge_bp.route("/")
def get_challenges():
    return jsonify([
        {"title": "Build a Portfolio Website", "level": "Intermediate", "status": "Active"},
        {"title": "REST API with Flask", "level": "Beginner", "status": "Completed"},
        {"title": "MongoDB + React Project", "level": "Advanced", "status": "Ongoing"}
    ])
