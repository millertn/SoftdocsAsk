import {HttpClient} from 'aurelia-http-client';

export class Home {
    public httpClient = new HttpClient();
    public posts;

    constructor() {
        this.httpClient.get('https://jsonplaceholder.typicode.com/posts')
            .then(data => {
                this.posts = JSON.parse(data.response);
            });
    }
}