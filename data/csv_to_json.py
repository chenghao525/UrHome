# * https://stackoverflow.com/questions/19697846/how-to-convert-csv-file-to-multiline-json

import pandas as pd
csvFile = open('Rents_Zillow.csv', 'r')
jsonFile = open('output.json', 'w')

csv_file = pd.DataFrame(pd.read_csv(csvFile, sep = ",", header = 0, index_col = False))
csv_file.to_json(jsonFile, orient = "records", date_format = "epoch", double_precision = 10, force_ascii = True, date_unit = "ms", default_handler = None)