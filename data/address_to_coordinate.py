import requests,json
import urllib

input_file_path = 'apartment_output.json'
output_file_path = 'apartment_with_location.json'

def get_geo_info(address):

    address = urllib.parse.quote(address)
    url = f"https://maps.google.com/maps/api/geocode/json?address=\"{address}\"&sensor=false&key=AIzaSyBD_YrFV_MzwLI3ks0xCfIEz8fV50DK7XM"
    payload = {}
    headers = {}
    response_json = requests.request("GET", url, headers=headers, data=payload).json()

    geo_info = response_json['results'][0]['geometry']['location']
    return geo_info

with open(input_file_path) as f:
    data = json.load(f)

output_data = []
for d in data:
    d['location'] =  get_geo_info(d["address"])
    output_data.append(d)

with open(output_file_path, 'w') as f:
    json.dump(output_data, f)