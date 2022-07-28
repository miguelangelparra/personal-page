import { Experience } from '../../interfaces/';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

interface Props {
 experience: Experience
}

export const ExperienceCard = ({experience}:Props) => {
  return (
    <Card sx={{ marginBottom: 1 }}>
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: "pre-line" }}>
          {experience.title}          </Typography>
          <Typography sx={{ whiteSpace: "pre-line" }}>
          {experience.company}          </Typography>
          <Typography sx={{ whiteSpace: "pre-line" }}>
          {experience.time}          </Typography>
          <Typography sx={{ whiteSpace: "pre-line" }}>
          {experience.description}          </Typography>
        </CardContent>
        <CardActions
          sx={{ display: "flex", justifyContent: "end", paddingRight: 2 }}
        >
          <Typography variant="body2">Hace 30 minutos</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

{/* <div key={experience.id} className="card">
<h4>{experience.title}</h4>
<h5>{`${experience.company} | ${experience.location}`}</h5>
<h5>{experience.time}</h5>
<p>{experience.description}</p>
</div> */}