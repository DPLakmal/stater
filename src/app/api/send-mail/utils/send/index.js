import Mailgun from "mailgun.js";
import formData from "form-data";
import getTable from "@/app/api/send-mail/utils/send/parts/getTable";
import getFooter from "@/app/api/send-mail/utils/send/parts/getFooter";
import getLink from "@/app/api/send-mail/utils/send/parts/getLink";
import getHeader from "@/app/api/send-mail/utils/send/parts/getHeader";
import axios from "axios";

const domain = process.env.MAILGUN_DOMAIN;

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_API_KEY || "",
});

const send = async (body) => {
  const { attachment, recipient, replyTo } = body;

  const config = {
    from: `noreply <noreply@${domain}>`,
    to: recipient,
    "h:Reply-To": replyTo,
    subject: "Contact Form Submission",
    text: "Form Submission",
    html: getEmailBody(body),
  };

  if (attachment?.url) {
    const res = await axios
      .get(attachment?.url, {
        responseEncoding: "base64",
      })
      .then((res) => {
        return res.data;
      });

    config.attachment = {
      data: Buffer.from(res, "base64"),
      filename: attachment.name,
    };
  }

  if (process.env.NODE_ENV !== "production") {
    return true;
  }

  return await mg.messages
    .create(domain, config)
    .then(() => ({ success: true, message: "Email sent" }))
    .catch((e) => {
      console.log(e);
      return { success: true, message: "Failed to send the email" };
    });
};

export default send;

const getEmailBody = ({ user, content = [] }) => {
  let html = getHeader(user);

  content.forEach((item) => {
    switch (item.type) {
      case "link":
        html += getLink(item.link, item.label, item.variant);
        break;
      case "html":
        html += item.content || "";
        break;
      case "list":
        html += getTable(item.fields);
        break;
      default:
        break;
    }
  });

  html += getFooter();

  return html;
};
