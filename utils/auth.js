const withAuth = (req, res, next) => {
    // If the user is not logged in, redirect the request to the login route
    if (!req.session.logged_in) {
<<<<<<< HEAD
        res.redirect('/');
    } else {
        next();
    }
};

module.exports = withAuth;
=======
      res.redirect('/login');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;
  
>>>>>>> 4fccf1bd31fd4c1d921b45808a1518b05ac00ed7
