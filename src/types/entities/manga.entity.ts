
type Manga = {
    id: string,
    title: string,
    sub_title: string,
    status: string,
    thumb: string,
    summary: string,
    authors: string[],
    genres: string[],
    nsfw: boolean,
    type: string,
    total_chapter: number,
    create_at: number,
    update_at: number,
}

type MangaResponse = {
    code: number,
    data: Manga[],
}
