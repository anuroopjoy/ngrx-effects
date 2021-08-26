import { Injectable } from '@nestjs/common';
import { movieList } from './movies.constants';

@Injectable()
export class AppService {
  getCategories(): { name: string }[] {
    return [
      { name: 'Action' },
      { name: 'Animation' },
      { name: 'Comedy' },
      { name: 'Horror' },
    ];
  }

  getMovies(): { name: string }[] {
    return movieList;
  }
}
