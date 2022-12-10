import { Controller, Get, HttpCode } from '@nestjs/common';

@Controller('health')
export class HealthController {
    @Get()
    @HttpCode(200)
    findAll(): string {
        return 'The API is suuuuuuuuuper healthy!';
    }
}
