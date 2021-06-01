const router = require('express').Router();
const { Portfolio, User } = require('../models');
// const withAuth = require('../utils/auth');



router.get('/', async (req, res) => {
 
    res.render('homepage',);
  
});

router.get('/watchlist', async (req, res) => {
  try {
    // Get all users, sorted by name
    const userData = await Portfolio.findAll({
    
    });

    // Serialize user data so templates can read it
    const users = userData.map((project) => project.get({ plain: true }));

    // Pass serialized data into Handlebars.js template
    res.render('stockcarddetails', { users });
  } catch (err) {
    res.status(500).json(err);
  }
});





// // Use withAuth middleware to prevent access to route
// router.get('/', withAuth, async (req, res) => {
//   try {

//     // Find the logged in user based on the session ID
//     const userData = await Portfolio.findAll({
//         where: {
//             user_id: req.session.user_id,
//         }
//     });
//     const user = userData.get({ plain: true });
//     res.render('stockcarddetails', {
//       ...user,
//       logged_in: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/watchlist', (req, res) => {
//   // If the user is already logged in, redirect the request to another route
//   if (req.session.logged_in) {
//     res.redirect('/');
//     return;
//   }

//   res.render('stockcarddetails');
// });

module.exports = router;
