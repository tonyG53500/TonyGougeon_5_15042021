class Main {

    articleTab = [];

    constructor()
    {
        this.articleTab = [];
        this.start();
    }

    async getArticles() {
        this.articleTab = await cam.camera;
    }
    
    displayArticle(article) {
        document.getElementById("row").innerHTML += article.display();
    }

    async start()
    {
        const articles = await this.getArticles()
        let article;
        for (article of this.articleTab) {
            this.displayArticle(article)
        }

    }
}