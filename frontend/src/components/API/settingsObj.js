export default function settingsObj(userDetail,
  numOfTracks, artists, themes, market,
  personalisationBtn, spotifyBtn) {
  return {
    user: {
      id: userDetail.value.id,
      name: userDetail.value.name,
      location: userDetail.value.location,
      email: userDetail.value.email,
      personalisation: {
        numOfTracks,
        artists,
        themes,
        market,
      },
    },
    last_checked: {
      muserfly: personalisationBtn.value.checked,
      spotify: spotifyBtn.value.checked,
    },
  };
}
