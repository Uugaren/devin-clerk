export type Feature = {
  title: string;
  description: string;
};

export const appConfig = {
  name: "Evento Livre",
  description:
    "plataforma pra encontrar qualquer tipo de evento de meu interesse no mundo todo.",
  emoji: "🎟️",
  accent: "#e11d48",
  upcomingFeatures: [
    {
      title: "Event search",
      description: "Search events by keyword, city and date.",
    },
    {
      title: "Interest profile",
      description:
        "Pick the event categories you care about, like music, tech or sports.",
    },
    {
      title: "World event map",
      description: "Browse events around the world on an interactive map.",
    },
    {
      title: "Saved events",
      description: "Bookmark events to a personal list you can come back to.",
    },
    {
      title: "Personalized feed",
      description: "See events recommended from your interests.",
    },
    {
      title: "Event alerts",
      description: "Get an email when a new event matches your interests.",
    },
  ] satisfies Feature[],
};
