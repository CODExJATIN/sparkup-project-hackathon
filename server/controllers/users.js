import User from "../models/User.js";

/* READ */
export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getUserConnection = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    const connection = await Promise.all(
      user.connections.map((id) => User.findById(id))
    );
    const formattedConnections = connection.map(
      ({ _id, firstName, lastName, accounType, location, picturePath }) => {
        return { _id, firstName, lastName, accounType, location, picturePath };
      }
    );
    res.status(200).json(formattedConnections);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

/* UPDATE */
export const addRemoveConnection = async (req, res) => {
  try {
    const { id, connectionId } = req.params;
    const user = await User.findById(id);
    const friend = await User.findById(connectionId);

    if (user.connections.includes(connectionId)) {
      user.connections = user.connections.filter((id) => id !== connectionId);
      friend.connections = friend.connections.filter((id) => id !== id);
    } else {
      user.connections.push(connectionId);
      friend.connections.push(id);
    }
    await user.save();
    await friend.save();

    const connection = await Promise.all(
      user.connections.map((id) => User.findById(id))
    );
    const formattedConnections = connection.map(
      ({ _id, firstName, lastName, accountType, location, picturePath }) => {
        return { _id, firstName, lastName, accountType, location, picturePath };
      }
    );

    res.status(200).json(formattedConnections);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};