from lib2to3.pgen2 import driver
from selenium import webdriver
from selenium.webdriver.firefox.options import Options
from time import sleep
import json

options = Options()
options.binary_location = r'C:\Program Files\Mozilla Firefox\firefox.exe'

driver = webdriver.Firefox(options=options)
driver.get(
    "https://people.dbmi.columbia.edu/~friedma/Projects/DiseaseSymptomKB/index.html")
driver.maximize_window()

sleep(2)


Diagnoser = []
count = -1

rows = 1 + len(driver.find_elements("xpath", "/html/body/div/table/tbody/tr"))
# cols = len(driver.find_elements(
#     "xpath", "/html/body/div/table/tbody/tr[1]/td"))


for row in range(2, rows):
    for col in range(1, 4, 2):
        text = driver.find_element(
            "xpath", "/html/body/div/table/tbody/tr[" + str(row) + "]/td[" + str(col) + "]").text
        if (not text.strip()):
            continue
        if (col == 1):
            text[text.find("_") + 1:]
            end = text.find("^") if text.find("^") != -1 else len(text)
            Diagnoser.append(
                {"Navn": text[text.find("_") + 1:end].capitalize(), "Symptomer": []})
        else:
            end = text.find("^") if text.find("^") != -1 else len(text)
            Diagnoser[count]["Symptomer"].append(
                {"Navn": text[text.find("_") + 1:end].capitalize()})


with open("test.json", "w") as outfile:
    json_obj = json.dumps(Diagnoser, indent=4)
    outfile.write(json_obj)
