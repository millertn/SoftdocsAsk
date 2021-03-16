import { HttpClient } from "aurelia-http-client";

export class Author {
    public httpClient = new HttpClient();
    public author;
    public postId;

    activate(token) {
        this.httpClient.get('https://jsonplaceholder.typicode.com/users/' + token.id)
        .then(author => {
            this.author = JSON.parse(author.response);
        });

        this.postId = token.postId;
    }
}