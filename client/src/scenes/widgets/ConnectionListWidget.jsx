import { Box, Typography, useTheme } from "@mui/material";
import Connection from "../../components/Connection";
import WidgetWrapper from "../../components/WidgetWrapper";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setConnection } from "../../state";

const ConnectionListWidget = ({ userId }) => {
  const dispatch = useDispatch();
  const { palette } = useTheme();
  const token = useSelector((state) => state.token);
  const Connections = useSelector((state) => state.user.connections) || [];
  //console.log(Connections);

  const getConnections = async () => {
    const response = await fetch(
      `http://localhost:5000/users/${userId}/Connections`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const data = await response.json();
    dispatch(setConnection({ Connections: data }));
  };

  useEffect(() => {
    getConnections();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <WidgetWrapper>
     <Typography
        color={palette.neutral.dark}
        variant="h5"
        fontWeight="500"
        sx={{ mb: "1.5rem" }}
      >
        Connection List
      </Typography>
      <Box display="flex" flexDirection="column" gap="1.5rem">
        {Connections.map((connection) => (
          <Connection
            key={connection._id}
            connectionId={connection._id}
            name={`${connection.firstName} ${connection.lastName}`}
            subtitle={connection.occupation}
            userPicturePath={connection.picturePath}
          />
        ))}
      </Box>
    </WidgetWrapper>
  );
};

export default ConnectionListWidget;
