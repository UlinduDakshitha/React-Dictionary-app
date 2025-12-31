 import React from "react";
import { Card, CardContent, Typography, Box, Chip, List, ListItem, ListItemText } from "@mui/material";

const WordDetails = ({ data }) => {
  if (!data) return null;

  return (
    <Card sx={{ mt: 4 }}>
      <CardContent>
        <Typography variant="h4" component="h2" sx={{ fontWeight: "bold", mb: 2 }}>
          {data[0].word}
        </Typography>

        {data[0].meanings.map((m, i) => (
          <Box key={i} sx={{ mb: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2, gap: 1 }}>
              <Chip label={m.partOfSpeech} color="primary" variant="outlined" />
            </Box>
            <Typography variant="h6" sx={{ mb: 1 }}>Definitions</Typography>
            <List sx={{ pl: 2 }}>
              {m.definitions.map((d, j) => (
                <ListItem key={j} sx={{ py: 0.5 }}>
                  <ListItemText primary={d.definition} />
                </ListItem>
              ))}
            </List>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
};

export default WordDetails;
