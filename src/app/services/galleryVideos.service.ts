export class GalleryVideosService {
    private videos = [
        {
            id: 0,
            title: 'Flesh',
            producer: 'Terry Barnes',
            director: 'Terry Barnes',
            actors: 'Madison, Brandon Grier, Chris Miller',
            description: 'Human Trafficking and I night with Vampires.',
            source: "../../assets/gallery/terry1.mp4"
        },
        {
            id: 1,
            title: 'Bear Country',
            producer: 'Terry Barnes',
            director: 'Terry Barnes',
            actors: 'Madison, Brandon Grier, Chris Miller',
            description: 'New Bern High Football team documentary.',
            source: "../../assets/gallery/terry1.mp4"
        },
        {
            id: 2,
            title: 'Sleepers Awake',
            producer: 'Terry Barnes',
            director: 'Terry Barnes',
            actors: 'Madison, Brandon Grier, Chris Miller',
            description: 'Going to see a movie, but the movie goer is in for a suprise.',
            source: "../../assets/gallery/terry1.mp4"
        }
    ];

    getGalleryVideos(){
        return this.videos;
    }

    getGalleryVideo(index: number){
        return this.videos[index];
    }
}