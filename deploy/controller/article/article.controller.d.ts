import { NewsService } from '../news/news.service';
export declare class ArticleController {
    private readonly newsService;
    constructor(newsService: NewsService);
    index(): string;
}
