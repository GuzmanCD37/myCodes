from flask import Flask, render_template, request, jsonify
from cryptography.fernet import Fernet

# Generate a key for encryption (store this securely in a real app)
key = Fernet.generate_key()
cipher = Fernet(key)

print(key)
print(cipher)

text = input("Enter Text to Encrypt: ")

enc_text = cipher.encrypt(text)
print(str(enc_text))
dec_text = cipher.decrypt(enc_text)
print(str(dec_text))
