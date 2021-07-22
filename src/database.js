const mongoose = require("mongoose");

(async () => {
  try {
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    };

    const db = await mongoose.connect(process.env.MONGODB_URI, options);
    console.log(
      "Connected to DB: (",
      db.connection.name,
      ") at:",
      db.connection.host
    );
  } catch (error) {
    console.error(error);
  }
})();
