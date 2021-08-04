import { PrismaService } from 'src/prisma/prisma.service';
import { MovieDto } from './movies.dto';
export declare class MoviesController {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    findAll(): Promise<MovieDto[]>;
    create({ director, movieName, yearReleased }: MovieDto): Promise<MovieDto>;
}
