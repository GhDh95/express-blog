const Post = require('../models/Post');

const PostController = {
    index: async (req, res) => {
        try{
            const posts  = await Post.getPosts();
            res.render('index', {
                posts: posts,
                error: res.locals.error || null,
            })
        } catch (err) {
            req.session.error = "problem getting posts";
            res.render('index', {
                posts: [],
            });
        }

    },
    store: async (req, res) => {
        let error = "";

        if(!req.body.title || !req.body.article){
            error = "Please fill in all fields";
        }
        if (error !== "") {
            req.session.error = error; // Set the error message in the session
            return res.redirect('back'); // Redirect back to the form
        }
        try {
            await Post.createPost(req.body);
            req.session.error  = "post created successfully";
            res.redirect('/');
        }catch (err) {
            req.session.error = "problem creating post";
            res.redirect('back');
        }

    },
    show: async (req, res) => {
        let id = req.params.id;
        try {
            const post = await Post.getPost(id);
            res.render('show', {
                post: post,
            });
        } catch (err) {
            req.session.error = "problem getting post";
            res.redirect('/');
        }
    }
}

module.exports = PostController;