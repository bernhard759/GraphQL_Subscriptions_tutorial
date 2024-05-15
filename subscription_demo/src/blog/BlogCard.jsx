import { Card, CardContent, Typography } from "@mui/material";

export default function BlogCard({ content, sender, id }) {
  return (
    <div style={{ alignContent: "centre", margin: "5%", maxWidth: "200px" }}>
      <Card sx={{ minWidth: 200 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Blog Number {id}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Internal blogs
          </Typography>
          <Typography variant="body2">
            {content}
            <br />
            by:{sender}
          </Typography>
        </CardContent>
        {/* <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions> */}
      </Card>
    </div>
  );
}