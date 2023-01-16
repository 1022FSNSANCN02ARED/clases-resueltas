const platos = [
  {
    id: 1,
    nombre: "Carpaccio fresco",
    descripcion: "Entrada Carpaccio de salmón con cítricos",
    precio: 65.5,
    imagen: "/images/carpaccio.jpg",
  },
  {
    id: 25,
    nombre: "Risotto de berenjena",
    descripcion: "Risotto de berenjena y queso de cabra",
    precio: 47.0,
    imagen: "/images/risotto.jpg",
  },
  {
    id: 15,
    nombre: "Mousse de arroz",
    descripcion: "Mousse de arroz con leche y aroma de azahar",
    precio: 27.5,
    imagen: "/images/mouse.jpg",
  },
  {
    id: 4,
    nombre: "Espárragos blancos",
    descripcion: "Espárragos blancos con vinagreta de verduras y jamón ibérico",
    precio: 37.5,
    imagen: "/images/esparragos.png",
  },
];

module.exports = {
  home: (req, res) => {
    res.render("index", {
      platos,
    });
  },
  detail: (req, res) => {
    const id = req.params.id;

    const plato = platos.find((plato) => {
      return plato.id == id;
    });

    res.render("detalleMenu", {
      plato: plato,
    });
  },
};
