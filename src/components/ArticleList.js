import Article from "./Article";

function ArticleList(articles) {
    // console.log(articles.articles.posts)

    return articles.articles.posts.map((myArticle) => {
    return (
        <main>
            <Article 
                id = {myArticle.id}
                title = {myArticle.title}
                date = {myArticle.date}
                preview = {myArticle.preview}
            />
        </main>
        );
    })
}

export default ArticleList;