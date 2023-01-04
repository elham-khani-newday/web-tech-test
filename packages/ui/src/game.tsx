import {
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
} from '@mui/material';

type PlayerProps = {
  id: string;
};

const Player = ({ id }: PlayerProps) => (
  <FormControl>
    <FormLabel>Player {id}</FormLabel>
    <RadioGroup aria-labelledby={`player-${id}`} name={`player-${id}`}>
      <FormControlLabel value="rock" control={<Radio />} label="rock" />
      <FormControlLabel value="paper" control={<Radio />} label="paper" />
      <FormControlLabel value="scissors" control={<Radio />} label="scissors" />
    </RadioGroup>
  </FormControl>
);

export const Game = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // TODO use Fetch API to get outcome
    console.log({
      playerOneSelected: data.get('player-one'),
      playerTwoSelected: data.get('player-two'),
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <form onSubmit={handleSubmit} noValidate>
          <Grid
            container
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid container direction="row" justifyContent="space-between">
              <Player id="one" />
              <Player id="two" />
            </Grid>
            <Grid item>
              <Button type="submit" variant="contained">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
        <Container>Outcome: draw</Container>
      </Box>
    </Container>
  );
};
