from cryptography.fernet import Fernet

key = Fernet.generate_key()

fernet = Fernet(key)
#txt = 'my secret'
#encypted_text = fernet.encrypt(txt.encode())
# print(encypted_text)
#decrypted_text = fernet.decrypt(encypted_text).decode()
# print(decrypted_text)

# CREATING CRYPTOGRAPH ENCRYPTION


def encryption(txt):
    encpass = fernet.encrypt(txt.encode())
    return encpass


def decryption(txt):
    decpass = fernet.decrypt(txt).decode()
    return decpass
