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
    print('CHICKEN')
    print('CHICKEN TXT:', txt)
    set_text = bytes(txt)
    print('BYTES_TEXT: ', set_text)
    decoder = fernet.decrypt(bytes(txt))
    print('DECODERTRON : ', decoder)
    decypted = decoder.decode()
    print('DECRYPTED', decypted)
    return decypted


# f.decrypt(bytes(value, 'cp1252')), encoding = 'utf-8')
# utf8_general_ci
