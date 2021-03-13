const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const expressValidator = require("express-validator");
const { MONGODB_URI } = require('./config/keys');
const cors = require("cors");


//import routes
const authRoutes=require("./routes/auth");
const userProfileRoutes=require("./routes/userProfile");
const orgProfileRoutes=require("./routes/orgProfile");
const trialRoutes=require("./routes/trial");
const applicationRoutes=require("./routes/application");


//app
const app = express();



//db
mongoose.connect(MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
)
  .then(() => console.log("DB Connected"));

//middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());

//routes middleware
app.use("/api",authRoutes);
app.use("/api",userProfileRoutes);
app.use("/api",orgProfileRoutes);
app.use("/api",trialRoutes);
app.use("/api",applicationRoutes);


const port = process.env.PORT || 8000;



app.listen(port, () => {
  console.log(`Server is running on localhost:${8000}`);
});
