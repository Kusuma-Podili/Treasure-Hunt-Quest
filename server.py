#!/usr/bin/env python3
import http.server
import socketserver
import json
import os
import sys
import argparse

DEFAULT_PORT = 7777

class GameHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/api/status':
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({'status': 'running', 'game': 'Treasure Hunt Quest'}).encode())
        else:
            super().do_GET()

def start_server(port=DEFAULT_PORT):
    # Try preferred port first, then fallback to other custom ports (not 3000, 8000, 8080, 9000, 5000)
    candidate_ports = [port, 7777, 8888, 4200, 6543, 9999, 5555]
    
    for p in candidate_ports:
        try:
            httpd = socketserver.TCPServer(('', p), GameHandler)
            print(f"Treasure Hunt Quest server started at: http://localhost:{p}")
            print(f"Open your browser at: http://localhost:{p}")
            sys.stdout.flush()
            httpd.serve_forever()
            break
        except OSError:
            continue

if __name__ == '__main__':
    parser = argparse.ArgumentParser(description="Treasure Hunt Quest Game Server")
    parser.add_argument("-p", "--port", type=int, default=DEFAULT_PORT, help="Port to run server on")
    args = parser.parse_args()
    start_server(args.port)
