
import re


def evalRegex(regex, text):
    regex = re.search("^The.*$", text)
    if regex:
        return 'Valid regular expression'
    else:
        return 'Invalid regular expression'    