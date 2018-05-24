import unittest
from ninemensmorris import *

class TestNMM(unittest.TestCase):
    
    def test_board_size(self):
        gameBoardDictionary = createGameBoard()
        print gameBoardDictionary
        self.assertEqual(len(gameBoardDictionary), 49)