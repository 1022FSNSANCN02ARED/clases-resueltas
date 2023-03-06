const { Router } = require("express");
const router = Router();
const controller = require("../controllers/seriesController");

//SERIES
router.get("/", controller.list);
router.get("/add", controller.add);
router.post("/", controller.create);
router.get("/:id/edit", controller.edit);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

router.get("/:id", controller.detail);

//SEASONS AND EPISODES

//ADD SEASON
router.get("/:id/season/add", controller.addSeason);
router.post("/:id/season/", controller.createSeason);

//EDIT SEASON
router.get("/:id/season/:seasonId/edit", controller.editSeason);
router.put("/:id/season/:seasonId", controller.updateSeason);

//ADD EPISODE
router.get("/:id/season/:seasonId/episode/add", controller.addEpisode);
router.post("/:id/season/:seasonId/episode/", controller.createEpisode);

//EDIT EPISODE
router.get(
  "/:id/season/:seasonId/episode/:episodeId/edit",
  controller.editEpisode
);
router.put(
  "/:id/season/:seasonId/episode/:episodeId",
  controller.updateEpisode
);

//DELETE SEASON & EPISODE
router.delete("/:id/season/:seasonId", controller.deleteSeason);
router.delete(
  "/:id/season/:seasonId/episode/:episodeId",
  controller.deleteEpisode
);

module.exports = router;
