import React, { useState } from 'react';
import { Box, Button, Typography, Paper } from '@mui/material';


const wordList = [
  'Sword',
  'Armor',
  'Shield',
  'Strength Potion',
  'Endurance Potion',
  '20/20 vision',
  'super speed',
];

const MyApp = () => {
  const [playerA, setPlayerA] = useState([]);
  const [wordBank, setWordBank] = useState(wordList);
  const [playerB, setPlayerB] = useState([]);

  const handleWordClick = (word) => {
    setPlayerA((prev) => [...prev, word]); // Add word to Player A
    setWordBank((prev) => prev.filter((w) => w !== word)); // Remove from Word Bank
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      {/* Player A Section */}
      <Box sx={{ width: '33%', padding: 2, borderRight: '1px solid #ccc' }}>
        <Typography variant="h6">Player A:</Typography>
        <Paper sx={{ padding: 1, minHeight: '100px' }}>
          {playerA.length > 0 ? playerA.join(', ') : '[]'}
        </Paper>
      </Box>

      {/* Word Bank Section */}
      <Box sx={{ width: '34%', padding: 2, borderRight: '1px solid #ccc', display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h6">Word Bank:</Typography>
        <Paper sx={{ padding: 1, flexGrow: 1, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {wordBank.length > 0 ? (
            wordBank.map((word) => (
              <Button
                key={word}
                variant="outlined"
                onClick={() => handleWordClick(word)}
                sx={{ margin: 1 }}
              >
                {word}
              </Button>
            ))
          ) : (
            <Typography>No words left!</Typography>
          )}
        </Paper>
      </Box>

      {/* Player B Section */}
      <Box sx={{ width: '33%', padding: 2 }}>
        <Typography variant="h6">Player B:</Typography>
        <Paper sx={{ padding: 1, minHeight: '100px' }}>
          {playerB.length > 0 ? playerB.join(', ') : '[]'}
        </Paper>
      </Box>
    </Box>
  );
};

export default MyApp;