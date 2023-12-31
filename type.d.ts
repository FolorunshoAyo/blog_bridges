type BlogCarouselData = {
    image: string,
    category: string,
    title: string,
    caption: string
}

type Category = {
    name: string,
    link: string,
    imageSrc: string
}

type Article = {
    coverImage: string,
    tag: string,
    date: string,
    title: string,
    caption: string,
    likes: number,
    comments: number,
    views: number,
    authorImage: string,
    authorName: string
}

type MinifiedArticle = {
    authorImage: string,
    authorName: string,
    title: string,
    isLast?: boolean
}

type BlogCategory = {
    name: string,
    posts: number
}