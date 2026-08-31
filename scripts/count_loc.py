import os
import subprocess

def count_project_loc():
    total_lines = 0
    file_count = 0
    extensions = ('.js', '.ts', '.py', '.html', '.css', '.md', '.json')
    breakdown = {}

    for root, dirs, files in os.walk('.'):
        if '.git' in root or 'node_modules' in root or '__pycache__' in root:
            continue
        for f in files:
            if f.endswith(extensions):
                path = os.path.join(root, f)
                try:
                    with open(path, 'r', encoding='utf-8', errors='ignore') as fp:
                        lines = len(fp.readlines())
                        total_lines += lines
                        file_count += 1
                        ext = os.path.splitext(f)[1]
                        breakdown[ext] = breakdown.get(ext, 0) + lines
                except Exception as e:
                    pass
    return total_lines, file_count, breakdown

if __name__ == '__main__':
    loc, count, bd = count_project_loc()
    print(f"Current Project LOC: {loc:,} across {count} files")
    for ext, lines in sorted(bd.items(), key=lambda x: x[1], reverse=True):
        print(f"  {ext}: {lines:,} lines")
