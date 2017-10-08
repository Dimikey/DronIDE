import re
import os

strings = {}
pattern = """["'][а-яА-Я\s\\\]+["'][а-яА-Я\s\\\]*["']*"""
print(pattern)
out = open("out.txt", 'wb')


def func(dir):
    for file in os.listdir(dir):
        file_path = dir + "/" + file
        if os.path.isdir(file_path):
            func(file_path)
        elif os.path.splitext(file_path)[1] == ".js":
            res = open(file_path, "r", encoding="utf8").read()
            # print(res)
            result = re.findall(pattern, res)
            if len(result):
                strings[file_path] = result


func(os.curdir)
for key in strings:
    out.write(("\n" + key + "\n").encode("utf-8"))
    for val in strings[key]:
        out.write((val + "\n").encode())
