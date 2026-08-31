#!/usr/bin/env python3
import http.server
import socketserver
import json
import os
import sys

PORTS = [8080, 8000, 8081, 3000, 5000, 8888]

class GameHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/api/status':
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({'status': 'running', 'game': 'Treasure Hunt Quest'}).encode())
        else:
            super().do_GET()

def start_server():
    for port in PORTS:
        try:
            httpd = socketserver.TCPServer(('', port), GameHandler)
            print(f"Treasure Hunt Quest server started at: http://localhost:{port}")
            print(f"Open your browser at: http://localhost:{port}")
            sys.stdout.flush()
            httpd.serve_forever()
            break
        except OSError:
            continue

if __name__ == '__main__':
    start_server()
