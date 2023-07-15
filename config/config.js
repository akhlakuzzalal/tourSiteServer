const config = {
  development: {
    NOSQL: "mongodb+srv://shifat:s!fu!su99@cluster0.0dpwa.mongodb.net/travel-management?retryWrites=true&w=majority",
  },
  production: {
    NOSQL: "mongodb+srv://shifat:s!fu!su99@cluster0.0dpwa.mongodb.net/travel-management?retryWrites=true&w=majority",
  },
};

const configData =
  process.env.NODE_ENV === "DEV" ? config.development : config.production;

module.exports = configData;
