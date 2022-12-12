const sanityClient = require("@sanity/client");
import nc from "next-connect";

// Sanity Client
const sanity = sanityClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: "production",
    token: process.env.SANITY_API_WRITE_TOKEN,
});

async function createFormSubmission(data) {
    const customer = {
        _type: "formSubmission",
        ...data,
    };
    const receipt = await sanity.create(customer).then((res) => {
        console.log(`New Form Submission Created at ${res._id}`);
        return res;
    });
    return receipt._id;
}


const handler = nc()
    .get((req, res) => {
        res.json({
            code: 200,
            message: "api running"
        });
    }).post(async (req, res) => {
        try {
            const receiptId = await createFormSubmission(req.body);
            res.json({
                code: 200,
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