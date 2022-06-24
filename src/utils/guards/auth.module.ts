import { Module } from '@nestjs/common';
import { UsersService } from 'src/routes/users/users.service';

@Module({})
export class GuardsModule {
    providers: [UsersService]
}