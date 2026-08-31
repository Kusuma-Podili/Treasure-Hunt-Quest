"""
Treasure Hunt Quest - Main Application Entry Point
"""
import sys
import os

def main():
    print("=" * 60)
    print("TREASURE HUNT QUEST - STARTING GAME APPLICATION")
    print("=" * 60)
    
    # Check if user requested test execution
    if len(sys.argv) > 1 and sys.argv[1] in ('--test', 'test', '-t'):
        from tests.test_runner import run
        print("Running automated test suites...")
        run()
        return

    # Default: launch game server
    from server import start_server
    start_server()

if __name__ == '__main__':
    main()
