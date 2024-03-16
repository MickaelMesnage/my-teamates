export const PAGES = {
  home: {
    url: "/home",
  },
  auth: {
    signin: {
      url: "/signin",
    },
    signup: {
      url: "/signup",
    },
  },
  teams: {
    list: {
      url: "/teams",
    },
    create: {
      url: "/teams/create",
    },
    view: {
      url: (id: string) => `/teams/${id}`,
    },
    edit: {
      url: (id: string) => `/teams/${id}/edit`,
    },
    join: {
      url: (token?: string) => `/teams/join/${token ? `?token=${token}` : ""}`,
    },
    joinSuccess: {
      url: `/teams/join-success`,
    },
  },
  games: {
    list: {
      url: "/games",
    },
    create: {
      url: "/games/create",
    },
    view: {
      url: (id: string) => `/games/${id}`,
    },
    edit: {
      url: (id: string) => `/games/${id}/edit`,
    },
  },
};
