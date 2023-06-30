import http from "k6/http";

export const options = {
  discardResponseBodies: true,
  scenarios: {
    contacts: {
      executor: "constant-vus",
      vus: 10000,
      duration: "30s",
      gracefulStop: "1m",
    },
  },
};

export default function () {
  http.post(`http://localhost:3000/api/games/`);
}
