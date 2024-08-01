export interface Post {
    title: string;
    slug: { current: string };
    image: string;
    publishedAt: string;
    excerpt: string;
    body: any;
    tags: Array<Tag>;
    _id: string;
}

export interface Tag {
    name: string;
    slug: { current: string };
    _id: string;
}

export interface Article {
    title: string;
    slug: { current: string };
    image: string;
    url: string;
    publishedAt: string;
    excerpt: string;
    body: any;
    _id: string;
    source: string;
    year: string;
}

export interface Question {
    question: string;
    answer: any;
    _id: string;
}