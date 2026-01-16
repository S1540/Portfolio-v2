import * as React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";

const SkillBufferBar = ({ name, target, color }) => {
  const [progress, setProgress] = React.useState(0);
  const [buffer, setBuffer] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((old) => {
        if (old >= target) return target;
        return old + 1;
      });

      setBuffer((old) => {
        if (old >= target + 10) return target + 10;
        return old + Math.random() * 5;
      });
    }, 20);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <Box sx={{ mb: 3 }}>
      {/* Label */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          fontWeight: 700,
          mb: 0.5,
        }}
      >
        <Typography sx={{ color: "#fff" }}>{name}</Typography>
        <Typography sx={{ color }}>{target}%</Typography>
      </Box>

      {/* Progress */}
      <LinearProgress
        variant="buffer"
        value={progress}
        valueBuffer={buffer}
        sx={{
          height: 8,
          borderRadius: 5,
          backgroundColor: "#27272a",
          "& .MuiLinearProgress-bar": {
            backgroundColor: color,
          },
          "& .MuiLinearProgress-bar2": {
            backgroundColor: `${color}55`,
          },
        }}
      />
    </Box>
  );
};

export default SkillBufferBar;
