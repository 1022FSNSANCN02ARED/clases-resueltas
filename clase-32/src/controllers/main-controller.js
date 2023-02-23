module.exports = {
    showLogin: (req, res) => {
        //flash messages
        const errors = req.session.errors;
        const oldData = req.session.oldData;
        req.session.errors = null;
        req.session.oldData = null;

        res.render("login", {
            errors: errors ? errors : null,
            oldData: oldData ? oldData : null,
        });
    },

    //post
    login: (request, response) => {
        const data = request.body;

        // response.cookie("userData", JSON.stringify(data));
        request.session.userData = data;

        response.redirect("/");
    },

    home: (request, response) => {
        // const data = JSON.parse(request.cookies.userData);
        const data = request.session.userData;

        response.render("index", {
            name: data.name,
            email: data.email,
            favoriteColor: data.color,
            birthDate: data.birthDate,
        });
    },
};
