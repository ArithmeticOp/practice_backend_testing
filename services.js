const port = process.env.PORT || 3000

module.exports = ({ app }) => {

    /*
        ## TEMPLATE
        > app.METHOD(PATH, HANDLER)
        ### METHOD IDEMPOTENT
        > IDEMPOTENT IT NOT EFFECT TO RESOURCE
        * GET
        * PUT
        * DELETE
        ### METHOD NOT IDEMPOTENT
        > NOT IDEMPOTENT IS EFFECT TO RESOURCE
        * POST
    */

    app.get('/ping', (req, res, next) => {
        res.send('pong')
    })

    app.listen(port, () => {
        console.log(`App listening at http://localhost:${port}`)
    })

    return {
        express_app: app
    }
}