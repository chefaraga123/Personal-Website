import pandas as pd
import json

def csv_to_json(csv_file_path, json_file_path):
    # Read the CSV file
    df = pd.read_csv(csv_file_path)

    print(df.head())

    # Ensure the date column is in datetime format
    # Adjust 'date' to match your column name if it's different
    df['Date'] = pd.to_datetime(df['Date'])

    # Sort the dataframe by date
    df = df.sort_values('Date')

    # Format the date as required by Chart.js
    df['x'] = df['Date'].dt.strftime('%Y-%m-%d')

    # Rename your value column to 'y' and ensure it's numeric
    # Adjust 'value' to match your column name if it's different
    df = df.rename(columns={'Wakeup Time': 'y'})
    df['y'] = pd.to_numeric(df['y'], errors='coerce')

    # Drop any rows where y is not a valid number
    df = df.dropna(subset=['y'])

    # Select only the required columns
    df = df[['x', 'y']]

    # Convert to list of dictionaries
    data = df.to_dict('records')

    # Write to file
    with open(json_file_path, 'w') as json_file:
        json.dump(data, json_file, indent=2)

    print(f"Conversion complete. JSON file saved as {json_file_path}")

# Usage
csv_file_path = 'Tracker_Unclean.csv'
json_file_path = 'Tracker_Clean.json'

csv_to_json(csv_file_path, json_file_path)