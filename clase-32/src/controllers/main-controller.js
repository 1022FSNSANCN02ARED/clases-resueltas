module.exports = {
    showLogin: (req, res) => {
        res.render("login");
    },
    login: (request, res) => {
        const data = request.body;
        res.redirect("/");
    },

    home: (request, response) => {
        res.render("home", {
            name: "???",
            email: "???",
            favoriteColor: "????",
            birthDate: "????",
        });
    },
};
