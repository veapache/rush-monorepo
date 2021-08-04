import { PrismaService } from 'src/prisma/prisma.service';
import { VehicleDto } from './vehicle.dto';
export declare class VehicleController {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    findAll(): Promise<VehicleDto[]>;
    getByVehiclesId(id: any): Promise<VehicleDto>;
    create({ brand, model }: VehicleDto): Promise<VehicleDto>;
    updateVehicle(id: string, data: VehicleDto): Promise<VehicleDto>;
    removeVehicle(id: string): Promise<VehicleDto>;
}
