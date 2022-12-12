const sanityClient = require("@sanity/client");
import nc from "next-connect";
import fetch from 'node-fetch';
// Sanity Client
const sanity = sanityClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: "production",
    token: process.env.SANITY_API_WRITE_TOKEN,
});

async function createFormSubmission(data) {
    const sanityData = { ...data };
    delete sanityData.token;
    const customer = {
        _type: "formSubmission",
        ...sanityData,
    };
    const receipt = await sanity.create(customer).then((res) => {
        console.log(`New Form Submission Created at ${res._id}`);
        return res;
    });
    return receipt._id;
}

async function handleCaptcha(token) {
    try {
        const response = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.SECRET_KEY}&response=${token}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        )
        const json = await response.json();

    } catch (err) {

    }


}


const handler = nc()
    .get((req, res) => {
        res.json({
            code: 200,
            message: "api running"
        });
    }).post(async (req, res) => {
        let captchaData;
        try {
            const response = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.SECRET_KEY}&response=${token}`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
            )
            const json = await response.json();
            captchaData = json;
        } catch (err) {
            res.json({
                code: 400, message: err
            })
        }
        try {
            const receiptId = await createFormSubmission(req.body);
            res.json({
                code: 200,
                captchaData,
                documentId: receiptId
            })
        } catch (err) {
            res.json({
                code: 400,
                message: "Error occured when creating new form submission: " + err
            })
        }
    })

export default handler;