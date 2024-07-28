import pandas as pd
from datetime import datetime


def remove_am_pm(time_str):
    """Helper function to remove 'AM' or 'PM' from the time string."""
    if isinstance(time_str, str):
        return time_str.replace(' AM', '').replace(' PM', '')
    return time_str  # return the value as is if it's not a string

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

    df['Wakeup Time'] = df['Wakeup Time'].apply(remove_am_pm)

    # Rename your value column to 'y'
    # Adjust 'value' to match your column name if it's different
    df = df.rename(columns={'Wakeup Time': 'y'})

    # Select only the required columns
    df = df[['x', 'y']]

    # Convert to JSON
    json_data = df.to_json(orient='records')

    # Write to file
    with open(json_file_path, 'w') as json_file:
        json_file.write(json_data)

    print(f"Conversion complete. JSON file saved as {json_file_path}")

# Usage
csv_file_path = 'Tracker_Unclean.csv'
json_file_path = 'Tracker_Clean.json'

csv_to_json(csv_file_path, json_file_path)