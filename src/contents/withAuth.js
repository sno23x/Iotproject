const express=require("express")
const router = express.Router()
const {login} = require("./authController")

router.post('/login',login)

module.exports=router

// import { withAuth } from './withAuth';

// function Dashboard() {
//   return <h1>Dashboard</h1>;
// }

// export default withAuth(Dashboard);