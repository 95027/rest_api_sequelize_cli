const app =  (req, res) => {
    res.json({
        status : true,
        message : 'this is from api'});
};

module.exports = {
    app,  
}