#!/usr/bin/env python3
"""
Treasure Hunt Quest - Main Application Entry Point
"""
import sys
import os
import argparse

def main():
    parser = argparse.ArgumentParser(description="Treasure Hunt Quest")
    parser.add_argument("-p", "--port", type=int, default=7777, help="Port to run the game server on")
    parser.add_argument("-t", "--test", action="store_true", help="Run automated test suites")
    
    # Check if positional 'test' was provided
    if len(sys.argv) > 1 and sys.argv[1] in ('test', '--test', '-t'):
        from tests.test_runner import run
        print("Running automated test suites...")
        run()
        return

    args, unknown = parser.parse_known_args()

    print("=" * 60)
    print("TREASURE HUNT QUEST - STARTING GAME APPLICATION")
    print("=" * 60)

    if args.test:
        from tests.test_runner import run
        print("Running automated test suites...")
        run()
        return

    # Launch game server on specified port (default 7777)
    from server import start_server
    start_server(args.port)

if __name__ == '__main__':
    main()
