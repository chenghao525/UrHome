import requests, urllib, getpass, json
# google_api_key = getpass.getpass(prompt='Google map api: ', stream=None) 


li = ["gym", "restaurant", "supermarket", "cafe"]

facilitate_type = li[2]
url = f"https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=39.3286,-76.6215&radius=4900&types={facilitate_type}&key=AIzaSyBD_YrFV_MzwLI3ks0xCfIEz8fV50DK7XM"
payload = {}
headers= {}
response_json = requests.request("GET", url, headers=headers, data = payload).json()

data = response_json['results']
# todo

with open(facilitate_type + ".json", 'w') as f:
    json.dump(data, f)