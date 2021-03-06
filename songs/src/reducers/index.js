import { combineReducers } from "redux";

const songReducer = () => {
  return [
    {
      title: "No scrubs",
      duration: "4:05",
    },
    {
      title: "Macerena",
      duration: "7:05",
    },
    {
      title: "All Star",
      duration: "3:15",
    },
    {
      title: "I want it that way",
      duration: "1:05",
    },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer,
});
