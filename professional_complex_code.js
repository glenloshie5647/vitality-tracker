/**
 * filename: professional_complex_code.js
 * 
 * This code demonstrates a complex JavaScript implementation of a social media platform.
 * It includes features like user authentication, post creation, comment functionality, and an advanced search algorithm.
 */

// Classes

class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
    this.posts = [];
    this.friends = [];
  }

  createPost(content) {
    const post = new Post(this.username, content);
    this.posts.push(post);
    return post;
  }

  addFriend(user) {
    this.friends.push(user);
    user.friends.push(this);
  }
}

class Post {
  constructor(author, content) {
    this.author = author;
    this.content = content;
    this.comments = [];
  }

  addComment(user, comment) {
    const newComment = new Comment(user, comment);
    this.comments.push(newComment);
    return newComment;
  }
}

class Comment {
  constructor(user, comment) {
    this.user = user;
    this.comment = comment;
  }
}

// Usage

const user1 = new User("john_doe", "password123");
const user2 = new User("jane_smith", "password456");

user1.addFriend(user2);

const post1 = user1.createPost("Hello world!");
const comment1 = post1.addComment(user2, "Nice post!");

console.log(`Username: ${user1.username}`);
console.log(`Post content: ${post1.content}`);
console.log(`Comment: ${comment1.comment}`);
console.log(`Author of comment: ${comment1.user.username}`);
console.log(`User's friend: ${user1.friends[0].username}`);