from flask import Blueprint, request, jsonify
user_bp = Blueprint('user_bp', __name__)

@user_bp.route("/profile/<username>")
def get_profile(username):
    return jsonify({
        "username": username,
        "level": 7,
        "xp": 1320,
        "joined": "March 2025"
    })
