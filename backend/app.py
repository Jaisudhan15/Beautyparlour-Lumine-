from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_mail import Mail, Message
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
# Allow requests from your Vite frontend
CORS(app, resources={r"/api/*": {"origins": "*"}})

# Email Configuration (Using Gmail as an example)
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USE_SSL'] = True
app.config['MAIL_USERNAME'] = os.getenv('MAIL_USERNAME')
app.config['MAIL_PASSWORD'] = os.getenv('MAIL_PASSWORD') # Use App Passwords for Gmail
app.config['MAIL_DEFAULT_SENDER'] = os.getenv('MAIL_DEFAULT_SENDER') or app.config['MAIL_USERNAME']

mail = Mail(app)

@app.route('/api/book', methods=['POST'])
def book_appointment():
    data = request.json
    name = data.get('name')
    phone = data.get('phone')
    service = data.get('service')
    date = data.get('date')
    client_email = data.get('email') # Assuming you collect email for the confirmation

    if not all([name, phone, service, date]):
        return jsonify({"error": "Missing required fields"}), 400

    owner_email = os.getenv('OWNER_EMAIL')
    if not owner_email:
        return jsonify({"error": "Booking owner email is not configured."}), 500

    try:
        # 1. Email to Owner
        msg_owner = Message(
            f"New Booking: {service} for {name}",
            sender=app.config['MAIL_DEFAULT_SENDER'],
            recipients=[owner_email],
        )
        msg_owner.body = f"""
        New appointment request:
        Name: {name}
        Phone: {phone}
        Email: {client_email}
        Service: {service}
        Date: {date}
        """
        mail.send(msg_owner)

        # 2. Confirmation Email to Client
        if client_email:
            msg_client = Message(
                "Your Appointment Request - Luxury Beauty Parlour",
                sender=app.config['MAIL_DEFAULT_SENDER'],
                recipients=[client_email],
            )
            msg_client.body = f"""
            Hi {name},
            
            Thank you for booking with us! We have received your request for {service} on {date}.
            Our team will contact you shortly at {phone} to confirm the exact time.
            
            Stay beautiful,
            The Luxury Beauty Team
            """
            mail.send(msg_client)

        return jsonify({"message": "Booking successful! Check your email."}), 200

    except Exception as e:
        print(e)
        return jsonify({"error": "Failed to send email."}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)