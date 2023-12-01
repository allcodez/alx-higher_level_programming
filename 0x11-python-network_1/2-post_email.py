#!/usr/bin/python3
"""py script that takes in a URLand an email, sends a POST
request to the passed url with the email as a parameter, and
displays the body of the response decoded in UTF-8)"""

from urllib import request, parse
from sys import argv

if __name__ == "__main__":
    data = parse.urlencode({"email": argv[2]}).encode('utf-8')
    with request.urlopen(argv[1], data) as page:
        print(page.read().decode('utf-8'))
