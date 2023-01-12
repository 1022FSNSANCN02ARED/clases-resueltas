// <h4>Carpaccio fresco</h4>
// <p class="ps-text-grey">
//   Entrada Carpaccio de salmón con cítricos U$S 65.50
// </p>
// <br />

// <h4>Risotto de berenjena</h4>
// <p class="ps-text-grey">
//   Risotto de berenjena y queso de cabra U$S 47.00
// </p>
// <br />

// <h4>Mousse de arroz</h4>
// <p class="ps-text-grey">
//   Mousse de arroz con leche y aroma de azahar U$S 27.50
// </p>
// <br />

// <h4>Espárragos blancos</h4>
// <p class="ps-text-grey">
//   Espárragos blancos con vinagreta de verduras y jamón ibérico U$S
//   37.50
// </p>

const platos = [
  {
    nombre: "Carpaccio fresco",
    descripcion: "Entrada Carpaccio de salmón con cítricos",
    precio: 65.5,
  },
  {
    nombre: "Risotto de berenjena",
    descripcion: "Risotto de berenjena y queso de cabra",
    precio: 47.0,
  },
  {
    nombre: "Mousse de arroz",
    descripcion: "Mousse de arroz con leche y aroma de azahar",
    precio: 27.5,
  },
  {
    nombre: "Espárragos blancos",
    descripcion: "Espárragos blancos con vinagreta de verduras y jamón ibérico",
    precio: 37.5,
  },
];

module.exports = {
  home: (req, res) => {
    res.render("index", {
      platos,
    });

    const htmlRenderizado = ejs.render(
      fs.readFileSync(__dirname, "../views", "utf-8"),
      { platos }
    );
    res.send(htmlRenderizado);
  },
};
