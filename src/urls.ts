export const NOT_CONNECTED_URLS = {
  signin: "/signin",
  signup: "/signup",
};

export const CONNECTED_URLS = {
  home: "/home",
  teamsList: "/teams",
  teamsCreate: "/teams/create",
  // view: (id: string) => `/teams/${id}`,
  // edit: (id: string) => `/teams/${id}/edit`,
  gamesList: "/games",
  gamesCreate: "/games/create",
  // view: (id: string) => `/games/${id}`,
  // edit: (id: string) => `/games/${id}/edit`,
};

export const URLS = {
  ...CONNECTED_URLS,
  ...NOT_CONNECTED_URLS,
};
