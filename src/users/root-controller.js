
export const sendWelcomeMessage = async (req, res) => {
    try{
        res.status(200).send('HELLO THIS IS THE HOME PAGE');
    }
    catch(e) {
        res.status(500).send(e.message)
    }
}


export const rootController = {
    sendWelcomeMessage
}