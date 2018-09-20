const router = require('express').Router();
const FooterController = require('../FooterPlayer/server/controller.js');
const HeroController = require('../HeroPlayer/server/controller.js');
const CommentsController = require('../CommentSection/server/controller.js');
const SideBarController = require('../SideBar/server/controller.js');

router
  .route('/songs')
  .get(FooterController.fetch);

router
  .route('/heroPlayer')
  .get(HeroController.fetch);

router
  .route('/comments')
  .get(CommentsController.fetchAllComments)
  .post(CommentsController.createOneComment)
  .delete(CommentsController.eraseOneComment);

router
  .route("/replies")
  .get(CommentsController.fetchAllCommentReplies);

router
  .route("/users")
  .get(CommentsController.fetchAllUsers);

router
  .route('/relatedTracks')
  .get(SideBarController.relatedTracks.get);

router
  .route('/playlists')
  .get(SideBarController.playlists.get)

router
  .route('/usersLiked')
  .get(SideBarController.usersLiked.get)

router
  .route('/usersReposts')
  .get(SideBarController.usersReposts.get)

module.exports = router;
