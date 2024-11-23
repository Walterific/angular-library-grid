import { Injectable } from "@angular/core";
import { Book } from "../model/book.model";

@Injectable({
    providedIn: 'root',
})

export class ProductService {
    private fiction: Book[] = [
        { id: 1, name: 'To Kill a Mockingbird', description: 'A classic novel of race, justice, and morality in the Deep South.', img: 'assets/img/book__img1.jpg' },
        { id: 2, name: 'Pride and Prejudice', description: 'A timeless romance and satire of societal expectations.', img: 'assets/img/book__img2.jpg' },
        { id: 3, name: '1984', description: 'A dystopian novel exploring themes of surveillance and totalitarianism.', img: 'assets/img/book__img3.jpg' },
        { id: 4, name: 'The Great Gatsby', description: 'A tale of wealth, ambition, and love in 1920s America.', img: 'assets/img/book__img4.jpg' },
        { id: 5, name: 'The Catcher in the Rye', description: 'A novel about adolescent alienation and rebellion.', img: 'assets/img/book__img5.jpg' },
    ];

    private nonFiction: Book[] = [
        { id: 1, name: 'Sapiens: A Brief History of Humankind', description: 'A thought-provoking exploration of human history and evolution.', img: 'assets/img/book__img6.jpg' },
        { id: 2, name: 'Educated', description: 'A memoir about overcoming adversity through education.', img: 'assets/img/book__img7.jpg' },
        { id: 3, name: 'The Immortal Life of Henrietta Lacks', description: 'The story of a woman whose cells revolutionized medicine.', img: 'assets/img/book__img8.jpg' },
        { id: 4, name: 'Becoming', description: 'Michelle Obama’s inspirational memoir.', img: 'assets/img/book__img9.jpg' },
        { id: 5, name: 'The Wright Brothers', description: 'The story of the pioneers of aviation.', img: 'assets/img/book__img10.jpg' }
    ];

    private scienceFiction: Book[] = [
        { id: 1, name: 'Dune', description: 'A science fiction epic of politics, religion, and ecology.', img: 'assets/img/book__img11.jpg' },
        { id: 2, name: 'Ender’s Game', description: 'A thrilling story of a young genius training for intergalactic war.', img: 'assets/img/book__img12.jpg' },
        { id: 3, name: 'The Martian', description: 'A gripping tale of survival on Mars.', img: 'assets/img/book__img13.jpg' },
        { id: 4, name: 'Neuromancer', description: 'The seminal cyberpunk novel that redefined the genre.', img: 'assets/img/book__img14.png' },
        { id: 5, name: 'Foundation', description: 'A masterpiece of galactic empire and science by Isaac Asimov.', img: 'assets/img/book__img15.jpg' }
    ];

    getFiction(): Book[] {
        return this.fiction;
    }

    getNonFiction(): Book[] {
        return this.nonFiction;
    }

    getScienceFiction(): Book[] {
        return this.scienceFiction;
    }
}
