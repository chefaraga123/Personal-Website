import os

def replace_spaces_in_filenames(directory):
    """
    Replace spaces with underscores in all markdown filenames in the given directory.

    Args:
        directory (str): Path to the directory containing markdown files.
    """
    try:
        # List all files in the directory
        for filename in os.listdir(directory):
            # Check if the file is a markdown file
            if filename.endswith(".md"):
                # Check if the filename contains spaces
                if ' ' in filename:
                    # Construct the new filename
                    new_filename = filename.replace(' ', '_')
                    # Get full paths
                    old_file_path = os.path.join(directory, filename)
                    new_file_path = os.path.join(directory, new_filename)
                    # Rename the file
                    os.rename(old_file_path, new_file_path)
                    print(f"Renamed: '{filename}' -> '{new_filename}'")
    except Exception as e:
        print(f"Error: {e}")

# The notes directory relative to the script's location
script_location = os.path.dirname(os.path.abspath(__file__))
notes_directory = os.path.join(script_location, "notes")

replace_spaces_in_filenames(notes_directory)
