import { Test, TestingModule } from '@nestjs/testing';
import { BooksService } from './books.service';

import { BOOKS } from '../../mocks/books.mock';

describe('BooksService', () => {
  let service: BooksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BooksService],
    }).compile();

    service = module.get<BooksService>(BooksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return a list of all books', async () => {
    const result = await service.getBooks();
    expect(result).toBe(BOOKS);
  });

  it('should return the right book', async () => {
      const result = await service.getBook(1);
      expect(result).toBe(BOOKS[0]);
  });

  it('should add a book properly', async () => {
      const newBook = {
          id: 101,
          title: '101st Book',
          description: 'This is the description for the 101st book',
          author: 'Nikola',
      };
      const result = await service.addBook(newBook);
      expect(result[result.length -1]).toBe(newBook);
  });

  it('should delete a book properly', async () => {
      await service.deleteBook(2);
      const result = await service.getBooks();
      expect(result.findIndex(r => r.id === 2)).toBe(-1);
  });
});
