type Image = {
    id: string,
    chapter: string,
    manga: string,
    index: number,
    link: string,
}

type ImageResponse = {
    code: number,
    data: Image[]
}