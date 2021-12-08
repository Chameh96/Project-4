from cryptography.fernet import Fernet
import os
from dotenv import load_dotenv

load_dotenv()

FERNET_KEY = os.getenv('FERNET_KEY')

fernet = Fernet(FERNET_KEY)


#txt = 'my secret'
#encypted_text = fernet.encrypt(txt.encode())
# print(encypted_text)
#decrypted_text = fernet.decrypt(encypted_text).decode()
# print(decrypted_text)

# CREATING CRYPTOGRAPH ENCRYPTION
def encryption(txt):
    encpass = fernet.encrypt(txt.encode())
    print('ENCRYPTION :', encpass)
    return encpass


def decryption(txt):
    print('CHICKEN')
    print('CHICKEN TXT:', txt)
    set_text = bytes(txt)
    print('BYTES_TEXT: ', set_text)
    decoder = fernet.decrypt(set_text)
    print('DECODERTRON : ', decoder)
    decypted = decoder.decode()
    print('DECRYPTED', decypted)
    return decypted


# f.decrypt(bytes(value, 'cp1252')), encoding = 'utf-8')
# utf8_general_ci
