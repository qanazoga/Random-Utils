def prettify(file):
    return {
        'png': 'PNG Image',
        'jpg': 'JPEG Image',
        'jpeg': 'JPEG Image',
        'svg': 'SVG Image',
        'gif': 'GIF Image',
        'ico': 'Windows Icon',

        'txt': 'Text File',
        'log': 'Log File',
        'htm': 'HTML File',
        'html': 'HTML File',
        'xhtml': 'HTML File',
        'shtml': 'HTML File',
        'php': 'PHP Script',
        'js': 'JavaScript File',
        'css': 'Stylesheet',

        'pdf': 'PDF Document',
        'xls': 'Spreadsheet',
        'xlsx': 'Spreadsheet',
        'doc': 'Microsoft Word Document',
        'docx': 'Microsoft Word Document',

        'zip': 'ZIP Archive',
        'py': 'Python File',
        'exe': 'Windows Executable'
        
        }.get(file, 'Unknown')
