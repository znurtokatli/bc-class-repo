import os
import csv

cereal_csv = os.path.join("..", "Resources", "cereal.csv")

#read csv module

with open(cereal_csv) as csvfile:

    csvreader = csv.reader(csvfile, delimiter=',')

    print(csvreader)

    csv_header = next(csvreader)
    print(f"CSV Header: {csv_header}")

    for row in csvreader:
        print(row)







