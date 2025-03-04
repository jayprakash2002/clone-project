

import { client, sender } from "./mailtrap.js";

let verification_Email = async (email, token) => {
    let recipient = [{ email }];

    try {
        let res = await client.send({
            from: sender,
            to: recipient,
            subject: "Email Verification",
            text: `To verify your email, please click this link: ${token}`,
            category: "verification Token"
        });
        console.log(res);
    } catch (err) {
        console.error(err);
        throw new Error("Failed to send verification email");
    }
};

export { verification_Email };
