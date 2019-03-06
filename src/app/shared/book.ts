import { Thrumbnail } from './thrumbnail';
export { Thrumbnail } from './thrumbnail';


export class Book {
    constructor(
        public isbn: string,
        public title: string,
        public authors: string[],
        public published: Date,
        public subtitle?: string,
        public rating?: number,
        public thrumbnails?: Thrumbnail[],
        public description?: string
    ) {}
}
