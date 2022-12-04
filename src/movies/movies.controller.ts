import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Patch,
  Body,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') movieId: string): Movie {
    //필요한 것이 있을땐 반드시 요청을 해야한다. @Param()을 통해서 요청을 하고 props로 받는 구조다.
    return this.moviesService.getOne(movieId);
  }

  @Post()
  create(@Body() movieData) {
    //@Body를 사용해서 object형식의 JSON을 추가할 수 있다.
    return this.moviesService.create(movieData);
  }

  @Delete(':id')
  remove(@Param('id') movieId: string) {
    return this.moviesService.deleteOne(movieId);
  }

  @Patch(':id') //데코레이터 Put과 Patch두가지가 있는데 Put은 모든 리소스를 받아오기 때문에 적합하지 않을 수 있다.
  patch(@Param('id') movieId: string, @Body() updateData) {
    return this.moviesService.update(movieId, updateData);
  }
}
