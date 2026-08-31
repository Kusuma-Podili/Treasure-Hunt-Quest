import os
import subprocess
import urllib.request
import json
import time

REPO = "Kusuma-Podili/Treasure-Hunt-Quest"

def get_github_token():
    # Try git credential helper
    p = subprocess.Popen(['git', 'credential', 'fill'], stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
    out, _ = p.communicate('protocol=https\nhost=github.com\n')
    creds = dict(line.split('=', 1) for line in out.strip().split('\n') if '=' in line)
    return creds.get('password', '')

TOKEN = get_github_token()
HEADERS = {
    'Authorization': f'Bearer {TOKEN}',
    'Accept': 'application/vnd.github.v3+json',
    'User-Agent': 'Treasure-Hunt-Quest-Automation'
}

def create_pull_request(title, head_branch, base_branch="main", body=""):
    url = f"https://api.github.com/repos/{REPO}/pulls"
    data = json.dumps({
        "title": title,
        "head": head_branch,
        "base": base_branch,
        "body": body
    }).encode('utf-8')
    req = urllib.request.Request(url, data=data, headers=HEADERS, method='POST')
    with urllib.request.urlopen(req) as resp:
        res = json.loads(resp.read().decode('utf-8'))
        print(f"Created PR #{res['number']}: {res['html_url']}")
        return res

def merge_pull_request(pr_number, commit_title="", commit_message="", merge_method="merge"):
    url = f"https://api.github.com/repos/{REPO}/pulls/{pr_number}/merge"
    data = json.dumps({
        "commit_title": commit_title or f"Merge pull request #{pr_number}",
        "commit_message": commit_message,
        "merge_method": merge_method
    }).encode('utf-8')
    req = urllib.request.Request(url, data=data, headers=HEADERS, method='PUT')
    with urllib.request.urlopen(req) as resp:
        res = json.loads(resp.read().decode('utf-8'))
        print(f"Merged PR #{pr_number}: {res.get('message', 'Success')} (SHA: {res.get('sha', '')[:7]})")
        return res

def get_pr_status(pr_number):
    url = f"https://api.github.com/repos/{REPO}/pulls/{pr_number}"
    req = urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(req) as resp:
        res = json.loads(resp.read().decode('utf-8'))
        print(f"PR #{pr_number} state: {res['state']}, merged: {res.get('merged', False)}")
        return res

if __name__ == "__main__":
    print("GitHub API helper ready for REPO:", REPO)
