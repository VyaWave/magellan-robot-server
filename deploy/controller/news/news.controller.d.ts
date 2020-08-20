import { NewsService } from './news.service';
export declare class NewsController {
    private newsService;
    constructor(newsService: NewsService);
    index(): {
        newsList: {
            title: string;
        }[];
    };
}
