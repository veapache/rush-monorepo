import { PrismaService } from 'src/prisma/prisma.service';
import { OrderDto } from './order.dto';
export declare class OrderController {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    findAll(): Promise<OrderDto[]>;
    getByOrdersId(id: any): Promise<OrderDto>;
    create({ userId, vehicleId }: OrderDto): Promise<OrderDto>;
    updateOrder(id: string, data: OrderDto): Promise<OrderDto>;
    removeOrder(id: string): Promise<OrderDto>;
}
