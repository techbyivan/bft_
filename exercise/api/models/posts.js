const PATH = "./data.json"
const { raw } = require("express");
const fs = require("fs");

class Post {
	get() {
		// get post
		return this.readData();
	}

	getIndividualBlog(postId) {
		// get one blog post
		const posts = this.readData();
		const foundPost = posts.find((post) => post.id == postId);
		return foundPost;
	}

	add(newPost) {
		// add new post
		const currentPosts = this.readData();
		currentPosts.unshift(newPost)
		this.storeData(currentPosts)
	}

	readData() {
		// reads blog api
		let rawData = fs.readFileSync(PATH);
		let posts = JSON.parse(rawData);
		return posts;
	}

	storeData(rawData) {
		let data = JSON.stringify(rawData);
		fs.writeFileSync(PATH, data)
	}
}

module.exports = Post;
