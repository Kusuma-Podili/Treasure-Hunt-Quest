import unittest, sys
def run():
    suite = unittest.TestLoader().discover('tests', pattern='test_*.py')
    res = unittest.TextTestRunner(verbosity=2).run(suite)
    if not res.wasSuccessful(): sys.exit(1)
    print(f"\nAll {res.testsRun} test cases passed!")
if __name__ == '__main__': run()
