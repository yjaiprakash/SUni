const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  // host: "smtp.gmail.com",
  // port: 465,
  // secure: true,
  service:'gmail',
  auth:{
    type:'OAuth2',
    user:'jpiiitg@gmail.com',
    refreshToken:'1//04-kBiZ-QGoJGCgYIARAAGAQSNwF-L9IrWvOlA9_26pdLITHPw580nV95Nl8hAD0Auy3QDvs7HH90rUfTlLBfG782JsQtM5-WpTY',
    accessToken:'ya29.A0ARrdaM_vh8n7nP_0J9P4Aa2SKTLwzzPXz2_7LVHbeAMrqJXP4fja_hx50b0ayX46HbJUXOm08EdXo7NeCgdbbzddvlb__kJyVqMbqswScOHk6VWp0V0flqKv05IsKt2EgHWrOjC20LmAJoEWYx66VyYj7XJiYUNnWUtBVEFTQVRBU0ZRRl91NjFWNXIyM0hfT0FwNkUwVzh4aTUyUnRBQQ0163'
    ,clientId:'201584190780-5deuf6n37h4ke7uv5r1f2ut9ecqg1uak.apps.googleusercontent.com',
    clientSecret:'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'
  }
});

const OTPmail = (email, OTP, id) => {
  const promise = new Promise((res, rej) => {
    transporter.sendMail(
      {
        from: '"SUni" rituw1610@gmail.com',
        to: email,
        subject: 'Verify your sign up',
        html: `<h3>Below is your one time password:</h3><h2>${OTP}</h2>Or click on the link to <strong><a href="http://localhost:3000/auth/verify/${id}?otp=${OTP}">Verify Account</a><strong><br/>This OTP and verification link is valid for 1 hour<br/><br/>Team SUni`,
      },
      (e) => {
        if (e) {
          rej(e);
        } else {
          res('OTP mail sent');
        }
      }
    );
  });
  return promise;
};

module.exports = { OTPmail };
