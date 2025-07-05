from flask import Blueprint, jsonify
skill_bp = Blueprint('skill_bp', __name__)

@skill_bp.route("/")
def list_skills():
    return jsonify(["React", "Flask", "MongoDB", "Tailwind"])
