import { HttpClient } from "aurelia-http-client";

export class Post {
    public httpClient = new HttpClient();
    public postData;
    public author;
    public comments;

    activate(token) {
        this.httpClient.get('https://jsonplaceholder.typicode.com/posts/' + token.id)
        .then(post => {
            this.postData = JSON.parse(post.response);
            this.httpClient.get('https://jsonplaceholder.typicode.com/users/' + this.postData.userId)
            .then(author => {
                this.author = JSON.parse(author.response);
            });

            this.httpClient.get('https://jsonplaceholder.typicode.com/posts/' + token.id + '/comments')
            .then(comments => {
                this.comments = JSON.parse(comments.response);
            });
            // console.log(this.postData);
        });
    }
}