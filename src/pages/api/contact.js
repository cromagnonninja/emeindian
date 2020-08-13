const yup = require("yup");
const axios = require("axios").default;
const sg = require("@sendgrid/mail");
sg.setApiKey(
  "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",
);

module.exports = async (req, res) => {
  const { name, email, phone, message } =
    typeof req.body === "string" ? JSON.parse(req.body) : req.body;

  console.log({ name, email, phone, message, token: req.body.token });

  // const { data } = await axios.post(
  //   `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.SITE_SECRET}&response=${req.body.token}`,
  //   {
  //     secret: process.env.SITE_SECRET,
  //     response: req.body.token,
  //     token: req.body.token,
  //   },
  // );

  // console.log(data);

  // if (!data.success) {
  //   return res.json({ success: false, message: "Recaptcha failed" });
  // }

  yup
    .object()
    .shape({
      name: yup.string("Invalid name").required("Name is required"),
      email: yup
        .string("Invalid email")
        .email("Invalid email")
        .required("Email is required"),
      phone: yup
        .string("Invalid phone")
        .required("Phone is required")
        .matches(/\d{10}/g, "Invalid phone"),
      message: yup.string("Invalid message").required("Message is required"),
    })
    .validate({ name, email, phone, message })
    .then(r => {
      const html = `
Name: ${name}<br>
Email: ${email}<br>
Phone: ${phone}<br>
Requirement Details: <br>
${message}<br><br>
To reply to this response, simply reply to this email.
`;

      sg.send(
        {
          from: {
            email: "bhanubhandari99@gmail.com",
            name: "EMEIndian Website",
          },
          to: "bhanubhandari280@gmail.com",
          subject: `New Contact Form Response from ${name}`,
          html,
          text: html.replace(/<\/?[^>]+\/?>/g, "").trim(),
          replyTo: email,
        },
        (err, _res) => {
          if (err) {
            console.log(err);
            return res.json({
              success: false,
              message: "Your response could not be sent",
            });
          }

          return res.json({ success: true, message: "Response saved" });
        },
      );
    })
    .catch(e => {
      res.json({
        success: false,
        message: e.errors[0],
      });
    });
};
