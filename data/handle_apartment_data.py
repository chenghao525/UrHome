import pandas as pd
import json

file_csv_path = 'Rents_Zillow.csv'
file_from_csv_path = "apartment_from_csv1.json"
file_no_duplicate_path = "apartment_no_duplicate.json"
file_add_extra_path = "apartment_add_extra.json"
file_neighborhood_list= "neighborhood_list.json"


def csv_to_json(path1=file_csv_path, path2=file_from_csv_path):
    csvFile = open(path1, 'r')
    jsonFile = open(path2, 'w')

    csv_file = pd.DataFrame(pd.read_csv(
        csvFile, sep=",", header=0, index_col=False))
    csv_file.to_json(jsonFile, orient="records", date_format="epoch",
                     double_precision=10, force_ascii=True, date_unit="ms", default_handler=None)


def handle_duplicate(path1=file_from_csv_path, path2=file_no_duplicate_path):
    with open(path1) as f:
        data = json.load(f)
        print(len(data))
        data = list({hash(str(d)): d for d in data}.values())
        print(len(data))

    with open(path2, 'w') as f:
        json.dump(data, f)


def get_extra(path1=file_no_duplicate_path, path2=file_add_extra_path):
    import requests, urllib, getpass
    google_api_key = getpass.getpass(prompt='Google map api: ', stream=None) 

    def get_geo_info(address):
        address = urllib.parse.quote(address)
        url = f"https://maps.google.com/maps/api/geocode/json?address=\"{address}\"&sensor=false&key={google_api_key}"
        payload = {}
        headers = {}
        response_json = requests.request(
            "GET", url, headers=headers, data=payload).json()

        try:
            geo_info = response_json['results'][0]['geometry']['location']
            neighborhood_info = response_json['results'][0]["address_components"][2]["long_name"]
        except:
            raise ValueError('request fail')
        return geo_info, neighborhood_info

    with open(path1) as f:
        data = json.load(f)

    output_data = []
    for d in data:
        try:
            d['location'], d["neighborhood"] = get_geo_info(d["address"])
        except:
            continue
        output_data.append(d)

    with open(path2, 'w') as f:
        json.dump(output_data, f)
    handle_duplicate()

def get_neighborhood_list(path1=file_add_extra_path, path2=file_neighborhood_list):
    with open(path1) as f:
        data = json.load(f)
        data = [d["neighborhood"] for d in data]
    with open(path2, "w") as f:
        json.dump(data,f)



if __name__ == "__main__":
    csv_to_json()
    handle_duplicate()
    get_extra()
    get_neighborhood_list()
